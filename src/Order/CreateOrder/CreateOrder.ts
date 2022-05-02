import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";
import { UniqScript } from "../../generateUniqCodeScript";
class CreateOrder implements ICreateOrder {
  readonly createdAt: Date;
  readonly orderId: number;
  readonly OrderDoc: Order;

  constructor(
    readonly client: string,
    readonly location: Locale,
    readonly items: ClientProduct[],
    readonly price: number,
    readonly phone: string
  ) {
    this.createdAt = new Date();
    this.orderId = new UniqScript().uniqCode;

    this.OrderDoc = {
      client: this.client,
      createdAt: this.createdAt,
      // Creating an array from the items recieved (This catches undefined fields)
      items: Array.from(items, (item) => {
        return {
          _id: item._id,
          description: item.description,
          name: item.name,
          price: item.price,
        };
      }),
      location: {
        bairro: this.location.bairro,
        casa: this.location.casa,
        reference: this.location.reference,
        rua: this.location.rua,
      },
      phone: this.phone,
      price: this.price,
    };
  }

  private async checkCredentials(): Promise<boolean> {
    const docRef = collection(OrdersDB, "Credentials");
    const docQuery = where("phone", "==", this.phone);
    const queryDoc = await getDocs(query(docRef, docQuery));
    if (queryDoc.size > 0) return false;
    return true;
  }

  private async setCredentials() {
    try {
      const docLocal = doc(OrdersDB, "Credentials", this.orderId.toString());
      await setDoc(docLocal, {
        client: this.client,
        code: this.orderId,
        phone: this.phone,
      });

      return {
        status: true,
        credentials: {
          passCode: this.orderId,
          client: this.client,
        },
      };
    } catch (e) {
      return {
        status: false,
        error: e,
      };
    }
  }
  public async execute() {
    const docLocal = doc(OrdersDB, "Pedidos", this.orderId.toString());

    if (await this.checkCredentials()) {
      try {
        await setDoc(docLocal, this.OrderDoc);
        return await this.setCredentials();
      } catch (e) {
        return {
          status: false,
          error: e,
        };
      }
    }
    // Case credentials already exists
    return {
      status: false,
      error: "Pedido já existente neste número",
    };
  }
}

export { CreateOrder };
