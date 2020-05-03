var mongoose = require('../bootstrap/db');
var schema = mongoose.Schema;




var userschema =new schema({
    username:{type:String ,required:true, unique:true},
    email:{type:String ,required:true, unique:true},
    password:{ type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    displayName: {type:String},
    bio: {type:String}
});



module.exports = mongoose.model('user' , userschema);
