import dotenv from 'dotenv';
import { Knex } from 'knex';
import path from 'path';
require('ts-node/register');

dotenv.config({ path: path.resolve(__dirname + './../../.env') });

/**
 * @remarks Update your config settings.
 *
 * @see {@link https://medium.com/@j3y/beyond-basic-knex-js-database-migrations-22263b0fcd7c}
 */
const knexConfig: Knex.Config = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: Number.parseInt(process.env.DB_PORT || '5432'),
  },
  acquireConnectionTimeout: 10000,
  useNullAsDefault: true,
  migrations: {
    directory: path.resolve(__dirname + '/migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname + '/seeds'),
  },
};

module.exports = knexConfig;
