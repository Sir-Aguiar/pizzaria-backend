"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrder = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../Firebase/FirebaseInitialize");
class CreateOrder {
    constructor(props, status = "Pendente") {
        this.props = props;
        this.order_id = props.order_id;
        this.client = props.client;
        this.description = props.description;
        this.produtos = props.items;
        this.price = props.price;
        this.endereco = props.location;
        this.data = props.created_at;
        this.phone = props.phone;
        this.status = status;
    }
    generateCredential() {
        let preCredential = "";
        for (let index = 0; index < 7; index++) {
            const randomNumber = `${Math.abs(Math.round(Math.random() * 9999999))}`;
            preCredential += `${randomNumber[Math.abs(Math.round(Math.random() * randomNumber.length - 1))]}`;
        }
        const orderCode = Number(preCredential);
        return orderCode;
    }
    async execute(test = false) {
        const collectionString = `${test ? "Pedidos_Teste" : "Pedidos"}`;
        const credentialCode = this.generateCredential();
        const orderDocLocale = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, collectionString, this.order_id);
        const credentialDocLocale = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, "Credenciais", credentialCode.toString());
        try {
            await (0, firestore_1.setDoc)(orderDocLocale, {
                id: this.order_id,
                cliente: this.client,
                description: this.description,
                produtos: this.produtos,
                data: this.data,
                preco: this.price,
                endereco: this.endereco,
                status: this.status,
                code: credentialCode,
                tel: this.phone
            });
            await (0, firestore_1.setDoc)(credentialDocLocale, {
                client: this.client,
                order: this.order_id,
            });
            return {
                status: true,
                credentials: {
                    passCode: credentialCode,
                    client: this.client,
                },
            };
        }
        catch (error) {
            return {
                status: false,
                error: error,
            };
        }
    }
}
exports.CreateOrder = CreateOrder;
