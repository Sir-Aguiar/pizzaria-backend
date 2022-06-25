import { Request, Response } from "express";
declare const GetOrdersController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { GetOrdersController };
