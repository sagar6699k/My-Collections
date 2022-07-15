const express = require("express");
const UserController = require("./controllers/user.controller");


const app = express();

app.use(express.json());
app.use("/users", UserController)

 

module.exports = app;