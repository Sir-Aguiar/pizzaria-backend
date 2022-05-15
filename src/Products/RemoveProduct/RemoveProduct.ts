import { arrayRemove, doc, updateDoc, getDoc } from "firebase/firestore";
import { AreEmployeeCredentialsValid } from "../../CheckEmployeeCredentials";
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
    const referedProduct = result[this.foodType].map((product: { _id: number }) => {
      if (product._id === this._id) {
        return product;
      }
    });
    if (referedProduct.length !== 1) {
      throw new Error("Produto não pôde ser encontrado");
    }
    return referedProduct[0];
  }

  public async execute() {
    if (await AreEmployeeCredentialsValid(this.credentials, this.store)) {
      const productToBeRemoved = await this.GetProductObject();
      const updateDocument: any = {};
      updateDocument[this.foodType] = arrayRemove(productToBeRemoved);
      await updateDoc(doc(OrdersDB, "Menus", this.store), updateDocument);
    }
  }
}
export { RemoveProduct };
