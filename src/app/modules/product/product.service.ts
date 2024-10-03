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
const searchProductService = async (searchTerm: string) => {
    console.log("Executing search function.");

    const result = Product.find({
        name: { $regex: searchTerm, $options: "i" },
    });
    return result;
};

const readProductByIdService = async (productId: string) => {
    const result = Product.findById(productId);
    return result;
};

const updateProductService = async (productId: string, product: IProduct) => {
    const result = Product.findByIdAndUpdate(productId, product);
    return result;
};

export const ProductServices = {
    createProductService,
    readProductsService,
    readProductByIdService,
    updateProductService,
    searchProductService,
};
