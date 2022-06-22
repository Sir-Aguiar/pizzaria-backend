import { Request, Response } from "express";
import { pathing } from "../../../server";
import { ValidateEmployee } from "../ValidateEmployee";

export const EmployeeController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const EmployeeState = await ValidateEmployee(Number(id));
  if (EmployeeState.status) {
    return res.status(200).json({
      employee: EmployeeState.employee,
    });
  }
  return res.status(400);
};
