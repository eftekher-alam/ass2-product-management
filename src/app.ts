import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRouters } from "./app/modules/order/order.route";

const app = express();

// middleware that execute for each request
app.use(express.json());
app.use(cors());

app.use("/api", ProductRoutes);
app.use("/api", OrderRouters);

app.use("/", (req: Request, res: Response) => {
    res.json({ message: "Server is runing, don't forget to build locally." })
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

export default app;
