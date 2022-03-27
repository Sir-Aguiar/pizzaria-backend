"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOrder = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../db/FirebaseInitialize");
class RemoveOrder {
    constructor(orderId) {
        this.orderId = orderId;
    }
    async execute(test = false) {
        await (0, firestore_1.deleteDoc)((0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, `${test ? "Pedidos_Teste" : "Pedidos"}`, this.orderId));
    }
}
exports.RemoveOrder = RemoveOrder;
