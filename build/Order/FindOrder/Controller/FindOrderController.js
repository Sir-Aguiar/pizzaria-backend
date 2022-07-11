"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderController = void 0;
const FindOrder_1 = require("../FindOrder");
const FindOrderController = async (req, res) => {
    const { order_code } = req.params;
    try {
        res.status(200).json({
            order: await (0, FindOrder_1.FindOrder)(order_code),
        });
    }
    catch (e) {
        res.status(400).json({
            error: e.message,
        });
    }
};
exports.FindOrderController = FindOrderController;
