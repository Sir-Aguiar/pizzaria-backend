"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertProductController = void 0;
const InsertProduct_1 = require("../InsertProduct");
const InsertProductController = async (req, res) => {
    const { description, name, images, price } = req.body;
    const { store, food_type } = req.params;
    const employee = req.header("employee") || "";
    const _id = req.header("_id") || "";
    const myProduct = new InsertProduct_1.InsertNewProduct({ _id: _id, employee: employee }, {
        description: description,
        name: name,
        images: {
            small: images.small,
            medium: images.medium,
        },
        price: price,
    }, food_type, store);
    myProduct
        .insertProduct()
        .then((response) => {
        res.status(201).json({
            code: response,
        });
    })
        .catch((error) => {
        res.status(400).json({
            error: error.message,
        });
    });
};
exports.InsertProductController = InsertProductController;
