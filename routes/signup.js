const router = require('express').Router();
const User= require('../models/users');
const express=require('express');
const app = express();


router.get('/', function(req,res){
     res.render('signup');
})

router.post('/' , (req,res,next)=>{
     var user= req.body.username;
     var password = req.body.password;
     var email = req.body.email;

    
   User.findOne({$or:[{username:user},{email:email}]},function(err,USER){
       console.log(USER.username);
        if(err){
             res.send(err);
        }
        if(USER){
             res.json({
                  ERROR:"information exist",
                  COLOR:'alert-danger'
             })
            
        }else{
             var newuser = new User({
                  username:user,
                  email:email,
                  password:password
             });
             newuser.save(function(err , ok){
                  if(err){res.send(err)}
                  res.json({
                    ERROR:"user save successfuly",
                    COLOR:'alert-success'
                  });
             });
        }
   });
});






module.exports=router;