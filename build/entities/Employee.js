"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckEmployeeCredentials = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../Firebase/FirebaseInitialize");
const CheckEmployeeCredentials = async (credentials, store) => {
    const documentRef = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Users", credentials.employee);
    const userDocument = (await (0, firestore_1.getDoc)(documentRef));
    if (Number(credentials._id) === userDocument.data()?._id &&
        credentials.employee === userDocument.id &&
        store === userDocument.data()?.store &&
        userDocument.data()?.level === 0) {
        return true;
    }
    return false;
};
exports.CheckEmployeeCredentials = CheckEmployeeCredentials;
