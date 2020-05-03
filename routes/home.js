const router = require('express').Router();
var passport= require('passport');





router.get('/',function(req,res,neext){
    res.render("index");
});
router.post('/' ,passport.authenticate("local",{
    successRedirect:"/profile",
    failureRedirect:"/"
}
));
module.exports=router;