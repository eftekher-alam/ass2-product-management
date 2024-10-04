import { IOrder } from "../interfaces/IOrder";
import { Order } from "../models/order";

export const createOrderService = async (order: IOrder) => {
    const result = await Order.create(order);
    if (result) return result;
    else throw new Error("Something is wrong in service");
};
