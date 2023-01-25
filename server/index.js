require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

const cors = require('cors'); // Prevent errors in the client side

app.use(express.json()) //This is important for parsing the object data through
app.use(cors())

mongoose.connect(process.env.MONGODB_URL);

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
}); // Show Data

app.post("/createUser", async (req,res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
}); // Create Data

app.listen(3001, () => {
    console.log("SERVER IS RUNNING!");
}) //Testing the server