/* eslint-disable @typescript-eslint/no-explicit-any */
import { arrayUnion, doc, DocumentSnapshot, getDoc, updateDoc } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";
import { UniqScript } from "../../generateUniqCodeScript";

class InsertNewProduct {
  constructor(
    private credentials: EmployeeCredential,
    private newProduct: CreateProduct,
    private foodType: string,
    private store: string
  ) {}

  private async IsCredentialsValid(): Promise<boolean> {
    const documentRef = doc(OrdersDB, "Users", this.credentials.employee);
    const userDocument = (await getDoc(documentRef)) as DocumentSnapshot<EmployeeOnDataBase>;
    if (
      Number(this.credentials._id) === userDocument.data()?._id &&
      this.credentials.employee === userDocument.id &&
      this.store === userDocument.data()?.store &&
      userDocument.data()?.level === 0
    ) {
      this.store = userDocument.data()?.store || "#";
      return true;
    }
    return false;
  }

  public async insertProduct() {
    if (await this.IsCredentialsValid()) {
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
