'use strict'

const { bookshelf } = require('../musichistory')

// <Define a model using bookshelf that describes a song object, and
// static methods for getting one or all songs from the db>
// tableName should come from DB browser
const Song = bookshelf.Model.extend({
  tableName: 'Song',
}, {
  getAll: function() {
    console.log('Get all the shows')
    return this.forge()
    .fetchAll()
    .then(rows => return rows)
    .catch(err => return err)
  },
  getSingle: function(id) {
    return this.forge({id})
    .fetch()
    .then(show => return show)
    .catch(err => return err)
  }
})

module.exports = bookshelf.model('Song', Song)
