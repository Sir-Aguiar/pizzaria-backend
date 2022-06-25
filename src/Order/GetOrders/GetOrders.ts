import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";

const GetOrders = async () => {
  const colReference = collection(OrdersDB, "Pedidos");
  const Orders = (await getDocs(colReference)) as QuerySnapshot<Order>;
  return Orders.docs.map((doc) => doc.data());
};
export { GetOrders };
