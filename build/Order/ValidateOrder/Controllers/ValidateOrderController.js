"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateOrderController = void 0;
const CheckEmployeeCredentials_1 = require("../../../CheckEmployeeCredentials");
const ValidateOrder_1 = require("../ValidateOrder");
const ValidateOrderController = async (req, res) => {
    const name = req.header("name");
    const _id = req.header("_id");
    const store = req.header("store");
    const { orderId, status } = req.body;
    (0, CheckEmployeeCredentials_1.AreEmployeeCredentialsValid)({ name, _id }, store)
        .then(() => {
        (0, ValidateOrder_1.ValidateOrder)(orderId, status)
            .then(() => {
            res.status(200).send();
        })
            .catch((e) => {
            res.status(400).json({ error: e.message });
        });
    })
        .catch((e) => {
        res.status(400).json({ error: e.message });
    });
};
exports.ValidateOrderController = ValidateOrderController;
