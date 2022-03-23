import { doc, setDoc } from "firebase/firestore";
import { OrdersDB } from "../@firebase/FirebaseInitialize";

export class CreateOrder {
  async execute({ client, created_at, description, items, location, order_id, price }: ICreateOrder) {
    try {
      const documentRef = doc(OrdersDB, "Pedidos", order_id);
      const order = await setDoc(documentRef, {
        id: order_id,
        cliente: client,
        description: description,
        produtos: items,
        data: created_at,
        preco: price,
        endereco: location,
      });
      return true;
    } catch (e) {
      return e
    }
  }
}
