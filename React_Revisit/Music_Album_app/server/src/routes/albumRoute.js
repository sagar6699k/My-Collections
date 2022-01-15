const express = require('express');
const router = express.Router();

const { createAlbum, getAlbums } = require('../controllers/album.controller');

router.post("/addalbum", createAlbum);
router.get("/", getAlbums);

module.exports = router;