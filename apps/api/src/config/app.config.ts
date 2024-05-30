import dotenv from 'dotenv';

// Initialize configuration
dotenv.config();

// Application environment
const APP_ENV = process.env.APP_ENV || 'dev';
const APP_PORT = process.env.APP_PORT || 4000;
const APP_DEBUG = process.env.APP_DEBUG == 'true';
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const MONGO_DB = process.env.MONGO_DB || 'test';

// Export configuration
export {
  APP_ENV,
  APP_PORT,
  APP_DEBUG,
  MONGO_URI,
  MONGO_DB
};