const express = require('express');
const connect = require('./configs/db')

const userController = require('./controllers/user.controller');
const { sendEmail } = require('./middlewares/sendEmail');

const app = express();
app.use(express.json());


app.use("/" ,userController)


app.listen(1122, async function () {
    await connect();
    console.log("listening on port 1122");
})