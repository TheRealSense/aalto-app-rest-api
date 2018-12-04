/* eslint-disable global-require */
module.exports = (app) => {
  const posts = require('../controllers/post.controller.js')
  const tools = require('../controllers/tool.controller.js')


  /* POST ROUTES */

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


  /* TOOL ROUTES */

  // new tool
  app.post('/tools', tools.create)

  // get all tools
  app.get('/tools', tools.getAll)

  // get one tool with id
  app.get('/tools/:toolId', tools.getToolWithId)

  // update tool with id
  app.put('/tools/:toolId', tools.update)

  // delete tool with id
  app.delete('/tools/:toolId', tools.delete)
}
