import { Knex } from "knex";
import { SCHEMA, TABLE } from "../../constants";

export async function up(knex: Knex): Promise<void> {
  // create schema
  await knex.raw(`
    DROP SCHEMA IF EXISTS ${SCHEMA} CASCADE;
    CREATE SCHEMA ${SCHEMA};
  `);

  // create product table
  await knex.schema.withSchema(SCHEMA).createTable(TABLE.PRODUCT_TABLE, (t) => {
    t.increments("id").unsigned().primary();

    t.string("name").notNullable().unique();
    t.string("description").nullable();
    t.decimal("price_inr", 18, 2);
    t.string("amazon_link");

    t.timestamp("last_update").defaultTo(knex.fn.now());
  });

  // create tags table
  await knex.schema.withSchema(SCHEMA).createTable(TABLE.TAGS_TABLE, (t) => {
    t.increments("ud").unsigned().primary();
    t.string("name")
      .references("name")
      .inTable(`${SCHEMA}.${TABLE.PRODUCT_TABLE}`);
    t.string("tag").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
    DROP SCHEMA IF EXISTS ${SCHEMA} CASCADE;
  `);
}
