"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const CreateOrderController_1 = require("./Order/CreateOrder/Controllers/CreateOrderController");
const RemoveOrderController_1 = require("./Order/RemoveOrder/Controllers/RemoveOrderController");
const GetProductsController_1 = require("./Products/GetProducts/Controllers/GetProductsController");
const cors_1 = __importDefault(require("cors"));
const InsertProductController_1 = require("./Products/InsertProduct/Controllers/InsertProductController");
const RemoveProductController_1 = require("./Products/RemoveProduct/Controllers/RemoveProductController");
const ValidateEmployeeController_1 = require("./Employee/Home/Controllers/ValidateEmployeeController");
const GetOrdersController_1 = require("./Order/GetOrders/Controllers/GetOrdersController");
const ValidateOrderController_1 = require("./Order/ValidateOrder/Controllers/ValidateOrderController");
const FindOrderController_1 = require("./Order/FindOrder/Controller/FindOrderController");
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
app.get("/get-products/:org", GetProductsController_1.GetProductsController);
app.get("/funcionario/:id/:name", ValidateEmployeeController_1.EmployeeController);
app.get("/get-orders", GetOrdersController_1.GetOrdersController);
app.get("/find-order/:order_code", FindOrderController_1.FindOrderController);
app.post("/new-order", CreateOrderController_1.CreateOrderController);
app.post("/new-product/:store/:food_type", InsertProductController_1.InsertProductController);
app.put("/validate-order", ValidateOrderController_1.ValidateOrderController);
app.delete("/remove-order/:orderId", RemoveOrderController_1.RemoveOrderController);
app.delete("/remove-product/:store/:food_type/:food_id", RemoveProductController_1.RemoveProductController);
