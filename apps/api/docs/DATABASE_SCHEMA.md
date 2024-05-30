# Database Schema

MongoDB database schema for the Bookshelf app.

## Collections

### Books Collection

Collection for storing books.

#### Schema

```mongodb
{
    "_id": ObjectId,
    "title": "string",
    "author": "string",
    "publication_date": "string"
}
```

#### Example

```json
{
    "_id": "6657027fbad68dac5909846d",
    "title": "My Book",
    "author": "My Author",
    "publication_date": "2020-05-11"
}
```

## Indexes

### Books Collection Indexes

#### title

Index for the `title` field. Used for searching books by title.

Index name: `title_1`

```mongodb
{
    "title": 1,
    "unique": true
}
```
