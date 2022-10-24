const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema({
    title: { type: String, default: '', required: true },
    author: { type: String, default: '', required: true },
    category: { type: String, default: '', required: true },
    description: {type:String, required: true, default: ''},
    releaseDate: { type: String , required: true},
    numberOfPage: { type: String, required: true, default:''},
    coverImage:{type:String, required: true, default: ''},
});

module.exports = mongoose.model('Book', Book);
