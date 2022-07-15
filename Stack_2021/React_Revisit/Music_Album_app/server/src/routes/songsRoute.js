const express = require('express');
const router = express.Router();

const { getSongs, createSong } = require('../controllers/songs.controller');

router.post("/addsong", createSong);
router.get("/", getSongs);

module.exports = router;