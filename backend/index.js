const express = require('express')
const User = require('./db');
const app = express();
app.use(express.json())
const cors = require('cors')
app.use(cors())

app.post('/signup', async(req, res) => {
    const {userId, password} = req.body;
    const user = new User({
        userId: userId,
        password: password
    })
    await user.save();
    res.status(200).json({msg:"Succesfully signed up!!!"})
})

app.post('/login', async (req, res) => {
    const {userId, password} = req.body;
    const user = await User.findOne({userId})

    if(!user){
        return res.json({msg: "User Id is wrong"})
    }
    if(user.password !== password){
        return res.json({msg: "Password is wrong"})
    }
    // User found and password matches
    if(user.password){
        return res.status(200).json({msg: "Successfully logged in!!!"})
    }
})

app.get("/", (req, res) =>  {
    res.json({msg: "Hi there!!!"})
})

app.get('/users', async(req, res) => {
    const users = await User.find({})
    res.json(users);
})
app.listen(3000, () => {
    console.log("Listening on port 3000")
})