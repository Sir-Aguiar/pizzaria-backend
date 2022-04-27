"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
const getProducts = async (org) => {
    const docRef = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Menus", org);
    const products = await (0, firestore_1.getDoc)(docRef);
    return products.data();
};
exports.getProducts = getProducts;
