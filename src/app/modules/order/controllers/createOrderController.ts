import { Request, Response } from "express";
import { OrderValidators } from "../validations";
import { OrderServices } from "../services";
import { IResponse } from "../../../utlities/interfaces/IResponse";

export const createOrderController = async (req: Request, res: Response) => {
    try {
        const validOrder = OrderValidators.OrderValidation.parse(
            req.body.order,
        );

        const result = await OrderServices.createOrderService(validOrder);

        const response: IResponse = {
            success: true,
            message: "Successfully order is created.",
            data: result,
        };
        res.status(200).json(response);
    } catch (error) {
        const response: IResponse = {
            success: false,
            message: "Something is wrong.",
            data: error instanceof Error ? error.message : error,
        };
        res.status(200).json(response);
    }
};
