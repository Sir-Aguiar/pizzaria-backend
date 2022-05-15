/* eslint-disable @typescript-eslint/no-explicit-any */
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { AreEmployeeCredentialsValid } from "../../CheckEmployeeCredentials";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";
import { UniqScript } from "../../generateUniqCodeScript";

class InsertNewProduct {
  constructor(
    private credentials: EmployeeCredential,
    private newProduct: CreateProduct,
    private foodType: string,
    private store: string
  ) {}
  public async insertProduct() {
    if (await AreEmployeeCredentialsValid(this.credentials, this.store)) {
      const myCode = new UniqScript().uniqCode;
      const docReference = doc(OrdersDB, "Menus", this.store);
      const InsertingObject: any = {};
      InsertingObject[this.foodType] = arrayUnion({
        _id: myCode,
        description: this.newProduct.description,
        images: {
          medium: this.newProduct.images.medium,
          small: this.newProduct.images.small,
        },
        name: this.newProduct.name,
        price: this.newProduct.price,
      });
      await updateDoc(docReference, InsertingObject);
      return myCode;
    }
    throw new Error("Credenciais de acesso inválidas");
  }
}

export { InsertNewProduct };
