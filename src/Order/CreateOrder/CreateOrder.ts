import { doc, setDoc } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";

export class CreateOrder {
  public readonly order_id: string;
  public readonly client: string;
  public readonly description: string;
  public readonly produtos: Item[];
  public readonly price: number;
  public readonly endereco: Locale;
  public readonly data: Date;
  public status: string;
  constructor(public readonly props: ICreateOrder, status = "Pendente") {
    this.order_id = props.order_id;
    this.client = props.client;
    this.description = props.description;
    this.produtos = props.items;
    this.price = props.price;
    this.endereco = props.location;
    this.data = props.created_at;
    this.status = status;
  }
  private generateCredential() {
    let preCredential = "";
    for (let index = 0; index < 7; index++) {
      const randomNumber = `${Math.abs(Math.round(Math.random() * 9999999))}`;
      preCredential += `${randomNumber[Math.abs(Math.round(Math.random() * randomNumber.length - 1))]}`;
    }
    const orderCode = Number(preCredential);
    return orderCode;
  }
  async execute(test = false) {
    const collectionString = `${test ? "Pedidos_Teste" : "Pedidos"}`;
    const credentialCode = this.generateCredential();
    const orderDocLocale = doc(OrdersDB, collectionString, this.order_id);
    const credentialDocLocale = doc(OrdersDB, "Credenciais", credentialCode.toString());
    try {
      await setDoc(orderDocLocale, {
        id: this.order_id,
        cliente: this.client,
        description: this.description,
        produtos: this.produtos,
        data: this.data,
        preco: this.price,
        endereco: this.endereco,
        status: this.status,
      });
      await setDoc(credentialDocLocale, {
        client: this.client,
        order: this.order_id,
      });
      return {
        status: true,
        credentials: {
          passCode: credentialCode,
          client: this.client,
        },
      };
    } catch (error) {
      return {
        status: false,
        error: error,
      };
    }
  }
}
