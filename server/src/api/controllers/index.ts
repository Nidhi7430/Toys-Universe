import { Request, Response } from "express";
import { TABLE, SCHEMA } from "../../constants";
import { knex } from "../../knex";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await knex
      .withSchema(SCHEMA)
      .select("*")
      .from(TABLE.PRODUCT_TABLE);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price_inr, amazon_link, tags } = req.body;
    const productData = {
      name,
      description,
      price_inr,
      amazon_link,
    };
    const tagData: any[] = [];
    tags.map((tag: string) => tagData.push({ name, tag: tag.trim() }));
    // console.log(tagData);
    const insert_product = await knex
      .withSchema(SCHEMA)
      .insert(productData)
      .into(TABLE.PRODUCT_TABLE);

    const insert_tags = await knex
      .withSchema(SCHEMA)
      .insert(tagData)
      .into(TABLE.TAGS_TABLE);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
