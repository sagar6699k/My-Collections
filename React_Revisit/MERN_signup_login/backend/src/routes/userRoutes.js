const express = require("express");
const router = express.Router();

const {CreateUser, LoginUser, getUser} = require("../controllers/user.controller")

router.post("/signup", CreateUser)
router.post("/login", LoginUser)
router.get("/", getUser);
module.exports = router;