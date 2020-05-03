var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var User = require('../models/users');


passport.use( new LocalStrategy(function(username,email,password, done){
    User.findOne({username:user},function(err,USER){
        if(err){return done(err)}
        if(!USER){
            return done(null ,false , {message :"incorrect user"});
        }
        USER.checkpassword(passport , function(errrs, ismatch){
            if(errrs){return done(err);}
            if(ismatch){
                return done(null , USER);
            }else{
                return done(null ,false , {message :"invalid password"});
            }
        });
    });
}));

passport.serializeUser(function(user ,done){
    done(null , user._id);
});
passport.deserializeUser(function(id , done){
    User.findById(id , function(err , user){
        done(err, user);
    });
});