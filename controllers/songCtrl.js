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
// curl --request POST --data "{ \"SongId\": 24, \"Title\": \"Tongue Tied\", \"SongLength\": 425, \"ReleaseDate\": \"8/5/2014\", \"GenreId\": 13, \"ArtistId\": 7, \"AlbumId\": 23 }" http://127.0.0.1:3000/api/v1/songs/new --header "Content-Type: application/json"
module.exports.addSong = ({body}, res, next) => {
  Songly.forge(body)
  .save()
  .then(() => res.status(201).json({'msg': 'Song added successfully'}))
  .catch(err => next(err))
}

module.exports.deleteSong = ({params: {id}}, res, next) => {
  Songly.forge({id})
  .destroy()
  .then(song => res.status(202).json(song))
  .catch(err => next(err))
}
