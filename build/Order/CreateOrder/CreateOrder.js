"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrder = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
const generateUniqCodeScript_1 = require("../../generateUniqCodeScript");
class CreateOrder {
    constructor(client, location, items, phone, payment) {
        this.client = client;
        this.location = location;
        this.items = items;
        this.phone = phone;
        this.payment = payment;
        this.price = 0;
        this.createdAt = new Date();
        this.orderId = new generateUniqCodeScript_1.UniqScript().uniqCode;
        this.items.forEach((item) => {
            this.price += Number(item.price.replace(",", "."));
        });
        this.OrderDoc = {
            client: this.client,
            createdAt: this.createdAt,
            items: Array.from(items, (item) => {
                return {
                    _id: item._id,
                    description: item.description,
                    name: item.name,
                    price: item.price,
                };
            }),
            location: {
                bairro: this.location.bairro,
                casa: this.location.casa,
                reference: this.location.reference,
                rua: this.location.rua,
            },
            phone: this.phone,
            price: this.price,
            payment: this.payment,
            status: 1
        };
    }
    async checkCredentials() {
        const docRef = (0, firestore_1.collection)(FirebaseInitialize_1.OrdersDB, "Credentials");
        const docQuery = (0, firestore_1.where)("phone", "==", this.phone);
        const queryDoc = await (0, firestore_1.getDocs)((0, firestore_1.query)(docRef, docQuery));
        if (queryDoc.size > 0)
            return false;
        return true;
    }
    async setCredentials() {
        try {
            const docLocal = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Credentials", this.orderId.toString());
            await (0, firestore_1.setDoc)(docLocal, {
                client: this.client,
                code: this.orderId,
                phone: this.phone,
            });
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
        if (await this.checkCredentials()) {
            try {
                await (0, firestore_1.setDoc)(docLocal, this.OrderDoc);
                return await this.setCredentials();
            }
            catch (e) {
                return {
                    status: false,
                    error: e,
                };
            }
        }
        return {
            status: false,
            error: "Pedido já existente neste número",
        };
    }
}
exports.CreateOrder = CreateOrder;
