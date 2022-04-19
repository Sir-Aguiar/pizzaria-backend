"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const menu = __importStar(require("../menu.json"));
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("./Firebase/FirebaseInitialize");
const generateUniqCodeScript_1 = require("./generateUniqCodeScript");
const insertToData = async () => {
    menu.Lanches.forEach((lanche) => {
        (0, firestore_1.updateDoc)((0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Menus", "TestePizzariaMenu"), {
            Produtos: (0, firestore_1.arrayUnion)({
                name: lanche.name,
                description: lanche.description,
                price: lanche.price,
                images: lanche.images,
                _id: new generateUniqCodeScript_1.UniqScript().uniqCode,
            }),
        });
    });
};
insertToData().then((res) => {
    console.log("Jóia");
});
