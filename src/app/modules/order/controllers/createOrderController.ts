import { Request, Response } from "express";

export const createOrderController = async (req: Request, res: Response) => {
    res.json({ success: true });
};
