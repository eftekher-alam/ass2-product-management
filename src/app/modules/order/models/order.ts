import { model, Schema } from "mongoose";
import { IOrder } from "../interfaces/IOrder";

const orderSchema = new Schema<IOrder>({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { tyep: Number, required: true },
});

const Order = model<IOrder>("Order", orderSchema);

export { Order, orderSchema };
