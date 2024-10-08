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
exports.createOrderController = void 0;
const validations_1 = require("../validations");
const services_1 = require("../services");
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validOrder = validations_1.OrderValidators.OrderValidation.parse(req.body.order);
        const result = yield services_1.OrderServices.createOrderService(validOrder);
        const response = {
            success: true,
            message: "Successfully order is created.",
            data: result,
        };
        res.status(200).json(response);
    }
    catch (error) {
        const response = {
            success: false,
            message: "Something is wrong.",
            data: error instanceof Error ? error.message : error,
        };
        res.status(200).json(response);
    }
});
exports.createOrderController = createOrderController;
