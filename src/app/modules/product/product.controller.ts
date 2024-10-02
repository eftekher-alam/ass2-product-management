import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { IResponse } from "./../../utlities/interfaces/IResponse";

const createProductController = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        // console.log("Product data", product);
        const result = await ProductServices.createProduct(product);

        const response: IResponse = {
            success: true,
            message: "Student created successfully",
            data: result,
        };
        res.status(200).json(response);
    } catch (error) {
        const response: IResponse = {
            success: false,
            message: "Someting is wrong",
            data: error instanceof Error ? error.message : error,
        };
        res.status(500).json(response);
    }
};

export const ProductControllers = {
    createProductController,
};
