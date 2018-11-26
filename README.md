# AALTO app REST API

Rest API for Aalto app.

```
nodejs - express - mongodb
```

Documentation
-------------

### Create a new post:

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