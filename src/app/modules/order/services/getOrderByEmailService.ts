import { Order } from "../models/order";

export const getOrderByEmailService = async (email: string) => {
    const result = await Order.find({ email: email });
    if (result) return result;
    else throw new Error("Something is wrong");
};
