'use strict'

// <require express Router and require the songs.js router file>
const { Router } = require('express')
const router = Router()

router.use(require('./songs'));

// this is an example of a root document. It returns a json representation of
// all of our endpoints. (Just one endpoint exists in this tiny example app)
router.get('/', function(req, res) {
  res.json({
    "title": "The Music History API",
    "songs": "http://localhost:3000/api/v1/songs",
  });
});

module.exports = router
