import { Request, Response } from "express";
import { pathing } from "../../../server";
import { ValidateEmployee } from "../Home";

export const HomeController = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (await ValidateEmployee(Number(id))) {
    res.sendFile(`${pathing}/test1.html`);
    return;
  }
  res.sendFile(`${pathing}/invalid.html`);
};
