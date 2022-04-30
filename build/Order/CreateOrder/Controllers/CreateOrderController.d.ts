import { Request, Response } from "express";
declare const CreateOrderController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { CreateOrderController };
