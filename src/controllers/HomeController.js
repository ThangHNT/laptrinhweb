const User = require('../model/user');
const Book = require('../model/book');
const {multiComponents} = require('../ulties/converToObject')

class HomeController {
    async home(req,res) {
        const books = await Book.find({});
        res.render('home',{books: multiComponents(books)});
    }

    async homeLogined(req, res) {
        const books = await Book.find({});
        res.render('home_logined',{books: multiComponents(books)});
    }
}

module.exports = new HomeController();