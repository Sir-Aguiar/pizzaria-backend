import { Request, Response } from "express";
import { AreEmployeeCredentialsValid } from "../../../CheckEmployeeCredentials";
import { GetOrders } from "../GetOrders";

const GetOrdersController = async (req: Request, res: Response) => {
  const name = req.header("name")!;
  const _id = req.header("id")!;
  const store = req.header("store")!;
  AreEmployeeCredentialsValid({ _id, name }, store).then(
    // Employee valid
    () => {
      GetOrders().then(
        (response) => {
          res.status(200).json({ orders: response });
        },
        (error) => {
          res.status(404).json({ error: error.message });
        }
      );
    },
    // Employee not valid
    (error) => {
      res.status(401).json({ error: error.message });
    }
  );
};
export { GetOrdersController };
