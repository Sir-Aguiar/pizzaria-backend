"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderController = void 0;
const CreateOrder_1 = require("../CreateOrder");
const CreateOrderController = async (req, res) => {
    const { location, client, items, price, phone } = req.body;
    const Order = new CreateOrder_1.CreateOrder(client, location, items, price, phone);
    const { error, credentials } = await Order.execute();
    if (error) {
        res.status(400);
        return res.json({
            error: error,
        });
    }
    res.status(201);
    return res.json({
        message: "Pedido realizado com sucesso",
        credentials: credentials,
    });
};
exports.CreateOrderController = CreateOrderController;
