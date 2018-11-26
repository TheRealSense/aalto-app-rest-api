# AALTO app REST API

Rest API for Aalto app.

```
// patched together using:
nodejs && express && mongodb
```

Documentation
-------------

### 1. Create a new post:

  ```
  POST /posts
  ```


* Example request:
  ```
  {
    "user": "foo",
    "title": "bar",
    "desc": "foobar"
  }
  ```

* Example response:
  ```
  {
    "_id": "##########",
    "user": "foo",
    "title": "bar",
    "desc": "foobar",
    "createdAt": "2018-11-26T16:55:56.520Z",
    "updatedAt": "2018-11-26T16:55:56.520Z",
    "__v": 0
  }
  ```

### 2. Get all posts

```
GET /posts
```

* Example response:
  ```
  [
      {
          "_id": "##########",
          "user": "foo",
          "title": "bar",
          "desc": "foobar",
          "createdAt": "2018-11-26T15:34:23.135Z",
          "updatedAt": "2018-11-26T15:34:23.135Z",
          "__v": 0
      },
      {
          "_id": "##########",
          "user": "foofoo",
          "title": "barbar",
          "desc": "foobarfoobar",
          "createdAt": "2018-11-26T15:34:23.135Z",
          "updatedAt": "2018-11-26T15:34:23.135Z",
          "__v": 0
      }
  ]
  ```