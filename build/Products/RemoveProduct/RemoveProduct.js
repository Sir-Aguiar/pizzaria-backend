"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = require("firebase/firestore");
const Employee_1 = require("../../entities/Employee");
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
        const referedProduct = result[this.foodType].map((bebida) => {
            if (bebida._id === 3332322) {
                return bebida;
            }
        });
        if (referedProduct.length !== 0)
            return false;
        return referedProduct[0];
    }
    async RemoveProduct() {
        if (await (0, Employee_1.CheckEmployeeCredentials)(this.credentials, this.store)) {
            const productToBeRemoved = await this.GetProductObject();
            const updateDocument = {};
            updateDocument[this.foodType] = (0, firestore_1.arrayRemove)(productToBeRemoved);
            await (0, firestore_1.updateDoc)((0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Menus", this.store), { updateDocument });
            return true;
        }
        return false;
    }
}
