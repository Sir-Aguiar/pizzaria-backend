"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderController = void 0;
const uniqid_1 = __importDefault(require("uniqid"));
const CreateOrder_1 = require("../CreateOrder");
const CreateOrderController = async (req, res) => {
    const { client, description, items, location, price, phone } = req.body;
    const createOrder = new CreateOrder_1.CreateOrder({
        client: client,
        created_at: new Date(),
        description: description,
        items: items,
        location: location,
        order_id: (0, uniqid_1.default)(),
        price: price,
        phone: phone,
    });
    const { error, credentials } = await createOrder.execute();
    if (error) {
        res.status(400);
        return res.json({
            error: error,
        });
    }
    res.status(200);
    return res.json({
        message: "Pedido realizado com sucesso",
        credentials: credentials,
    });
};
exports.CreateOrderController = CreateOrderController;
