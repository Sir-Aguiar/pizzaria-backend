"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateOrder = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
const ValidateOrder = async (orderId, newStatus) => {
    const docRef = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Pedidos", String(orderId));
    await (0, firestore_1.updateDoc)(docRef, {
        status: newStatus,
    });
};
exports.ValidateOrder = ValidateOrder;
