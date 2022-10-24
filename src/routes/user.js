const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/login', userController.loginPage); // trang đăng nhập
router.get('/sign-up', userController.signUpPage); // trang đăng ký
router.get('/logout',userController.logout);
router.post('/login-now',userController.login);   // kiểm tra tk, mk khi login
router.post('/check/account-sign-up',userController.checkAccountSignup);   // kiểm tra tài khoản mới có bị trùng ko
router.post('/sign-up-now', userController.signUp);

module.exports = router;
