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
exports.getAllOrdersController = void 0;
const services_1 = require("../services");
const validations_1 = require("../validations");
const getAllOrdersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result;
        let email = req.query.email;
        if (email) {
            email = validations_1.OrderValidators.zodEmail.parse(email);
            result = yield services_1.OrderServices.getOrderByEmailService(email);
        }
        else {
            result = yield services_1.OrderServices.getAllOrderServiec();
        }
        const response = {
            success: true,
            message: "Successfully found orders",
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
exports.getAllOrdersController = getAllOrdersController;
