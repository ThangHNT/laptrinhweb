const User = require('../model/user');
const Book = require('../model/book');

const bcrypt = require('bcrypt');
const saltRounds = 10;

class HomeController {
    home(req,res) {
        res.render('home');
    }

    async login(req, res) {
        const {account, password} = req.body;
        const checkAccount = await User.findOne({account});
        if(!checkAccount) return res.render('login-failed',{msg:'Tài khoản hoặc mật khẩu không đúng'});
        const checkPw = await bcrypt.compare(password,checkAccount.password);
        if(!checkPw) return res.render('login-failed',{msg:'Tài khoản hoặc mật khẩu không đúng'});
        return res.render('home_logined',{account});
    }

    async signUp(req, res) {
        // console.log(req.body);
        const {account, password, email, age,address} = req.body;
        const hashPassword = await bcrypt.hash(password,saltRounds);
        const user = new User();
        user.account = account;
        user.password = hashPassword;
        user.email = email;
        user.age = age;
        user.address = address;
        // user.save();
        res.redirect('/user/login');
    }
}

module.exports = new HomeController();