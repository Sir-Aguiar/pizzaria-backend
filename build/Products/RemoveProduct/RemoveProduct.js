"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveProduct = void 0;
const firestore_1 = require("firebase/firestore");
const CheckEmployeeCredenttials_1 = require("../../CheckEmployeeCredenttials");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
class RemoveProduct {
    constructor(store, _id, foodType, credentials) {
        this.store = store;
        this._id = _id;
        this.foodType = foodType;
        this.credentials = credentials;
    }
    async GetProductObject() {
        const docRef = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Menus", this.store);
        const referedDocument = await (0, firestore_1.getDoc)(docRef);
        const result = referedDocument.data() || [];
        const referedProduct = result[this.foodType].map((product) => {
            if (product._id === this._id) {
                return product;
            }
        });
        if (referedProduct.length !== 1) {
            throw new Error("Produto não pôde ser encontrado");
        }
        return referedProduct[0];
    }
    async execute() {
        if (await (0, CheckEmployeeCredenttials_1.AreEmployeeCredentialsValid)(this.credentials, this.store)) {
            const productToBeRemoved = await this.GetProductObject();
            const updateDocument = {};
            updateDocument[this.foodType] = (0, firestore_1.arrayRemove)(productToBeRemoved);
            await (0, firestore_1.updateDoc)((0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Menus", this.store), updateDocument);
        }
    }
}
exports.RemoveProduct = RemoveProduct;
