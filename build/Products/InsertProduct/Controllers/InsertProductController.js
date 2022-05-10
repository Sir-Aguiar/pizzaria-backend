"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertProductController = void 0;
const InsertProduct_1 = require("../InsertProduct");
const InsertProductController = async (req, res) => {
    const body = req.body;
    const { store, food_type } = req.params;
    const employee = req.header("employee") || "";
    const _id = req.header("_id") || "";
    const newProduct = {
        description: body.description,
        name: body.name,
        images: {
            small: body.images.small,
            medium: body.images.medium,
        },
        price: body.price,
    };
    const acessCredentials = {
        _id: _id,
        employee: employee,
    };
    try {
        const myProduct = new InsertProduct_1.InsertNewProduct(acessCredentials, newProduct, food_type, store);
        const orderId = await myProduct.insertProduct();
        res.status(201).json({
            code: orderId,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};
exports.InsertProductController = InsertProductController;
