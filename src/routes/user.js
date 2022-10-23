const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/login', userController.loginPage); // trang đăng nhập
router.get('/sign-up', userController.signUpPage); // trang đăng ký
router.get('/logout',userController.logout);
router.post('/check/account',userController.checkAccount);

module.exports = router;
