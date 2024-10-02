import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";

const app = express();

// middleware that execute for each request
app.use(express.json());
app.use(cors());

app.use("/api", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

export default app;
