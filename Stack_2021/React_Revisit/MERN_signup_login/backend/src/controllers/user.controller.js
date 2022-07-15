const User = require("../models/user.model")


const CreateUser = async (req, res) => {
    // try {
        let existing_username = await User.findOne({username: req.body.username })
        let existing_email = await User.findOne({email: req.body.email })
        if (existing_username || existing_email) {
            return res.send("User Already exist")
        } else {
            const user = await User.create(req.body);
            return res.status(201).send({ user });
        }
       
    // } catch (error) {
    //     return res.status(400).send("Not Found");
    // }
}



const LoginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (user) {
        if (password === user.password) {
           return res.status(200).send({message: "Login SuccessFull", user})
        }
        else {
           return res.status(404).send({message: "incorrect password"})
        }
    }

}




const getUser = async (req, res) => {
   try {
        const user = await User.find({});
        return res.status(200).send({ user });
   } catch (error) {
        return res.status(400).send("Not Found");
   }
}


module.exports = {CreateUser, LoginUser, getUser}