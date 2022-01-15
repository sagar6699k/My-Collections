const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')


const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {type: String, required: true},
    password: { type: String, required: true , minlength:6 , maxlength:100 },
    albums:[{type: mongoose.Schema.Types.ObjectId, ref:'album' , required: true }]
},
{
    versionKey: false,
    timestamps: true
})



//while creating and updating
artistSchema.pre("save", function (next) {
    if (!this.isModified("password")) next()
    
    const hash = bcryptjs.hashSync(this.password, 8);
    this.password = hash

    next();
})


artistSchema.methods.checkPassword = function (password) {
    const match = bcryptjs.compareSync(password , this.password)

    return match
}


const Artist = mongoose.model('artists', artistSchema);

module.exports = Artist;