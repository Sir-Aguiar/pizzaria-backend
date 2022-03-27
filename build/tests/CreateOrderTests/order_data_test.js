"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_1 = void 0;
const uniqid_1 = __importDefault(require("uniqid"));
exports.Order_1 = {
    client: "Felipe",
    created_at: new Date(),
    description: "Uma pizza de calabresa grande",
    items: [
        {
            description: "A",
            name: "a",
            price: 45.6,
            product_id: "123",
        },
    ],
    location: {
        bairro: "Carumbé",
        casa: "30",
        reference: "Portões vermelhos",
        rua: "Frei Emiliano Monteiro",
    },
    order_id: (0, uniqid_1.default)(),
    price: 50.5,
};
