import "dotenv/config";
import express from "express";
import { CreateOrderController } from "./Order/CreateOrder/Controllers/CreateOrderController";
const app = express();
/* app.use(cors({
  origin: ['']
})); */
app.use(express.json());

app.post("/new-order", CreateOrderController);
app.delete("/remove-oder:orderId");
export { app };
