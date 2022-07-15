const jwt = require('jsonwebtoken')
require("dotenv").config();
const Artist = require('../models/artist.model');

const newToken = (Artist) => {
    return jwt.sign({ Artist }, process.env.JWT_SECRET_KEY )
}


const register = async (req, res) => {

    let artist;
    try {
        //1st we will check the Artist with same email already exists
        // artist = await Artist.findOne({ email: req.body.email })
        
        //if YES then we will throw an error that email is already exist.
        // if(artist) return res.status(401).send({message : "Please check email and password"})

        //else we will create Artist with email and password , but b4 saving the pswrd we need to hash it
        artist = await Artist.create(req.body)
        
        //now we will create a token
        const token = newToken(artist)

        //now we will send token to the frontend

        return res.status(200).send({artist , token})
    }

    catch(err){
        return res.status(500).send({message : "sorry for inconvinience please try later"})

    }


}

const login = async (req, res) => {

    try {
        
        //1st we will check the Artist with same email already exists
        let artist = await Artist.findOne({ email: req.body.email })
        
        //if not exist then we will throw an error
        if(! artist) return res.status(401).send({message : "Please check email and password"})

        //and if exist then we try to match the password
        console.log(req.body);
        
        let match = artist.checkPassword(req.body.password)
        
        //if not match then we throw an error
        if(!match) return res.status(401).send({message : "Please check email and password"})

        //now we will create a token
        const token = newToken(artist)
        // console.log(token);

        //now we will send token to the frontend

        return res.status(200).send({artist , token})
    }
    catch(err) {

        return res.status(500).send({message : "sorry for inconvinience please try later"})
    }

}


// const createArtist = async (req, res) => {
//     try {
//         const artists = await Artist.create(req.body);

//         return res.status(201).send({ artists });
//     } catch (error) {
//         return res.status(400).send("Something went wrong");
//     }
// }


const getArtists = async (req, res) => {
   try {
        const artists = await Artist.find().populate({
            path: 'albums',
            populate: { path: 'songs' }
          }).lean().exec();
        
        return res.status(200).send({ artists });
   } catch (error) {
        return res.status(404).send("Something went wrong");
   }
}


// module.exports = {createArtist, getArtists}

module.exports = {register , login, getArtists}
