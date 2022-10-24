const express = require('express');
const router = express.Router();

const bookController = require('../controllers/BookController');

router.get('/add', bookController.addPage);
router.post('/new-book',bookController.newBook);
router.post('/edit',bookController.edit);
router.get('/edit-page',bookController.editPage);
router.get('/delete',bookController.delete);

module.exports = router;
