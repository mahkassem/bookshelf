# Bookshelf App

## Description

Bookshelf is a simple app for storing and searching for books.
It consists of two apps:

- API: A RESTful API for managing books ([README.md](./apps/api/README.md))
- Web: A web app for searching and adding books ([README.md](./apps/web/README.md))

## Dependencies

- Node.js (v20.13.1)
- npm (v10.5.2)
- MongoDB

## Installation

```bash
npm install
```

## Build

### Build All

```bash
npm run build --workspaces
```

### Build API

```bash
npm run build --workspace=api
```

### Build Web

```bash
npm run build --workspace=web
```

## Usage

This will start the API and Web apps.

### Start API

```bash
npm start --workspace=api
```

### Start Web

```bash
npm start --workspace=web
```

## Development

### Start API in Development Mode

```bash
npm run dev --workspace=api
```

### Start Web in Development Mode

```bash
npm run dev --workspace=web
```

### Test API

```bash
npm test --workspace=api
```

### Test Web

_Not implemented_

## Docker

You can also run the app using Docker Compose. The following instructions assume you have Docker and Docker Compose installed.

### Build Docker Compose

```bash
docker compose up -d
```
