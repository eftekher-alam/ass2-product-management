import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (productData: IProduct) => {
    const result = Product.create(productData);

    return result;
};

const readProducts = async () => {
    const result = Product.find();
    return result;
};

export const ProductServices = {
    createProduct,
    readProducts,
};
