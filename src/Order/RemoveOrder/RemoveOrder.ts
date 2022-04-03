import { deleteDoc, doc } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";

export class RemoveOrder {
  constructor(readonly orderId: string) {}
  public async execute(test = false) {
    await deleteDoc(doc(OrdersDB, `${test ? "Pedidos_Teste" : "Pedidos"}`, this.orderId));
  }
}
