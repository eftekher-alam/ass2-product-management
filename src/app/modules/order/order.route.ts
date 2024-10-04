import express from "express";
import { OrderControllers } from "./controllers";

const router = express.Router();

router.get("/orders", OrderControllers.createOrderController);

export const OrderRouters = router;
