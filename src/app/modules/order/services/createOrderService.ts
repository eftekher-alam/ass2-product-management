import { IProduct } from "../../product/product.interface";
import { Product } from "../../product/product.model";
import { ProductServices } from "../../product/product.service";
import { IOrder } from "../interfaces/IOrder";
import { Order } from "../models/order";

export const createOrderService = async (order: IOrder) => {
    const prodUpdateResult = await inventoryUpdate(order);
    if (!prodUpdateResult)
        throw new Error("Faild to update inventory of the product");

    const result = await Order.create(order);
    if (result) return result;
    else throw new Error("Something is wrong in service");
};

const inventoryUpdate = async (order: IOrder) => {
    const productId = order.productId;
    const orderQuantity = order.quantity;
    const product = await Product.findById(productId);

    if (!product) throw new Error("Order is not found");
    const dbProduct: IProduct = product;

    if (orderQuantity > dbProduct.inventory.quantity)
        throw new Error("Out of stock");

    if (orderQuantity < dbProduct.inventory.quantity)
        dbProduct.inventory.quantity -= orderQuantity;

    if (orderQuantity == dbProduct.inventory.quantity) {
        dbProduct.inventory.quantity = 0;
        dbProduct.inventory.inStock = false;
    }

    const prodUpdateResult = await ProductServices.updateProductService(
        productId,
        dbProduct,
    );

    return prodUpdateResult;
};
