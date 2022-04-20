"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductsController = void 0;
const GetProducts_1 = require("../GetProducts");
const GetProductsController = async (req, res) => {
    const { org } = req.params;
    const products = await (0, GetProducts_1.getProducts)(org);
    res.status(200);
    res.json(products);
};
exports.GetProductsController = GetProductsController;
