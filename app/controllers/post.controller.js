/* eslint-disable consistent-return */
const Post = require('../models/post.model.js')

// new post
exports.create = (req, res) => {
  // validate request
  if (!req.body.user) {
    return res.status(400).send({
      message: 'Missing username',
    })
  }

  // create post
  const post = new Post({
    user: req.body.user,
    title: req.body.title,
    desc: req.body.desc,
  })

  // save to database
  post.save()
    .then((data) => {
      res.send(data)
    }).catch((err) => {
      res.status(500).send({
        message: err.message,
      })
    })
}

// get all posts from database
exports.getAll = (req, res) => {
  Post.find()
    .then((posts) => {
      res.send(posts)
    }).catch((err) => {
      res.status(500).send({
        message: err.message,
      })
    })
}

// get one post with id
exports.getPostWithId = (req, res) => {
  Post.findById(req.params.postId)
    .then((post) => {
      if (!post) {
        return res.status(404).send({
          message: `Cannot find post with id ${req.params.postId}`,
        })
      }
      res.send(post)
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Cannot find post with id ${req.params.postId}`,
        })
      }
      return res.status(500).send({
        message: `Error fetching post with id ${req.params.postId}`,
      })
    })
}

// update post with id
exports.update = (req, res) => {
  // validate request
  if (!req.body.user) {
    return res.status(400).send({
      message: 'Missing username',
    })
  }

  // get post and update
  Post.findByIdAndUpdate(req.params.postId, {
    user: req.body.user,
    title: req.body.title,
    desc: req.body.desc,
  }, { new: true })
    .then((post) => {
      if (!post) {
        return res.status(404).send({
          message: `Cannot find post with id ${req.params.postId}`,
        })
      }
      res.send(post)
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Cannot find post with id ${req.params.postId}`,
        })
      }
      return res.status(500).send({
        message: `Error updating post with id ${req.params.postId}`,
      })
    })
}

// delete post with id
exports.delete = (req, res) => {
  Post.findByIdAndRemove(req.params.postId)
    .then((post) => {
      if (!post) {
        return res.status(404).send({
          message: `Cannot find post with id ${req.params.postId}`,
        })
      }
      res.send({ message: 'Post delete successful!' })
    }).catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: `Cannot find post with id ${req.params.postId}`,
        })
      }
      return res.status(500).send({
        message: `Error deleting post with id ${req.params.postId}`,
      })
    })
}
