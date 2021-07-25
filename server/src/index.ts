import express from "express";
import dotenv from "dotenv";
import { ToysUniverse } from "./api/routes";
import { knex } from "./knex";
import * as knexConfig from "./knex/knex.config";

dotenv.config();

const app = express();

// save env variables into constant
const PORT = process.env.PORT;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Router
app.use("/toys_universe", ToysUniverse);

console.log("migration started");
knex.migrate
  .latest(knexConfig)
  .then(() => {
    console.log("migration completed");
  })
  .catch((err: any) => {
    console.log("Error in database migrations");
    console.log(err);
  });

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
