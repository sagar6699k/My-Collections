const Albums = require('../models/album.model');


const createAlbum = async (req, res) => {
    try {
        const albums = await Albums.create(req.body);

        return res.status(201).send({ albums });
    } catch (error) {
        return res.status(400).send("Something went wrong");
    }
}


const getAlbums = async (req, res) => {
   try {
        const albums = await Albums.find().populate("songs").lean().exec();;
        return res.status(200).send({ albums });
   } catch (error) {
        return res.status(400).send("Something went wrong");
   }
}

module.exports = {createAlbum, getAlbums}
