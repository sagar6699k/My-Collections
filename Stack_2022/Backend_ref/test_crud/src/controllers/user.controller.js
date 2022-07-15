const express = require('express');
const nodemailer = require('nodemailer');
const { sendEmail } = require('../middlewares/sendEmail');
const User = require('../models/user.model');


const router = express.Router()

//CRUD APIS for user

//post :- create user
router.post("/user", async (req, res) =>{
    try {
        const user  = await User.create(req.body);

        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "e1f43b8f86e92f", // replace with your Mailtrap credentials
                pass: "e63130f3707547"
            },
            debug: true, // show debug output
            logger: true // log information in console
        });

        const mailOptions = {
            from: 'simbathelionking@gmail.com',
            to: user.email,
            subject: "Welcome to INT",
            text: 'Your Account created successfully'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        return res.status(201).send({user});
    } catch (error) {
        console.log(error.message);
    }
})

//Getting the all users
router.get("/users",  async (req, res) =>{
    const users = await model.find().lean().exec() 

    return res.status(201).send({user});
})




module.exports = router;