"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const createOrderService_1 = require("./createOrderService");
const getAllOrderServiec_1 = require("./getAllOrderServiec");
const getOrderByEmailService_1 = require("./getOrderByEmailService");
exports.OrderServices = {
    createOrderService: createOrderService_1.createOrderService,
    getAllOrderServiec: getAllOrderServiec_1.getAllOrderServiec,
    getOrderByEmailService: getOrderByEmailService_1.getOrderByEmailService,
};
