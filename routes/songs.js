'use strict';

// <require the express Router>
const { Router } = require('express')
const router = Router()

// <require the songCtrl to get access to its methods>
const { getSong, getSongs, addSong } = require('../controllers/songCtrl')


// <define routes for getting all songs and a single song>
// <stretch: define routes for posting, deleting, editing a song>
router.get('/songs', getSongs)
router.get('/songs/:id', getSong)
router.post('/songs/new', addSong)

module.exports = router
