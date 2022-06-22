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

  const acessCredentials:EmployeeCredential = {
    _id: _id,
    name: employee,
  };
  try {
    const myProduct = new InsertNewProduct(acessCredentials, newProduct, food_type, store);
    const orderId = await myProduct.insertProduct();
    res.status(201).json({
      code: orderId,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export { InsertProductController };
