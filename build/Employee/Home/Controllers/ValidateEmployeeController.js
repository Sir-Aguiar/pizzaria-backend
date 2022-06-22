"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const ValidateEmployee_1 = require("../ValidateEmployee");
const EmployeeController = async (req, res) => {
    const { id } = req.params;
    const EmployeeState = await (0, ValidateEmployee_1.ValidateEmployee)(Number(id));
    if (EmployeeState.status) {
        return res.status(200).json({
            employee: EmployeeState.employee,
        });
    }
    return res.status(400);
};
exports.EmployeeController = EmployeeController;
