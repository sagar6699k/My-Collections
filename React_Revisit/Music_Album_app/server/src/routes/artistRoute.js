const express = require('express');
const router = express.Router();

const { createArtist, getArtists } = require('../controllers/artist.controller');

router.post("/addartist", createArtist);
router.get("/", getArtists);

module.exports = router;