// <Setup the configuration module for knex and bookshelf>
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[environment]
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)


// The music history database lives right here as a document in this project, so note
// that the development configuration sets that environment to use sqlite instead of postgres.
bookshelf.plugin('registry');
// No need to make migrations, since the db and tables already exist

module.exports = { knex, bookshelf }
