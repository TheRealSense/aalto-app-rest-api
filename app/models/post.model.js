const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  user: String,
  title: String,
  desc: String,
}, {
  timestamps: true,
})

module.exports = mongoose.model('Note', PostSchema)
