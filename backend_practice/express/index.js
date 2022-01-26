// const express = require("express");
import express from "express";
import usersRoutes from "./routes/users.js"

const app = express();
app.use(express.json());

app.use("/users", usersRoutes)



app.get("/", (req, res) => {
    res.send("Hello From HomePage")
})






// module.exports = app;
export default app;
