"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateEmployee = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
const ValidateEmployee = async (id) => {
    try {
        const docRef = (0, firestore_1.collection)(FirebaseInitialize_1.OrdersDB, "Users");
        const docFilter = (0, firestore_1.where)("_id", "==", id);
        const foundDocs = await (0, firestore_1.getDocs)((0, firestore_1.query)(docRef, docFilter));
        const docs = foundDocs.docs;
        if (docs.length != 1)
            return { status: false };
        return {
            status: true,
            employee: docs[0].data(),
        };
    }
    catch (e) {
        return { status: false };
    }
};
exports.ValidateEmployee = ValidateEmployee;
