const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  toolName: String,
  toolDescription: String,
  toolPictureUrl: String,
  toolTutorialUrl: String,
}, {
  timestamps: true,
})

module.exports = mongoose.model('Tool', PostSchema)
