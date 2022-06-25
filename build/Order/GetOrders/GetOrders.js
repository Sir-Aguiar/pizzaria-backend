"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrders = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
const GetOrders = async () => {
    try {
        const colReference = (0, firestore_1.collection)(FirebaseInitialize_1.OrdersDB, "Pedidos");
        const Orders = (await (0, firestore_1.getDocs)(colReference));
        console.log(Orders.docChanges());
        return Orders.docs.map((doc) => doc.data());
    }
    catch (e) {
        throw new Error("Houve um erro em nossa busca!");
    }
};
exports.GetOrders = GetOrders;
