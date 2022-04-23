import * as menu from "../menu.json";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { OrdersDB } from "./Firebase/FirebaseInitialize";
import { UniqScript } from "./generateUniqCodeScript";

const insertToData = async () => {
  menu.Lanches.forEach((lanche) => {
    updateDoc(doc(OrdersDB, "Menus", "TestePizzariaMenu"), {
      Lanches: arrayUnion({
        name: lanche.name,
        description: lanche.description,
        price: lanche.price,
        images: lanche.images,
        _id: new UniqScript().uniqCode,
      }),
    });
  });
};

insertToData().then((res) => {
  console.log("Jóia");
});
