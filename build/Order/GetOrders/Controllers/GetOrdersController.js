"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrdersController = void 0;
const CheckEmployeeCredentials_1 = require("../../../CheckEmployeeCredentials");
const GetOrders_1 = require("../GetOrders");
const GetOrdersController = async (req, res) => {
    const name = req.header("name");
    const _id = req.header("id");
    const store = req.header("store");
    (0, CheckEmployeeCredentials_1.AreEmployeeCredentialsValid)({ _id, name }, store).then(() => {
        (0, GetOrders_1.GetOrders)().then((response) => {
            res.status(200).json({ orders: response });
        }, (error) => {
            res.status(404).json({ error: error.message });
        });
    }, (error) => {
        res.status(401).json({ error: error.message });
    });
};
exports.GetOrdersController = GetOrdersController;
