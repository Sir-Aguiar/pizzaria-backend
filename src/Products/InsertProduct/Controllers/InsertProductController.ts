import { Request, Response } from "express";
import { InsertNewProduct } from "../InsertProduct";

const InsertProductController = async (req: Request, res: Response) => {
  const { description, name, images, price } = req.body;
  const { store, food_type } = req.params;
  InsertNewProduct(store, food_type, {
    description: description,
    name: name,
    images: {
      small: images.small,
      medium: images.medium,
    },
    price: price,
  }).then((code) => {
    res.status(201);
    res.json({
      message: `Seu produto foi inserido com sucesso, código do produto: ${code}`,
    });
  });
};

export { InsertProductController };
