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

    async checkAccountSignup(req, res){
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

    async login(req, res) {
        const {account, password} = req.body;
        const checkAccount = await User.findOne({account});
        if(!checkAccount) return res.render('login-failed',{msg:'Tài khoản hoặc mật khẩu không đúng'});
        const checkPw = await bcrypt.compare(password,checkAccount.password);
        if(!checkPw) return res.render('login-failed',{msg:'Tài khoản hoặc mật khẩu không đúng'});
        res.redirect('/home');
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
        user.save();
        res.redirect('/home');
    }
}

module.exports = new UserController();
