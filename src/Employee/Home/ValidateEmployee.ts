import { collection, getDocs, query, where } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";

export const ValidateEmployee = async (id: number) => {
  try {
    const docRef = collection(OrdersDB, "Users");
    const docFilter = where("_id", "==", id);
    const foundDocs = await getDocs(query(docRef, docFilter));
    const docs = foundDocs.docs;
    if (docs.length != 1) return { status: false };
    return {
      status: true,
      employee: docs[0].data(),
    };
  } catch (e) {
    return { status: false };
  }
};
