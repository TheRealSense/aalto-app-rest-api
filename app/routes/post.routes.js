/* eslint-disable global-require */
module.exports = (app) => {
  const posts = require('../controllers/post.controller.js')

  // new post
  app.post('/posts', posts.create)

  // get all posts
  app.get('/posts', posts.getAll)

  // get one post with id
  app.get('/posts/:postId', posts.getPostWithId)

  // update post with id
  app.put('/posts/:postId', posts.update)

  // delete post with id
  app.delete('/posts/:postId', posts.delete)
}
