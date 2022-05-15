"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveProductController = void 0;
const RemoveProduct_1 = require("../RemoveProduct");
const RemoveProductController = async (req, res) => {
    const { store, food_type, food_id } = req.params;
    const credentials = {
        _id: req.header("_id") || "",
        employee: req.header("employee") || "",
    };
    const rmvProduct = new RemoveProduct_1.RemoveProduct(store, Number(food_id), food_type, credentials);
    rmvProduct
        .execute()
        .then((response) => {
        res.status(200).send();
    })
        .catch((e) => {
        res.status(400).json({
            error: e.message,
        });
    });
};
exports.RemoveProductController = RemoveProductController;
