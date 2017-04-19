'use strict'

// <require a song model>
const { bookshelf } = require('../musichistory')
const Song = require('../models/song')

// < use model methods for getting all songs and one song then send the response back with the data>
module.exports.getSongs = (req, res, next) => {
  Song.getAll()
  .then((songs) => {
    res.status(200).json(songs)
  })
  .catch((err) => {
    next(err)
  })
}

module.exports.getSong = ({params: {id}}, res, next) => {
  Song.getSingle(id)
  .then((song) => {
    res.status(200).json(song)
  })
  .catch((err) => {
    next(err)
  })
}

// <stretch goal: methods for adding, deleting, editing a song>
