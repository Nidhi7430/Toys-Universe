import { Request, Response } from "express";
import { PRODUCT_TABLE, SCHEMA } from "../../constants";
import { knex } from "../../knex";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await knex.withSchema(SCHEMA).select("*").from(PRODUCT_TABLE);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const data = await knex
      .withSchema(SCHEMA)
      .insert(req.body)
      .into(PRODUCT_TABLE)
      .returning("*");
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
