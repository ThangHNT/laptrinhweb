const Book = require('../model/book.js');

class BookController {

    addPage(req, res) {
        res.render('addPage');
    }

    newBook(req, res) {
        console.log(req.body);
        if(req.files){
            const dataBase64 = req.files.coverImage.data.toString("base64");
            // console.log(dataBase64);
        }
        return res.send('oke');
    }
}

module.exports = new BookController();
