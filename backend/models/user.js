const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        default:"https://i.postimg.cc/TwxmBP0w/profile-pic.jpg",
        type: String,
    }
})


const User = mongoose.model('user', userSchema);

module.exports = User;