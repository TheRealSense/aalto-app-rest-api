const mongoose = require('mongoose')

const ToolSchema = mongoose.Schema({
  name: String,
  type: String,
  img: String,
  info: [{
    desc: String,
    url: String,
  }],
}, {
  timestamps: true,
})

module.exports = mongoose.model('Tool', ToolSchema)
