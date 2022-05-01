import { deleteDoc, doc } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";

export class RemoveOrder {
  constructor(readonly orderId: string) {}

  public async execute() {
    try {
      await deleteDoc(doc(OrdersDB, "Pedidos", this.orderId));
      await deleteDoc(doc(OrdersDB, "Credentials", this.orderId));
      return {
        status: "Pedido removido",
      };
    } catch (e) {
      return {
        error: e,
      };
    }
  }
}
