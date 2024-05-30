# API Documentation

You can find the API documentation for the Bookshelf app below. or published on Postman [here](https://documenter.getpostman.com/view/2008200/2sA3QtfXBx).

## Table of Contents

- [API Documentation](#api-documentation)
  - [Table of Contents](#table-of-contents)
  - [Endpoints](#endpoints)
    - [Search books](#search-books)
      - [Request](#request)
      - [Responses](#responses)
        - [Search Success](#search-success)
        - [No term error](#no-term-error)
    - [Add book](#add-book)
      - [Request](#request-1)
      - [Responses](#responses-1)
        - [Add Success](#add-success)
        - [Add Error](#add-error)

## Endpoints

- [GET /books/search](#search-books)
- [POST /books](#add-book)

### Search books

Search for books by title.

#### Request

- Method: `GET`
- URL: `/books/search?term={title}`
- Headers:
  - `Content-Type: application/json`
- Query parameters:
  - `term`: Title of the book to search for

#### Responses

##### Search Success

- Status: `200 OK`
- Body:

```json
[
    {
        "_id": "6657027fbad68dac5909846d",
        "title": "My Book",
        "author": "My Author",
        "publication_date": "2020-05-11"
    },
    {
        "_id": "665727128cb679269e19f223",
        "title": "My Book 2",
        "author": "My Author",
        "publication_date": "2024-05-24"
    }
]
  ```

##### No term error

- Status: `400 Bad Request`
- Body:

```json
{
    "error": "Search term is required"
}
```

### Add book

Add a new book to the database.

#### Request

- Method: `POST`
- URL: `/books`
- Headers:
  - `Content-Type: application/json`
- Body:
  
  ```json
  {
      "title": "My Book",
      "author": "My Author",
      "publication_date": "2020-05-11"
  }
  ```

#### Responses

##### Add Success

- Status: `201 Created`
- Body:

```json
{
    "_id": "6657027fbad68dac5909846d",
    "title": "My Book",
    "author": "My Author",
    "publication_date": "2020-05-11"
}
```

##### Add Error

- Status: `422 Unprocessable Entity`
- Body:

```json
{
  "errors": [
    {
      "type": "field",
      "value": "My Book",
      "msg": "Title already exists",
      "path": "title",
      "location": "body"
    }
  ]
}
```
