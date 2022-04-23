"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertNewProduct = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
const generateUniqCodeScript_1 = require("../../generateUniqCodeScript");
const InsertNewProduct = async (store, foodType, newProduct) => {
    const myCode = new generateUniqCodeScript_1.UniqScript();
    const docReference = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Menus", store);
    const InsertingObject = {};
    InsertingObject[foodType] = (0, firestore_1.arrayUnion)({
        _id: myCode.uniqCode,
        description: newProduct.description,
        images: {
            medium: newProduct.images.medium,
            small: newProduct.images.small,
        },
        name: newProduct.name,
        price: newProduct.price,
    });
    await (0, firestore_1.updateDoc)(docReference, InsertingObject);
    return myCode.uniqCode;
};
exports.InsertNewProduct = InsertNewProduct;
