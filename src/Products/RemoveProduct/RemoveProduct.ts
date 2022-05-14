import { arrayRemove, doc, updateDoc, getDoc, DocumentData, DocumentSnapshot } from "firebase/firestore";
import { CheckEmployeeCredentials } from "../../entities/Employee";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";

class RemoveProduct {
  constructor(
    private store: string,
    private _id: number,
    private foodType: string,
    private credentials: EmployeeCredential
  ) {}

  private async GetProductObject() {
    const docRef = doc(OrdersDB, "Menus", this.store);
    const referedDocument = await getDoc(docRef);
    const result = referedDocument.data() || [];
    const referedProduct = result[this.foodType].map((bebida: { _id: number }) => {
      if (bebida._id === 3332322) {
        return bebida;
      }
    });
    if (referedProduct.length !== 0) return false;
    return referedProduct[0];
  }
  public async RemoveProduct() {
    if (await CheckEmployeeCredentials(this.credentials, this.store)) {
      const productToBeRemoved = await this.GetProductObject();
      const updateDocument: any = {};
      updateDocument[this.foodType] = arrayRemove(productToBeRemoved);
      await updateDoc(doc(OrdersDB, "Menus", this.store), { updateDocument });
      return true;
    }
    return false;
  }
}
