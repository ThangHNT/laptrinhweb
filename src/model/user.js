const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    account: { type: String, required: true, default: '' },
    password: { type: String, required: true, default: '' },
    email: { type: String, required: true, default: '' },
    age: { type: String, default: '' },
    address: { type: String, default: '' },
});

module.exports = mongoose.model('User', User);
