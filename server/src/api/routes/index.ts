import express, { Request, Response } from "express";
import { addProduct, getProducts } from "../controllers";

export const ToysUniverse = express.Router();

ToysUniverse.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to Toys Universe from Nidhi");
});

ToysUniverse.get("/product", getProducts);

ToysUniverse.post("/product/add", addProduct);
