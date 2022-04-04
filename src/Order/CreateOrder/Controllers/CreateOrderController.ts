import uniqid from "uniqid";
import { Request, Response } from "express";
import { CreateOrder } from "../CreateOrder";

const CreateOrderController = async (req: Request, res: Response) => {
  const { client, description, items, location, price, phone } = req.body;
  const createOrder = new CreateOrder({
    client: client,
    created_at: new Date(),
    description: description,
    items: items,
    location: location,
    order_id: uniqid(),
    price: price,
    phone: phone,
  });
  const { error, credentials } = await createOrder.execute();
  if (error) {
    res.status(400);
    return res.json({
      error: error,
    });
  }
  res.status(200);
  return res.json({
    message: "Pedido realizado com sucesso",
    credentials: credentials,
  });
};
export { CreateOrderController };
