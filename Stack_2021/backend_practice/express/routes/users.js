import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();
let users = [{
    firstName: "Sagar",
    "lastName":"Kurewar"
}]


router.get("/", (req, res) => {
    // res.send("Hello Users")
    res.send(users)
})

router.post("/", (req, res) => {

    const user = req.body;
    const userId = uuidv4();
    const userWithId = {...user, userId}

    users.push(userWithId)
    res.send(users)
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const findUser = users.find((user) => user.userId === id);

    res.send(findUser);
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    users = users.filter((user)=> user.userId !== id)
    res.send(users)
})

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    const user = users.find((user)=> user.userId === id)

    if (firstName) {
        user.firstName = firstName
    }
    if (lastName) {
        user.lastName = lastName
    }

    res.send(user)

})




export default router;