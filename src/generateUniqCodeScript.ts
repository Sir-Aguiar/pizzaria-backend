import { arrayUnion, doc, DocumentSnapshot, getDoc, updateDoc } from "firebase/firestore";
import { OrdersDB } from "./Firebase/FirebaseInitialize";

class UniqScript {
  public randomCode: number;
  constructor() {
    this.randomCode = this.createSolidCode();
  }
  private generateCode(): number {
    let randomNumber = Math.trunc(Math.abs(Math.random() * 9999999999));
    const numberCon = Array.from(String(randomNumber), (num) => Number(num));
    if (numberCon.length > 7) {
      randomNumber = Number(numberCon.slice(0, 7).join(""));
    }
    return randomNumber;
  }
  private async compareCode(code: number): Promise<boolean> {
    type codesType = {
      existentes: number[];
    };
    const docRef = (await getDoc(doc(OrdersDB, "Codes", "codes"))) as DocumentSnapshot<codesType>;
    if (docRef.data()?.existentes.includes(code)) return false;
    return true;
  }
  private createSolidCode(): number {
    let code = this.generateCode();
    while (!this.compareCode(code)) {
      code = this.generateCode();
    }
    updateDoc(doc(OrdersDB, "Codes", "codes"), {
      existentes: arrayUnion(code),
    }).then((res) => res);
    return code;
  }
}
export { UniqScript };
