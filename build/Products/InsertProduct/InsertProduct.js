"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertNewProduct = void 0;
const firestore_1 = require("firebase/firestore");
const CheckEmployeeCredenttials_1 = require("../../CheckEmployeeCredenttials");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
const generateUniqCodeScript_1 = require("../../generateUniqCodeScript");
class InsertNewProduct {
    constructor(credentials, newProduct, foodType, store) {
        this.credentials = credentials;
        this.newProduct = newProduct;
        this.foodType = foodType;
        this.store = store;
    }
    async insertProduct() {
        if (await (0, CheckEmployeeCredenttials_1.AreEmployeeCredentialsValid)(this.credentials, this.store)) {
            const myCode = new generateUniqCodeScript_1.UniqScript().uniqCode;
            const docReference = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Menus", this.store);
            const InsertingObject = {};
            InsertingObject[this.foodType] = (0, firestore_1.arrayUnion)({
                _id: myCode,
                description: this.newProduct.description,
                images: {
                    medium: this.newProduct.images.medium,
                    small: this.newProduct.images.small,
                },
                name: this.newProduct.name,
                price: this.newProduct.price,
            });
            await (0, firestore_1.updateDoc)(docReference, InsertingObject);
            return myCode;
        }
        throw new Error("Credenciais de acesso inválidas");
    }
}
exports.InsertNewProduct = InsertNewProduct;
