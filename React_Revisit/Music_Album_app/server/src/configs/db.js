const mongoose = require("mongoose");

const connect = async () => {
    console.log("connection successfull");
    return mongoose.connect("mongodb://127.0.0.1:27017/music_album_record")
}

module.exports = connect;