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
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
app.post("/new-order", CreateOrderController_1.CreateOrderController);
app.delete("/remove-order/:orderId/:passCode", RemoveOrderController_1.RemoveOrderController);
app.get("/get-products/:org", GetProductsController_1.GetProductsController);
app.post("/new-product/:store/:food_type", InsertProductController_1.InsertProductController);