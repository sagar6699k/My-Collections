const express = require("express");

const router = express.Router();

const User = require("../models/user.model.js")


router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).send({ user });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.get("/", async (req, res) => {
    try {
        const user = await User.find({}).lean().exec();

        res.status(200).send({ user });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})






module.exports = router;