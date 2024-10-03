import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/products", ProductControllers.createProductController);
router.get("/products", ProductControllers.readProductsController);
router.get(
    "/products/:productId",
    ProductControllers.readProductByIdController,
);

export const ProductRoutes = router;
