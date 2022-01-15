const express = require('express');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


const songsRoute = require('./routes/songsRoute')
const albumRoute = require('./routes/albumRoute')
// const artistRoute = require('./routes/artistRoute')
const {register , login, getArtists} = require('./controllers/artist.controller')

app.use("/songs", songsRoute);
app.use("/albums", albumRoute);
// app.use("/artists", artistRoute);

app.post("/register" , register)
app.post("/login" , login)
app.get("/artists" , getArtists)


module.exports = app;