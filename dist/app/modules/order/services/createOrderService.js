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
exports.createOrderService = void 0;
const product_model_1 = require("../../product/product.model");
const product_service_1 = require("../../product/product.service");
const order_1 = require("../models/order");
const createOrderService = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const prodUpdateResult = yield inventoryUpdate(order);
    if (!prodUpdateResult)
        throw new Error("Faild to update inventory of the product");
    const result = yield order_1.Order.create(order);
    if (result)
        return result;
    else
        throw new Error("Something is wrong in service");
});
exports.createOrderService = createOrderService;
const inventoryUpdate = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = order.productId;
    const orderQuantity = order.quantity;
    const product = yield product_model_1.Product.findById(productId);
    if (!product)
        throw new Error("Order is not found");
    const dbProduct = product;
    if (orderQuantity > dbProduct.inventory.quantity)
        throw new Error("Out of stock");
    if (orderQuantity < dbProduct.inventory.quantity)
        dbProduct.inventory.quantity -= orderQuantity;
    if (orderQuantity == dbProduct.inventory.quantity) {
        dbProduct.inventory.quantity = 0;
        dbProduct.inventory.inStock = false;
    }
    const prodUpdateResult = yield product_service_1.ProductServices.updateProductService(productId, dbProduct);
    return prodUpdateResult;
});
