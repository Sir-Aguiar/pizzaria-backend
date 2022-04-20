import { Request, Response } from "express";
import { getProducts } from "../GetProducts";

const GetProductsController = async (req: Request, res: Response) => {
  const { org } = req.params;
  const products = await getProducts(org);
  res.status(200);
  res.json(products);
};
export { GetProductsController };
