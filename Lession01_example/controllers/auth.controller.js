var md5 = require('md5'); 
var  db = require('../db');

module.exports.login = function(req, res){
    res.render('auth/login'); //path,obj
};

module.exports.postLogin = function(req, res){
    var email = req.body.email; 
    var password=req.body.password;
    var user = db.get('users').find({email : email}).value();
    if(!user){
        res.render('auth/login',{
            errors : [
                'User does not exists.'
            ],
            values : req.body
        })
    } 
    var hashedPassWord = md5(password); 
    console.log(hashedPassWord);
    if(user.password !== hashedPassWord){
        res.render('auth/login', {
            errors : [
                'Wrong password.'
            ],
            values : req.body
        })
    }
    res.cookie('userId', user.id);
    res.redirect('/users'); 
}; 
