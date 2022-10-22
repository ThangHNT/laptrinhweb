const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/login', userController.loginPage); // trang đăng nhập
router.get('/sign-up', userController.signUpPage); // trang đăng ký
router.get('/logout',userController.logout);

module.exports = router;
