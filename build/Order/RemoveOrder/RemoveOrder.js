"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOrder = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
class RemoveOrder {
    constructor(orderId) {
        this.orderId = orderId;
    }
    async execute() {
        try {
            await (0, firestore_1.deleteDoc)((0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Pedidos", this.orderId));
            await (0, firestore_1.deleteDoc)((0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Credentials", this.orderId));
            return {
                status: "Pedido removido",
            };
        }
        catch (e) {
            return {
                error: e,
            };
        }
    }
}
exports.RemoveOrder = RemoveOrder;
