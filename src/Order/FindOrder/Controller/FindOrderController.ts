import { Request, Response } from "express";
import { FindOrder } from "../FindOrder";

export const FindOrderController = async (req: Request, res: Response) => {
  const { order_code } = req.params;
  try {
    res.status(200).json({
      order: await FindOrder(order_code),
    });
  } catch (e: any) {
    res.status(400).json({
      error: e.message,
    });
  }
};
