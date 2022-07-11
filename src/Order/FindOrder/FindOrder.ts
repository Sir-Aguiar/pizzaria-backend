import { doc, DocumentSnapshot, getDoc } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";
export const FindOrder = async (orderCode: string) => {
  const docLocal = doc(OrdersDB, "Pedidos", orderCode);
  const order = (await getDoc(docLocal)) as DocumentSnapshot<Order>;
  if (order.exists()) return order.data();
  throw new Error("Pedido não pode ser encontrado");
};
