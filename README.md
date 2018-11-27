# AALTO app REST API

Rest API for Aalto app.

```
// patched together using:
nodejs && express && mongodb
```

Documentation
-------------

### 1. Create a new post:
  ```javascript
  POST /posts
  ```

* Example request url:
  ```
    http://apiurl/posts
    ```

* Example request body:
  ```javascript
  {
    "user": "foo",
    "title": "bar",
    "desc": "foobar"
  }
  ```

* Example response:
  ```javascript
  {
    "_id": "####id####",
    "user": "foo",
    "title": "bar",
    "desc": "foobar",
    "createdAt": "2018-11-26T16:55:56.520Z",
    "updatedAt": "2018-11-26T16:55:56.520Z",
    "__v": 0
  }
  ```

### 2. Get all posts
```javascript
GET /posts
```

* Example request url:
  ```
  http://apiurl/posts
  ```

* Example response:
  ```javascript
  [
      {
          "_id": "####id####",
          "user": "foo",
          "title": "bar",
          "desc": "foobar",
          "createdAt": "2018-11-26T15:34:23.135Z",
          "updatedAt": "2018-11-26T15:34:23.135Z",
          "__v": 0
      },
      {
          "_id": "####id####",
          "user": "foofoo",
          "title": "barbar",
          "desc": "foobarfoobar",
          "createdAt": "2018-11-26T15:34:23.135Z",
          "updatedAt": "2018-11-26T15:34:23.135Z",
          "__v": 0
      }
  ]
  ```

### 3. Get one post with Id:
  ```javascript
  GET /posts/:postId
  ```

* Example request url:
  ```
  http://apiurl/posts/####id####
  ```

* Example response:
  ```javascript
  {
    "_id": "####id####",
    "user": "foo",
    "title": "bar",
    "desc": "foobar",
    "createdAt": "2018-11-26T16:55:56.520Z",
    "updatedAt": "2018-11-26T16:55:56.520Z",
    "__v": 0
  }
  ```

### 4. Update post with Id:
  ```javascript
  PUT /posts/:postId
  ```

* Example request url:
  ```
  http://apiurl/posts/####id####
  ```

* Example request body:
  ```javascript
  {
    "user": "newfoo",
    "title": "newbar",
    "desc": "newfoobar"
  }
  ```

* Example response:
  ```javascript
  {
    "_id": "####id####",
    "user": "newfoo",
    "title": "newbar",
    "desc": "newfoobar"
    "createdAt": "2018-11-26T16:55:56.520Z",
    "updatedAt": "2018-11-27T20:32:43.070Z",
    "__v": 0
  }
  ```

  ### 5. Delete post with Id:
  ```javascript
  DELETE /posts/:postId
  ```

* Example request url:
  ```
  http://apiurl/posts/####id####
  ```

* Example response:
  ```javascript
  {
    "message": "Post delete successful!"
  }
  ```