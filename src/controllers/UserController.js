const User = require('../model/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserController {
    loginPage(req, res) {
        return res.render('loginPage');
    }

    signUpPage(req, res) {
        return res.render('sign_upPage');
    }

    logout(req, res) {
        return res.redirect('/');
    }
}

module.exports = new UserController();
