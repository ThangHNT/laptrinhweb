const Book = require('../model/book.js');

class BookController {

    addPage(req, res) {
        res.render('addPage');
    }

    editBookView(req, res, next) {
        res.render('editBook');
    }

    createNewBookView(req, res, next) {
        res.render('newBook');
    }

    createBook(req, res) {
        // console.log(req.body);
        const { bookcode, title, author, category, approved } = req.body;
        const book = new Book();
        book.bookcode = bookcode;
        book.title = title;
        book.author = author;
        book.category = category;
        book.approved = approved;
        book.save();
        return res.send('oke');
    }
}

module.exports = new BookController();
