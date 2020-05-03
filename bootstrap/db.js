const mongoose =require('mongoose');

const url = 'mongodb://localhost/test';

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error' , console.error.bind(console,'mongodb connection error'));


module.exports = mongoose;