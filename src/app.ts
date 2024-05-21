import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

// configures dotenv to work in your application
dotenv.config();
const app: Application = express();

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

export default app;
