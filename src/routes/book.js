const express = require('express');
const router = express.Router();

const bookController = require('../controllers/BookController');

router.get('/add', bookController.addPage);
router.post('/new-book',bookController.newBook);

module.exports = router;
