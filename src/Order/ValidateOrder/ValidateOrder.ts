import { doc, updateDoc } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";

const ValidateOrder = async (orderId: number, newStatus: number) => {
  const docRef = doc(OrdersDB, "Pedidos", String(orderId));
  await updateDoc(docRef, {
    status: newStatus,
  });
};
export { ValidateOrder };
