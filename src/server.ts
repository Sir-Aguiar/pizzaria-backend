import "dotenv/config";
import express from "express";
import { CreateOrderController } from "./Order/CreateOrder/Controllers/CreateOrderController";
import { RemoveOrderController } from "./Order/RemoveOrder/Controllers/RemoveOrderController";
const app = express();
/* app.use(cors({
  origin: ['']
})); */
app.use(express.json());

app.post("/new-order", CreateOrderController);
app.delete("/remove-order/:orderId/:passCode", RemoveOrderController);
export { app };
