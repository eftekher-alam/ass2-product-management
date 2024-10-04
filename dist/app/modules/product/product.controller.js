"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const student_validation_1 = require("./student.validation");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const validProduct = student_validation_1.ProductValidators.zodProduct.parse(product);
        const result = yield product_service_1.ProductServices.createProductService(validProduct);
        const response = {
            success: true,
            message: "Product created successfully",
            data: result,
        };
        res.status(200).json(response);
    }
    catch (error) {
        const response = {
            success: false,
            message: "Someting is wrong",
            data: error instanceof Error ? error.message : error,
        };
        res.status(500).json(response);
    }
});
const readProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result;
        const searchTerm = req.query.searchTerm;
        if (searchTerm) {
            result = yield product_service_1.ProductServices.searchProductService(searchTerm);
        }
        else {
            result = yield product_service_1.ProductServices.readProductsService();
        }
        const response = {
            success: true,
            message: "Products found successfully",
            data: result,
        };
        res.status(200).json(response);
    }
    catch (error) {
        const response = {
            success: false,
            message: "Someting is wrong",
            data: error instanceof Error ? error.message : error,
        };
        res.status(500).json(response);
    }
});
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productData = req.body.product;
        const validProduct = student_validation_1.ProductValidators.zodProduct.parse(productData);
        const result = yield product_service_1.ProductServices.updateProductService(productId, validProduct);
        const response = {
            success: true,
            message: "Updated product successfully",
            data: result,
        };
        res.status(200).json(response);
    }
    catch (error) {
        const response = {
            success: false,
            message: "Someting is wrong",
            data: error instanceof Error ? error.message : error,
        };
        res.status(500).json(response);
    }
});
const readProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    try {
        const result = yield product_service_1.ProductServices.readProductByIdService(productId);
        // if (!result) throw new Error("No Product found.");
        const response = {
            success: true,
            message: "Product found successfully",
            data: result,
        };
        res.status(200).json(response);
    }
    catch (error) {
        const response = {
            success: false,
            message: "Someting is wrong",
            data: error instanceof Error ? error.message : error,
        };
        res.status(500).json(response);
    }
});
const deleteProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    try {
        const result = yield product_service_1.ProductServices.deleteProductByIdService(productId);
        const response = {
            success: true,
            message: "Product deleted successfully",
            data: result,
        };
        res.status(200).json(response);
    }
    catch (error) {
        const response = {
            success: false,
            message: "Someting is wrong",
            data: error instanceof Error ? error.message : error,
        };
        res.status(500).json(response);
    }
});
exports.ProductControllers = {
    createProductController,
    readProductsController,
    readProductByIdController,
    updateProductController,
    deleteProductByIdController,
};
