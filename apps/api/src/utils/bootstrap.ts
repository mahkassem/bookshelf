import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { APP_ENV } from '../config/app.config';

export const bootstrap = (): Express => {
  // Express configuration
  const app = express(); // New express instance
  app.use(cors()); // Enable CORS
  app.use(helmet()); // Enable Helmet
  app.use(morgan(APP_ENV)); // Enable Morgan
  app.use(express.json()); // Enable JSON body parser

  return app;
}