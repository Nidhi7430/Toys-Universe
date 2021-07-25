import { Knex } from 'knex';
import { PRODUCT_TABLE, SCHEMA } from '../../constants';

export async function up(knex: Knex): Promise<void> {
  // create schema
  await knex.raw(`
    DROP SCHEMA IF EXISTS ${SCHEMA} CASCADE;
    CREATE SCHEMA ${SCHEMA};
  `);

  // create product table
  await knex.schema.withSchema(SCHEMA).createTable(PRODUCT_TABLE, (t) => {
    t.increments('id').unsigned().primary();

    t.string('name').notNullable();
    t.string('description').nullable();
    t.decimal('price_inr', 18, 2);

    t.timestamp('last_update').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
    DROP SCHEMA IF EXISTS ${SCHEMA};
  `);
}
