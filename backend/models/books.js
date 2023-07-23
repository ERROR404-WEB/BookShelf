const mongoose = require('mongoose');
const { Schema } = mongoose;


const booksSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    booklink: {
        type: String,
    },
    image:{
        type: String,
    }
})

const Books = mongoose.model('books', booksSchema);

module.exports = Books;