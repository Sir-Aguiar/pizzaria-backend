import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";

const GetOrders = async () => {
  try {
    const colReference = collection(OrdersDB, "Pedidos");
    const Orders = (await getDocs(colReference)) as QuerySnapshot<Order>;
    return Orders.docs.map((doc) => doc.data());
  } catch (e: any) {
    throw new Error("Houve um erro em nossa busca!");
  }
};
export { GetOrders };
