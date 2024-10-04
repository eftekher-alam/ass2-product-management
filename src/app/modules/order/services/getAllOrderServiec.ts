import { Order } from "../models/order";

export const getAllOrderServiec = async () => {
    const result = await Order.find();
    if (result) return result;
    else throw new Error("Something is wrong.");
};
