import express from "express";
import { OrderControllers } from "./controllers";

const router = express.Router();

router.post("/orders", OrderControllers.createOrderController);
router.get("/orders", OrderControllers.getAllOrdersController);

export const OrderRouters = router;
