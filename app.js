'use strict'

const express = require('express');
const bodyParser = require('body-parser');
var bodyParser = require('body-parser');
let app = express();

// <Include the router index file>
const routes = require('./routes/')

let app = express()

// ********* BEGIN MIDDLEWARE ********* //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// <Setup your routes middleware>
app.use('api/v1/', routes)

// <catch any undefined routes with a 404 middleware>
app.use(function(req, res, next) {
  let err = new Error('Page not found')
  err.status = 404
  next(err)
})

// <Handle any errors that occur in the routing with error handlers defined at the bottom of our middleware stack>
app.use( (err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err
  })
})
// ********* END OF MIDDLEWARE ******** //

const port = process.env.PORT || 3000
app.list(port, () => {
  console.log(`listening on port ${port} in the ${process.env.NODE_ENV} environment`)
})

module.exports = app
