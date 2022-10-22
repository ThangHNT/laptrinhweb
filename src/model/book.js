const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema({
    bookcode: { type: String, default: '', required: true },
    category: { type: String, default: '', required: true },
    title: { type: String, default: '', required: true },
    author: { type: String, default: '', required: true },
    approved: { type: String },
});

module.exports = mongoose.model('Book', Book);
