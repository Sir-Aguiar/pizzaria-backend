import { Request, Response } from "express";
import { CreateOrder } from "../CreateOrder";

const CreateOrderController = async (req: Request, res: Response) => {
  const { location, client, items, phone, payment } = req.body;
  const Order = new CreateOrder(client, location, items, phone, payment);
  const { error, credentials } = await Order.execute();

  if (error) {
    res.status(400);
    return res.json({
      error: error,
    });
  }
  res.status(201);
  return res.json({
    message: "Pedido realizado com sucesso",
    credentials: credentials,
  });
};
export { CreateOrderController };
