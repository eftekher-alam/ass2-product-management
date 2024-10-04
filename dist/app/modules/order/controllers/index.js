"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const createOrderController_1 = require("./createOrderController");
const getAllOrdersController_1 = require("./getAllOrdersController");
exports.OrderControllers = {
    createOrderController: createOrderController_1.createOrderController,
    getAllOrdersController: getAllOrdersController_1.getAllOrdersController,
};
