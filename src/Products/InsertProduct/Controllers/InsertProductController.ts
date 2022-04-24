import { Request, response, Response } from "express";
import { InsertNewProduct } from "../InsertProduct";

const InsertProductController = async (req: Request, res: Response) => {
  const { description, name, images, price } = req.body;
  const { store, food_type } = req.params;
  const employee = req.header("employee") || "";
  const _id = req.header("_id") || "";
  const myProduct = new InsertNewProduct(
    { _id: _id, employee: employee },
    {
      description: description,
      name: name,
      images: {
        small: images.small,
        medium: images.medium,
      },
      price: price,
    },
    food_type,
    store
  );
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
