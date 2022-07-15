const express = require('express');
const router = express.Router();

const { createAlbum, getAlbums, getSingleAlbum } = require('../controllers/album.controller');

router.post("/addalbum", createAlbum);
router.get("/", getAlbums);
router.get("/:name", getSingleAlbum);

module.exports = router;