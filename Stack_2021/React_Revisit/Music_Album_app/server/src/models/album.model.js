const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: {type: String, required: true},
    year: { type: Number, required: true },
    poster: { type: String, required: true },
    songs:[{type: mongoose.Schema.Types.ObjectId, required: true, ref:'song'}]
},
{
    versionKey: false,
    timestamps: true
})

const Albums = mongoose.model('album', albumSchema);

module.exports = Albums;