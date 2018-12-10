/* eslint-disable consistent-return */
const Tool = require('../models/tool.model.js')

// new tool
exports.create = (req, res) => {
  // validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: 'Missing name',
    })
  }

  // create tool
  const tool = new Tool({
    name: req.body.name,
    type: req.body.type,
    img: req.body.img,
    info: req.body.info,
  })

  // save to database
  tool.save()
    .then((data) => {
      res.send(data)
    }).catch((err) => {
      res.status(500).send({
        message: err.message,
      })
    })
}

// get all tools from database
exports.getAll = (req, res) => {
  Tool.find()
    .then((tools) => {
      res.send(tools)
    }).catch((err) => {
      res.status(500).send({
        message: err.message,
      })
    })
}

// get one tool with id
exports.getToolWithId = (req, res) => {
  Tool.findById(req.params.toolId)
    .then((tool) => {
      if (!tool) {
        return res.status(404).send({
          message: `Cannot find tool with id ${req.params.toolId}`,
        })
      }
      res.send(tool)
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Cannot find tool with id ${req.params.toolId}`,
        })
      }
      return res.status(500).send({
        message: `Error fetching tool with id ${req.params.toolId}`,
      })
    })
}

// update tool with id
exports.update = (req, res) => {
  // validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: 'Missing name',
    })
  }

  // get tool and update
  Tool.findByIdAndUpdate(req.params.toolId, {
    name: req.body.name,
    type: req.body.type,
    img: req.body.img,
    info: req.body.info,
  }, { new: true })
    .then((tool) => {
      if (!tool) {
        return res.status(404).send({
          message: `Cannot find tool with id ${req.params.toolId}`,
        })
      }
      res.send(tool)
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Cannot find tool with id ${req.params.toolId}`,
        })
      }
      return res.status(500).send({
        message: `Error updating tool with id ${req.params.toolId}`,
      })
    })
}

// delete tool with id
exports.delete = (req, res) => {
  Tool.findByIdAndRemove(req.params.toolId)
    .then((tool) => {
      if (!tool) {
        return res.status(404).send({
          message: `Cannot find tool with id ${req.params.toolId}`,
        })
      }
      res.send({ message: 'Tool delete successful!' })
    }).catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: `Cannot find tool with id ${req.params.toolId}`,
        })
      }
      return res.status(500).send({
        message: `Error deleting tool with id ${req.params.toolId}`,
      })
    })
}
