import { Request, Response } from "express";
import { AreEmployeeCredentialsValid } from "../../../CheckEmployeeCredenttials";
import { RemoveProduct } from "../RemoveProduct";

const RemoveProductController = async (req: Request, res: Response) => {
  const { store, food_type, food_id } = req.params;
  const credentials = {
    _id: req.header("_id") || "",
    employee: req.header("employee") || "",
  };
  const rmvProduct = new RemoveProduct(store, Number(food_id), food_type, credentials);
  rmvProduct
    .execute()
    .then((response) => {
      res.status(200).send();
    })
    .catch((e: Error) => {
      res.status(400).json({
        error: e.message,
      });
    });
};
export { RemoveProductController };
