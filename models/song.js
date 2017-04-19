'use strict'

const { bookshelf } = require('../db/database')

// <Define a model using bookshelf that describes a song object, and
// static methods for getting one or all songs from the db>
// tableName should come from DB browser
const Songly = bookshelf.Model.extend({
  tableName: 'Song',
}, {
  getAll: function() {
    console.log('Get all the shows')
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(err => err)
  },
  getSingle: function(SongId) {
    return this.forge({SongId})
    .fetch()
    .then(song => song)
    .catch(err => err)
  }
})

module.exports = bookshelf.model('Songly', Songly)
