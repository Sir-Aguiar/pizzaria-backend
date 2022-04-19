"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOrderController = void 0;
const RemoveOrder_1 = require("../RemoveOrder");
const RemoveOrderController = async (req, res) => {
    const { orderId, passCode } = req.params;
    const { status, error } = await new RemoveOrder_1.RemoveOrder(orderId, passCode).execute();
    if (error) {
        res.status(400);
        return res.json({
            error: error,
        });
    }
    res.status(200);
    res.json({
        status: status,
    });
};
exports.RemoveOrderController = RemoveOrderController;
