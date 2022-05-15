"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreEmployeeCredentialsValid = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("./Firebase/FirebaseInitialize");
const AreEmployeeCredentialsValid = async (credentials, store) => {
    const documentRef = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Users", credentials.employee);
    const userDocument = (await (0, firestore_1.getDoc)(documentRef));
    if (Number(credentials._id) === userDocument.data()?._id &&
        credentials.employee === userDocument.id &&
        store === userDocument.data()?.store &&
        userDocument.data()?.level === 0) {
        return true;
    }
    if (!userDocument.exists())
        throw new Error("Funcionário não econtrado");
    if (userDocument.data()?.level !== 0)
        throw new Error("Você não tem permissão para fazer isso");
    throw new Error("Credenciais inválidas");
};
exports.AreEmployeeCredentialsValid = AreEmployeeCredentialsValid;
