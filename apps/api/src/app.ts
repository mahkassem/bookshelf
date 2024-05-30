import router from './routes';
import { APP_PORT } from './config/app.config';
import { bootstrap } from './utils/bootstrap';
import logger from './utils/logger';

// Create server
const app = bootstrap(); // New express instance

// Load all routes
app.use('/', router);

// Start server
app.listen(APP_PORT, () => {
  // Callback function when server is successfully started
  logger.info(`Server started at http://localhost:${APP_PORT}`);
});

export default app;
