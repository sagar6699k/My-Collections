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
     const page = +req.query.page || 1;
     const size = 3;
     const offset = (page - 1) * size;

   try {
        const albums = await Albums.find().skip(offset).limit(size).populate("songs").lean().exec();
        const albumCount = await Albums.find().countDocuments();
        const total_pages = Math.ceil(albumCount/size);

        return res.status(200).send({ albums, total_pages });
   } catch (error) {

        return res.status(400).send("Something went wrong");
   }
}

const getSingleAlbum = async (req, res) => {
   try {
        const albums = await Albums.findOne({name: req.params.name}).populate("songs").lean().exec();
        return res.status(200).send({ albums });
   } catch (error) {
        return res.status(400).send("Something went wrong");
   }
}

module.exports = {createAlbum, getAlbums, getSingleAlbum}
