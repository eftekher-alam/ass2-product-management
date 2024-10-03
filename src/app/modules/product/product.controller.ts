import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { IResponse } from "./../../utlities/interfaces/IResponse";
import { ProductValidators } from "./student.validation";

const createProductController = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const validProduct = ProductValidators.zodProduct.parse(product);
        const result = await ProductServices.createProductService(validProduct);

        const response: IResponse = {
            success: true,
            message: "Product created successfully",
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

const readProductsController = async (req: Request, res: Response) => {
    try {
        let result: unknown;
        const searchTerm: unknown = req.query.searchTerm;
        if (searchTerm) {
            result = await ProductServices.searchProductService(
                searchTerm as string,
            );
        } else {
            result = await ProductServices.readProductsService();
        }

        const response: IResponse = {
            success: true,
            message: "Products found successfully",
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

const updateProductController = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const productData = req.body.product;
        const validProduct = ProductValidators.zodProduct.parse(productData);
        const result = await ProductServices.updateProductService(
            productId,
            validProduct,
        );

        const response: IResponse = {
            success: true,
            message: "Updated product successfully",
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

const readProductByIdController = async (req: Request, res: Response) => {
    const productId = req.params.productId;
    try {
        const result = await ProductServices.readProductByIdService(productId);

        // if (!result) throw new Error("No Product found.");

        const response: IResponse = {
            success: true,
            message: "Product found successfully",
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

const deleteProductByIdController = async (req: Request, res: Response) => {
    const productId = req.params.productId;
    try {
        const result =
            await ProductServices.deleteProductByIdService(productId);

        const response: IResponse = {
            success: true,
            message: "Product deleted successfully",
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
    readProductsController,
    readProductByIdController,
    updateProductController,
    deleteProductByIdController,
};
