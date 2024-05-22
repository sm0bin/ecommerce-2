import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/productRoutes";

// configures dotenv to work in your application
dotenv.config();
const app: Application = express();
app.use(express.json());
app.use(cors());
//application routes
app.use("/api/products", ProductRoutes);

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

export default app;
