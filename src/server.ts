import "dotenv/config";
import express from "express";
import { CreateOrderController } from "./Order/CreateOrder/Controllers/CreateOrderController";
import { RemoveOrderController } from "./Order/RemoveOrder/Controllers/RemoveOrderController";
import { GetProductsController } from "./Products/GetProducts/Controllers/GetProductsController";
import cors from "cors";
import { InsertProductController } from "./Products/InsertProduct/Controllers/InsertProductController";
import { RemoveProductController } from "./Products/RemoveProduct/Controllers/RemoveProductController";
import { HomeController } from "./Employee/Home/Controllers/HomeControllers";
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
const pathing = `${__dirname}/public`;

app.post("/new-order", CreateOrderController);
app.delete("/remove-order/:orderId", RemoveOrderController);
app.get("/get-products/:org", GetProductsController);
app.post("/new-product/:store/:food_type", InsertProductController);
app.delete("/remove-product/:store/:food_type/:food_id", RemoveProductController);
app.use(express.static(pathing));
app.get("/funcionario/:id", HomeController);
export { app, pathing };
