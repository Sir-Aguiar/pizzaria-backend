import { Request, Response } from "express";
import { AreEmployeeCredentialsValid } from "../../../CheckEmployeeCredentials";
import { GetOrders } from "../GetOrders";

const GetOrdersController = async (req: Request, res: Response) => {
  const name = req.header("name")!;
  const _id = req.header("id")!;
  const store = req.header("store")!;
  if (await AreEmployeeCredentialsValid({ _id, name }, store)) {
    return res.status(200).json({
      orders: await GetOrders(),
    });
  }
  return res.status(400).send();
};
export { GetOrdersController };
