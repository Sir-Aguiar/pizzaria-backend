import { Request, Response } from "express";
import { RemoveOrder } from "../RemoveOrder";

const RemoveOrderController = async (req: Request, res: Response) => {
  const { orderId, passCode } = req.params;
  const { status, error } = await new RemoveOrder(orderId, passCode).execute();
  if (error) {
    res.status(400);
    return res.json({
      error: error,
    });
  }
  res.status(200);
  res.json({
    status: status,
  });
};
export { RemoveOrderController };
