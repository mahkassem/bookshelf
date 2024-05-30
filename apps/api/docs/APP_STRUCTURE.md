# Application Structure

## Overview

This document describes the structure of the application.

## Structure

The application is structured as follows:
  
  ```txt
  api/
  ├── src/
  │   ├── config/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   ├── tests/
  │   ├── utils/
  |   │   ├── __tests__/
  |   │   ├── database/
  |   │   ├── validators/
  │   |   ├── bootstrap.ts
  │   |   ├── logger.ts
  │   ├── app.ts
  ├── .env
  ├── package.json
  ├── README.md
  ```

## Directories

- `src/` - Contains the source code of the application.
  - `config/` - Contains the configuration files.
  - `controllers/` - Contains the controllers of the application.
  - `models/` - Contains the models of the application.
  - `routes/` - Contains the routes of the application.
  - `tests/` - Contains the tests of the application.
  - `utils/` - Contains the utility functions of the application.
    - `__tests__/` - Contains the tests for the utility functions.
    - `database/` - Contains the database utility functions.
    - `validators/` - Contains the validators for the utility functions.
    - `bootstrap.ts` - Contains the bootstrap file of the application.
    - `logger.ts` - Contains the logger file of the application.
  - `app.ts` - Contains the main file of the application.
- `.env` - Contains the environment variables of the application.
