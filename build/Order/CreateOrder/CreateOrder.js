"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrder = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
const generateUniqCodeScript_1 = require("../../generateUniqCodeScript");
class CreateOrder {
    constructor(client, location, items, price, phone) {
        this.client = client;
        this.location = location;
        this.items = items;
        this.price = price;
        this.phone = phone;
        this.createdAt = new Date();
        this.orderId = new generateUniqCodeScript_1.UniqScript().uniqCode;
    }
    async setCredentials() {
        try {
            const docLocal = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Credentials", this.client);
            const credentialDoc = {
                client: this.client,
                code: this.orderId,
            };
            await (0, firestore_1.setDoc)(docLocal, credentialDoc);
            return {
                status: true,
                credentials: {
                    passCode: this.orderId,
                    client: this.client,
                },
            };
        }
        catch (e) {
            return {
                status: false,
                error: e,
            };
        }
    }
    async execute() {
        const docLocal = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Pedidos", this.orderId.toString());
        const orderDoc = {
            client: this.client,
            createdAt: this.createdAt,
            items: this.items,
            location: this.location,
            phone: this.phone,
            price: this.price,
        };
        try {
            const credentials = await this.setCredentials();
            await (0, firestore_1.setDoc)(docLocal, orderDoc);
            return credentials;
        }
        catch (e) {
            return {
                status: false,
                error: e,
            };
        }
    }
}
exports.CreateOrder = CreateOrder;
