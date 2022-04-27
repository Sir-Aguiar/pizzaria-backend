"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersDB = exports.app = void 0;
const firestore_1 = require("firebase/firestore");
const app_1 = require("firebase/app");
require("dotenv/config");
const FirebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
};
const app = (0, app_1.initializeApp)(FirebaseConfig);
exports.app = app;
const OrdersDB = (0, firestore_1.getFirestore)(app);
exports.OrdersDB = OrdersDB;
