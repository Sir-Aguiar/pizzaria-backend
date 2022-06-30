import { Request, Response } from "express";
import { AreEmployeeCredentialsValid } from "../../../CheckEmployeeCredentials";
import { ValidateOrder } from "../ValidateOrder";

const ValidateOrderController = async (req: Request, res: Response) => {
  const name = req.header("name")!;
  const _id = req.header("_id")!;
  const store = req.header("store")!;
  const { orderId, status } = req.body;
  AreEmployeeCredentialsValid({ name, _id }, store)
    .then(() => {
      ValidateOrder(orderId, status)
        .then(() => {
          res.status(200).send();
        })
        .catch((e) => {
          res.status(400).json({ error: e.message });
        });
    })
    .catch((e) => {
      res.status(400).json({ error: e.message });
    });
};
export { ValidateOrderController };
