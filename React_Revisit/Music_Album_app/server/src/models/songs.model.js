const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
    poster: { type: String, required: true }
    
},
{
    versionKey: false,
    timestamps: true
})

const Songs = mongoose.model('song', songSchema);

module.exports = Songs;