import { deleteDoc, doc } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";

export class RemoveOrder {
  constructor(readonly orderId: string, readonly passCode: string) {}

  public async execute(test = false) {
    try {
      await deleteDoc(doc(OrdersDB, `${test ? "Pedidos_Teste" : "Pedidos"}`, this.orderId));
      await deleteDoc(doc(OrdersDB, "Credenciais", this.passCode));
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
