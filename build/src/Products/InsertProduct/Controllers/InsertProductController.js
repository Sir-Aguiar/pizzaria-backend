"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertProductController = void 0;
const InsertProduct_1 = require("../InsertProduct");
const InsertProductController = async (req, res) => {
    const { description, name, images, price } = req.body;
    const { store, food_type } = req.params;
    (0, InsertProduct_1.InsertNewProduct)(store, food_type, {
        description: description,
        name: name,
        images: {
            small: images.small,
            medium: images.medium,
        },
        price: price,
    }).then((code) => {
        res.status(201);
        res.json({
            message: `Seu produto foi inserido com sucesso, código do produto: ${code}`,
        });
    });
};
exports.InsertProductController = InsertProductController;
