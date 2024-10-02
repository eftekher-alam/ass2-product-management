import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

// middleware that execute for each request
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});
app.get("/bye", (req: Request, res: Response) => {
    res.send("Good Night...!");
});

export default app;
