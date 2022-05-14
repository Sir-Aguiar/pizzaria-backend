import { doc, DocumentSnapshot, getDoc } from "firebase/firestore";
import { OrdersDB } from "../Firebase/FirebaseInitialize";
export const CheckEmployeeCredentials = async (credentials: EmployeeCredential, store: string) => {
  const documentRef = doc(OrdersDB, "Users", credentials.employee);
  const userDocument = (await getDoc(documentRef)) as DocumentSnapshot<EmployeeOnDataBase>;
  if (
    Number(credentials._id) === userDocument.data()?._id &&
    credentials.employee === userDocument.id &&
    store === userDocument.data()?.store &&
    userDocument.data()?.level === 0
  ) {
    return true;
  }
  return false;
};