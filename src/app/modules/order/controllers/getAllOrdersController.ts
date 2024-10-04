import { Request, Response } from "express";
import { IResponse } from "../../../utlities/interfaces/IResponse";
import { OrderServices } from "../services";
import { OrderValidators } from "../validations";

export const getAllOrdersController = async (req: Request, res: Response) => {
    try {
        let result: unknown;
        let email: unknown = req.query.email;

        if (email) {
            email = OrderValidators.zodEmail.parse(email);
            result = await OrderServices.getOrderByEmailService(
                email as string,
            );
        } else {
            result = await OrderServices.getAllOrderServiec();
        }

        const response: IResponse = {
            success: true,
            message: "Successfully found orders",
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
