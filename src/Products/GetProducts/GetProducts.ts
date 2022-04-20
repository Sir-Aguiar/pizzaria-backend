import { doc, getDoc } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";

const getProducts = async (org: string) => {
  const docRef = doc(OrdersDB, "Menus", org);
  const products = await getDoc(docRef);
  return products.data();
};
export { getProducts };
