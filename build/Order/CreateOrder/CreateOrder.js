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
    async checkCredentials() {
        const docRef = (0, firestore_1.collection)(FirebaseInitialize_1.OrdersDB, "Credentials");
        const docQuery = (0, firestore_1.where)("phone", "==", this.phone);
        const queryDoc = await (0, firestore_1.getDocs)((0, firestore_1.query)(docRef, docQuery));
        if (queryDoc.size > 0) {
            return false;
        }
        return true;
    }
    async setCredentials() {
        try {
            if (await this.checkCredentials()) {
                const docLocal = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Credentials", this.orderId.toString());
                const credentialDoc = {
                    client: this.client,
                    code: this.orderId,
                    phone: this.phone,
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
            return {
                status: false,
                error: "Pedido já existente neste número",
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
        const orderItems = [];
        this.items.forEach((item) => {
            orderItems.push({
                _id: item._id,
                description: item.description,
                name: item.name,
                price: item.price,
            });
        });
        const docLocal = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Pedidos", this.orderId.toString());
        const orderDoc = {
            client: this.client,
            createdAt: this.createdAt,
            items: orderItems,
            location: {
                bairro: this.location.bairro,
                casa: this.location.casa,
                reference: this.location.reference,
                rua: this.location.rua,
            },
            phone: this.phone,
            price: this.price,
        };
        try {
            await (0, firestore_1.setDoc)(docLocal, orderDoc);
            const credentials = await this.setCredentials();
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
