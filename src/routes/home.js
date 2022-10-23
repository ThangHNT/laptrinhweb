const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController');

router.get('/', homeController.home);
router.post('/home', homeController.login);
router.post('/sign-up', homeController.signUp);

module.exports = router;