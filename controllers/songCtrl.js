'use strict'

// <require a song model>
const { bookshelf } = require('../db/database')
const Songly = require('../models/song')

// < use model methods for getting all songs and one song then send the response back with the data>
module.exports.getSongs = (req, res, next) => {
  Songly.getAll()
  .then(songs => res.status(200).json(songs))
  .catch(err => next(err))
}

module.exports.getSong = ({params: {id}}, res, next) => {
  Songly.getSingle(id)
  .then(song => res.status(200).json(song))
  .catch(err => next(err))
}

// <stretch goal: methods for adding, deleting, editing a song>

module.exports.addSong = ({body}, res, next) => {
  Songly.forge(body)
  .save()
  .then(() => res.status(201).json({'msg': 'Song added successfully'}))
  .catch(err => next(err))
}

module.exports.deleteSong = ({params: {id}}, res, next) => {
  Songly.forge({SongId: id})
  .where('SongId', '=', id)
  .destroy()
  .then(song => res.status(202).json(song))
  .catch(err => next(err))
}

module.exports.updateSong = ({body, params: {id}}, res, next) => {
  Songly.forge()
  .where('SongId', '=', id)
  .save(body, {method: 'update'})
  .then(() => res.status(201).json({'msg': 'Song updated successfully'}))
  .catch(err => next(err))
}
