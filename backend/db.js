require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

const User = new mongoose.model('users', {
    userId: String, 
    password: String
})
console.log(process.env.MONGO_URI)


module.exports = User;
