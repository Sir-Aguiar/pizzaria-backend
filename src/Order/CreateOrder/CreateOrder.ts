import { doc, setDoc } from "firebase/firestore";
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
  private async setCredentials() {
    try {
      const docLocal = doc(OrdersDB, "Credentials", this.client);
      const credentialDoc = {
        client: this.client,
        code: this.orderId,
      };
      await setDoc(docLocal, credentialDoc);
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
