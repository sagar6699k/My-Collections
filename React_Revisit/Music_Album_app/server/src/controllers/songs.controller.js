const Songs = require('../models/songs.model');


const createSong = async (req, res) => {
    try {
        const songs = await Songs.create(req.body);

        return res.status(201).send({ songs });
    } catch (error) {
        return res.status(400).send("Something went wrong");
    }
}


const getSongs = async (req, res) => {
   try {
        const songs = await Songs.find();
        return res.status(200).send({ songs });
   } catch (error) {
        return res.status(400).send("Something went wrong");
   }
}

module.exports = {createSong, getSongs}
