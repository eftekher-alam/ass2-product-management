"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = exports.Product = void 0;
const mongoose_1 = require("mongoose");
const prodVarientSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
const prodInventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [prodVarientSchema], required: true },
    inventory: { type: prodInventorySchema, required: true },
});
exports.productSchema = productSchema;
const Product = (0, mongoose_1.model)("Product", productSchema);
exports.Product = Product;
