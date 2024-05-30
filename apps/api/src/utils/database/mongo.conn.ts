import { MongoClient } from 'mongodb';
import { MONGO_URI, MONGO_DB } from '../../config/app.config';
import logger from '../logger';

// MongoDB client
export const client = new MongoClient(MONGO_URI);

// MongoDB connection
client.connect().then(() => {
  logger.info('Connected to MongoDB');
  // ensure index on the 'title' field
  // get index information for the 'books' collection
  client.db(MONGO_DB).collection('books').indexInformation().then((indexes) => {
    // check if the 'title' field has an index
    if (!Object.keys(indexes).includes('title_1')) {
      // create an index on the 'title' field
      client.db(MONGO_DB).collection('books').createIndex({ title: 1 }, { unique: true }).then(() => {
        logger.info('Index created on the "title" field');
      }).catch(err => logger.error(err));
    }
  }).catch(err => logger.error(err));

}).catch(err => logger.error(err));

// Set Database
const db = client.db(MONGO_DB);

// Export db
export default db;