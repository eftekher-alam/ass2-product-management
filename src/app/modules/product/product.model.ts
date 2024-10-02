import { model, Schema } from "mongoose";
import { IInventory, IProduct, IVariant } from "./product.interface";

const prodVarientSchema = new Schema<IVariant>({
    type: { type: String, required: true },
    value: { type: String, required: true },
});

const prodInventorySchema = new Schema<IInventory>({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tages: { type: [String], required: true },
    variants: { type: [prodVarientSchema], required: true },
    inventory: { type: prodInventorySchema, required: true },
});

const Product = model<IProduct>("Product", productSchema);

export { Product, productSchema };
