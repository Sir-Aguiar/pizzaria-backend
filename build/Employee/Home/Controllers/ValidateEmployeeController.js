"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const CheckEmployeeCredentials_1 = require("../../../CheckEmployeeCredentials");
const EmployeeController = async (req, res) => {
    const { id, name } = req.params;
    const store = req.header("store");
    try {
        await (0, CheckEmployeeCredentials_1.AreEmployeeCredentialsValid)({
            _id: id,
            name: name,
        }, store);
        res.status(200).json({
            message: "Validated"
        });
    }
    catch (e) {
        res.status(401).json({
            error: e.message,
        });
    }
};
exports.EmployeeController = EmployeeController;
