"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrder = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
const FindOrder = async (orderCode) => {
    const docLocal = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Pedidos", orderCode);
    const order = (await (0, firestore_1.getDoc)(docLocal));
    if (order.exists())
        return order.data();
    throw new Error("Pedido não pode ser encontrado");
};
exports.FindOrder = FindOrder;
