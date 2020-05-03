module.exports=(app)=>{
app.use('/' ,require('./home'));
app.use('/signup' ,require('./signup'));


app.use(function(req,res){
    
});


}
