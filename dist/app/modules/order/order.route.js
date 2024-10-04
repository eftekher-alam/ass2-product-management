"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouters = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const router = express_1.default.Router();
router.post("/orders", controllers_1.OrderControllers.createOrderController);
router.get("/orders", controllers_1.OrderControllers.getAllOrdersController);
exports.OrderRouters = router;
