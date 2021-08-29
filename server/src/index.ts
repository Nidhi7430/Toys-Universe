import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { ToysUniverse } from './api/routes';
import { knex } from './knex';
import * as knexConfig from './knex/knex.config';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import helmet from 'helmet';
import forceSSL from 'express-force-ssl';
import expressNunjucks from 'express-nunjucks';

dotenv.config();
const app = express();
// save env variables into constant
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// TODO learn this
// security middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    hsts: {
      maxAge: 5400000,
      preload: true,
    },
  })
);

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
} else {
  // TODO learn this
  // do not allow OPTIONS request for security vulnerability
  app.options('/*', (req: Request, res: Response) => res.sendStatus(403));

  // TODO learn this
  // only allow TSL certified domain to work when in production
  app.use(forceSSL);
  app.set('forceSSLOptions', {
    trustXFPHeader: true,
  });
}

// Router
app.use('/toys_universe', ToysUniverse);

// Knex Database Migrations
console.log('migration started');
knex.migrate
  .latest(knexConfig)
  .then(() => {
    console.log('migration completed');
  })
  .catch((err: any) => {
    console.log('Error in database migrations');
    console.log(err);
  });

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
