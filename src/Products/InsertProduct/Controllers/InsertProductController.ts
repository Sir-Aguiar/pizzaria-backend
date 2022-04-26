import { Request, Response } from "express";
import { InsertNewProduct } from "../InsertProduct";

const InsertProductController = async (req: Request, res: Response) => {
  const body = req.body;
  const { store, food_type } = req.params;
  const employee = req.header("employee") || "";
  const _id = req.header("_id") || "";

  const newProduct = {
    description: body.description,
    name: body.name,
    images: {
      small: body.images.small,
      medium: body.images.medium,
    },
    price: body.price,
  };

  const acessCredentials = {
    _id: _id,
    employee: employee,
  };

  const myProduct = new InsertNewProduct(acessCredentials, newProduct, food_type, store);
  myProduct
    .insertProduct()
    .then((response) => {
      res.status(201).json({
        code: response,
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
      });
    });
};

export { InsertProductController };
