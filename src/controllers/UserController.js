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

    async checkAccount(req, res){
        const {account, email} = req.body;
        const checkAccount = await User.findOne({account});
        const checkEmail = await User.findOne({email});
        if(checkAccount) {
            return res.json({result: false, msg: "Tên tài khoản đã tồn tại"});
        } else if(checkEmail) {
            return res.json({result: false, msg:"Email đã được đăng ký"});
        } else {
            return res.json({result:true});
        }
    }
}

module.exports = new UserController();
