import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductService = async (productData: IProduct) => {
    const result = Product.create(productData);

    return result;
};

const readProductsService = async () => {
    const result = Product.find();
    return result;
};

const readProductByIdService = async (productId: string) => {
    const result = Product.findById(productId);
    return result;
};

export const ProductServices = {
    createProductService,
    readProductsService,
    readProductByIdService,
};
