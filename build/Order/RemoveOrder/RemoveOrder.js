"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOrder = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
class RemoveOrder {
    constructor(orderId, passCode) {
        this.orderId = orderId;
        this.passCode = passCode;
    }
    async execute(test = false) {
        try {
            await (0, firestore_1.deleteDoc)((0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, `${test ? "Pedidos_Teste" : "Pedidos"}`, this.orderId));
            await (0, firestore_1.deleteDoc)((0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Credenciais", this.passCode));
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
