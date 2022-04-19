"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqScript = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("./Firebase/FirebaseInitialize");
class UniqScript {
    constructor() {
        this.uniqCode = this.createSolidCode();
    }
    generateCode() {
        let randomNumber = Math.trunc(Math.abs(Math.random() * 9999999999));
        const numberCon = Array.from(String(randomNumber), (num) => Number(num));
        if (numberCon.length > 7) {
            randomNumber = Number(numberCon.slice(0, 7).join(""));
        }
        return randomNumber;
    }
    async compareCode(code) {
        const docRef = (await (0, firestore_1.getDoc)((0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Codes", "codes")));
        if (docRef.data()?.existentes.includes(code))
            return false;
        return true;
    }
    createSolidCode() {
        let code = this.generateCode();
        while (!this.compareCode(code)) {
            code = this.generateCode();
        }
        (0, firestore_1.updateDoc)((0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Codes", "codes"), {
            existentes: (0, firestore_1.arrayUnion)(code),
        }).then((res) => res);
        return code;
    }
}
exports.UniqScript = UniqScript;
