const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true , unique:true},
    email: { type: String, required: true ,unique:true},
    mobile: { type: Number, required: true },
    password: { type: String, required: true }
},
{
    versionKey: false,
    timestamps:true
});

const User = mongoose.model("user", UserSchema)

module.exports = User;