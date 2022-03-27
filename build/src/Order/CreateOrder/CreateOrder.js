"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrder = void 0;
const firestore_1 = require("firebase/firestore");
const FirebaseInitialize_1 = require("../../db/FirebaseInitialize");
class CreateOrder {
    constructor(props) {
        this.props = props;
        this.order_id = props.order_id;
        this.client = props.client;
        this.description = props.description;
        this.produtos = props.items;
        this.price = props.price;
        this.endereco = props.location;
        this.data = props.created_at;
    }
    async execute(test = false) {
        try {
            const collectionString = `${test ? "Pedidos_Teste" : "Pedidos"}`;
            const documentRef = (0, firestore_1.doc)(FirebaseInitialize_1.OrdersDB, collectionString, this.order_id);
            const order = await (0, firestore_1.setDoc)(documentRef, {
                id: this.order_id,
                cliente: this.client,
                description: this.description,
                produtos: this.produtos,
                data: this.data,
                preco: this.price,
                endereco: this.endereco,
            });
            return true;
        }
        catch (e) {
            return e;
        }
    }
}
exports.CreateOrder = CreateOrder;
