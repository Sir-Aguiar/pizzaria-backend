import { doc, setDoc } from "firebase/firestore";
import { OrdersDB } from "../../db/FirebaseInitialize";

export class CreateOrder {
  public readonly order_id: string;
  public readonly client: string;
  public readonly description: string;
  public readonly produtos: Item[];
  public readonly price: number;
  public readonly endereco: Locale;
  public readonly data: Date;

  constructor(public readonly props: ICreateOrder) {
    this.order_id = props.order_id;
    this.client = props.client;
    this.description = props.description;
    this.produtos = props.items;
    this.price = props.price;
    this.endereco = props.location;
    this.data = props.created_at;
  }

  async execute(test = false) {
    try {
      const collectionString = `${test ? "Pedidos_Teste" : "Pedidos"}`;
      const documentRef = doc(OrdersDB, collectionString, this.order_id);
      const order = await setDoc(documentRef, {
        id: this.order_id,
        cliente: this.client,
        description: this.description,
        produtos: this.produtos,
        data: this.data,
        preco: this.price,
        endereco: this.endereco,
      });
      return true;
    } catch (e) {
      return e;
    }
  }
}
