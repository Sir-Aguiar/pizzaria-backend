/* eslint-disable @typescript-eslint/no-explicit-any */
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { OrdersDB } from "../../Firebase/FirebaseInitialize";
import { UniqScript } from "../../generateUniqCodeScript";

const InsertNewProduct = async (store: string, foodType: string, newProduct: CreateProduct) => {
  const myCode = new UniqScript();
  const docReference = doc(OrdersDB, "Menus", store);
  const InsertingObject: any = {};
  InsertingObject[foodType] = arrayUnion({
    _id: myCode.uniqCode,
    description: newProduct.description,
    images: {
      medium: newProduct.images.medium,
      small: newProduct.images.small,
    },
    name: newProduct.name,
    price: newProduct.price,
  });
  await updateDoc(docReference, InsertingObject);
  return myCode.uniqCode;
};

export { InsertNewProduct };
