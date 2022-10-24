const Book = require('../model/book.js');
const {component} = require('../ulties/converToObject')
class BookController {

    addPage(req, res) {
        res.render('addPage');
    }

    newBook(req, res) {
        // console.log(req.body);
        const {title,author,description,numberOfPage,category,releaseDate} = req.body;
        const book = new Book();
        if(req.files){
            const dataBase64 = req.files.coverImage.data.toString("base64");
            // console.log(dataBase64);
            book.coverImage = `data:image/jpeg;base64,${dataBase64}`;
        }
        book.title = title;
        book.author = author;
        book.description = description;
        book.numberOfPage = numberOfPage;
        book.releaseDate = releaseDate;
        book.category = category;
        book.save();
        res.redirect('/home');
    }

    async editPage(req,res){
        // console.log(req.query);
        const book = await Book.findOne({_id:req.query.id});
        return res.render('editPage',{book:component(book)});
    }

    async edit(req,res){
        const {title,author,description,numberOfPage,category,releaseDate} = req.body;
        console.log(req.body);
        const book = await Book.findOne({_id:req.query.id});
        if(req.files){
            const dataBase64 = req.files.coverImage.data.toString("base64");
            book.coverImage = `data:image/jpeg;base64,${dataBase64}`;
        }
        book.title = title;
        book.author = author;
        book.description = description;
        book.numberOfPage = numberOfPage;
        book.releaseDate = releaseDate;
        book.category = category;
        book.save();
        res.redirect('/home');
    }
}

module.exports = new BookController();
