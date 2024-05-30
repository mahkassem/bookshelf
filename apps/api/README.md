# Bookshelf API

## Description

API for the Bookshelf app.

## Installation

```bash
npm install
```

## External dependencies

- MongoDB

## Environment variables

Create or rename the `.env.example` file to `.env` and fill in the values.
The following environment variables are available:

| Variable | Description | Options | Default |
| --- | --- | --- | --- |
| APP_ENV | Environment to run the app in | `dev`, `test`,  `prod` | `dev` |
| APP_PORT | Port to run the server on |  | `4000` |
| APP_DEBUG | Enable debug mode | `true`, `false` | `true` |
| MONGO_URI | URI to connect to the MongoDB database | | `mongodb://localhost:27017` |
| MONGO_DB | Name of the database to use | | `test` |

## Build

```bash
npm run build
```

## Running the app

_Note:_
_* Build the app first_

```bash
npm start
```

## Development

```bash
npm run dev
```

## Testing

```bash
npm test
```

## Documentation

- [API Documentation](./docs/API.md)
- [APP Structure](./docs/APP_STRUCTURE.md)
- [APP High Level Design](./docs/APP_HIGH_LEVEL_DESIGN.md)
- [Database Schema](./docs/DATABASE_SCHEMA.md)
