import "dotenv/config";
import express from "express";
import { CreateOrderController } from "./Order/CreateOrder/Controllers/CreateOrderController";
import { RemoveOrderController } from "./Order/RemoveOrder/Controllers/RemoveOrderController";
import { GetProductsController } from "./Products/GetProducts/Controllers/GetProductsController";
import cors from "cors";
import { InsertProductController } from "./Products/InsertProduct/Controllers/InsertProductController";
import { RemoveProductController } from "./Products/RemoveProduct/Controllers/RemoveProductController";
import { EmployeeController } from "./Employee/Home/Controllers/ValidateEmployeeController";
import { GetOrdersController } from "./Order/GetOrders/Controllers/GetOrdersController";
import { ValidateOrderController } from "./Order/ValidateOrder/Controllers/ValidateOrderController";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/get-products/:org", GetProductsController);
app.get("/funcionario/:id/:name", EmployeeController);
app.get("/get-orders", GetOrdersController);
app.post("/new-order", CreateOrderController);
app.post("/new-product/:store/:food_type", InsertProductController);
app.put("/validate-order", ValidateOrderController);
app.delete("/remove-order/:orderId", RemoveOrderController);
app.delete("/remove-product/:store/:food_type/:food_id", RemoveProductController);
export { app };
