const path = require('path');
const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv').config();

const app = express();
app.set('view engine','ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/',function(req,res){
    res.render('login',{title: 'Login',action: 'Signup',css: 'main'});
});

app.get('/signup',function(req,res){
    res.render('signup',{title: 'Sign-Up',action: 'Login',css: 'register'});
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
console.log(`Listening on port ${PORT}`);
});
