const express = require('express')
const bodyParser = require('body-parser')

// express app
const app = express()

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// database configuration
const mongoose = require('mongoose')
const dbConfig = require('./config/database.config.js')

mongoose.Promise = global.Promise

// connecting to database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
}).then(() => {
  // eslint-disable-next-line no-console
  console.log('Connected to database :--DDD')
}).catch((err) => {
  // eslint-disable-next-line no-console
  console.log('Could not connect to database :-P', err)
  process.exit()
})

// parse requests of content-type - application/json
app.use(bodyParser.json())

// simple route
app.use(express.static('public'))
// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server running on port 3000'))

// require posts routes
require('./app/routes/post.routes')(app)

// listen for requests
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening port 3000')
})
