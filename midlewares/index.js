var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

module.exports=(app)=>{

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret:"ohdofoksdngforhtowfl,v,ll,2343545",
    resave:true,
    saveUninitialized:true
}));

app.use(express.static(path.join(__dirname, '../public')));

}