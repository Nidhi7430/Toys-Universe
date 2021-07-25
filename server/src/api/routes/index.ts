import express, { Request, Response } from 'express';

export const ToysUniverse = express.Router();

ToysUniverse.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Welcome to Toys Universe');
});
