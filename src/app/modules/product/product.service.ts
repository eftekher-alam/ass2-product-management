import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductService = async (productData: IProduct) => {
    const result = await Product.create(productData);

    return result;
};

const readProductsService = async () => {
    const result = await Product.find();
    return result;
};
const searchProductService = async (searchTerm: string) => {
    console.log("Executing search function.");

    const result = await Product.find({
        name: { $regex: searchTerm, $options: "i" },
    });
    return result;
};

const readProductByIdService = async (productId: string) => {
    const result = await Product.findById(productId);
    if (result) return result;
    else throw new Error("No Product found.");
};

const updateProductService = async (productId: string, product: IProduct) => {
    const result = await Product.findByIdAndUpdate(productId, product);
    return result;
};

const deleteProductByIdService = async (productId: string) => {
    const result = await Product.findByIdAndDelete(productId);
    return result;
};

export const ProductServices = {
    createProductService,
    readProductsService,
    readProductByIdService,
    updateProductService,
    searchProductService,
    deleteProductByIdService,
};
