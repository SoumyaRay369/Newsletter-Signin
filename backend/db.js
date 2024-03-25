const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://soumyaray2472:soumyaray2472@cluster0.otvx3fa.mongodb.net/newsletter_signin")

const User = new mongoose.model('users', {
    userId: String, 
    password: String
})



module.exports = User;
