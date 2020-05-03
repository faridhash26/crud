var mongoose = require('../bootstrap/db');
var schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var salt_factor = 10;


var userschema =new schema({
    username:{type:String ,required:true, unique:true},
    email:{type:String ,required:true, unique:true},
    password:{ type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    displayName: {type:String},
    bio: {type:String}
});

userschema.pre('save' , function(next){
    const user = this;
    bcrypt.genSalt(salt_factor , function(error , salt){
        if(error){next (error);}
        bcrypt.hash(user.password , salt,function(error , encpass){
            user.password = encpass;
            next();
        });
    });
});




userschema.methods.comparePassword = function(password , cb){
    const user=this;
    bcrypt.compare(password , user.password , function(err , ismatch){
        if(ismatch){
            cb(null , ismatch);
        }else{
            cb('ERROR' , false);
        }
    });
}



module.exports = mongoose.model('user' , userschema);
