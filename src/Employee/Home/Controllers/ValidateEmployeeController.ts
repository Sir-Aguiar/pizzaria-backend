import { Request, Response } from "express";
import { AreEmployeeCredentialsValid } from "../../../CheckEmployeeCredentials";

export const EmployeeController = async (req: Request, res: Response) => {
  const { id, name } = req.params;
  const store = req.header("store") as string;
  try {
    await AreEmployeeCredentialsValid(
      {
        _id: id,
        name: name,
      },
      store
    );
    res.status(200).send();
  } catch (e: any) {
    res.status(400).json({
      error: e.message,
    });
  }
};
