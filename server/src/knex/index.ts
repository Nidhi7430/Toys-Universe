import dotenv from "dotenv";
import { Knex } from "knex";
import * as knexConfig from "./knex.config";

// env variables
dotenv.config();

/**
 * @remarks Update your config settings.
 *
 * @see {@link knexfile.ts}
 */

export const knex: Knex = require("knex")(knexConfig);
