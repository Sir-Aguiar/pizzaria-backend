import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";
import { UniqScript } from "../../generateUniqCodeScript";
class CreateOrder implements ICreateOrder {
  readonly createdAt: Date;
  readonly orderId: number;

  constructor(
    readonly client: string,
    readonly location: Locale,
    readonly items: ClientProduct[],
    readonly price: number,
    readonly phone: string
  ) {
    this.createdAt = new Date();
    this.orderId = new UniqScript().uniqCode;
  }
  private async checkCredentials(): Promise<boolean> {
    const docRef = collection(OrdersDB, "Credentials");
    const docQuery = where("phone", "==", this.phone);
    const queryDoc = await getDocs(query(docRef, docQuery));
    if (queryDoc.size > 0) {
      return false;
    }
    return true;
  }
  private async setCredentials() {
    try {
      if (await this.checkCredentials()) {
        const docLocal = doc(OrdersDB, "Credentials", this.orderId.toString());
        const credentialDoc = {
          client: this.client,
          code: this.orderId,
          phone: this.phone,
        };
        await setDoc(docLocal, credentialDoc);
        return {
          status: true,
          credentials: {
            passCode: this.orderId,
            client: this.client,
          },
        };
      }
      return {
        status: false,
        error: "Pedido já existente neste número",
      };
    } catch (e) {
      return {
        status: false,
        error: e,
      };
    }
  }
  public async execute() {
    const orderItems: ClientProduct[] = [];
    this.items.forEach((item) => {
      orderItems.push({
        _id: item._id,
        description: item.description,
        name: item.name,
        price: item.price,
      });
    });
    const docLocal = doc(OrdersDB, "Pedidos", this.orderId.toString());
    const orderDoc: Order = {
      client: this.client,
      createdAt: this.createdAt,
      items: orderItems,
      location: {
        bairro: this.location.bairro,
        casa: this.location.casa,
        reference: this.location.reference,
        rua: this.location.rua,
      },
      phone: this.phone,
      price: this.price,
    };
    try {
      await setDoc(docLocal, orderDoc);
      const credentials = await this.setCredentials();
      return credentials;
    } catch (e) {
      return {
        status: false,
        error: e,
      };
    }
  }
}

export { CreateOrder };
