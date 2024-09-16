const mongoose = require('mongoose');
//schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:String,
    password:String,
    date:{
        type:Date,
        default:Date.now
    }
});

//mongoose model
// wrapper on schema 
const User = new mongoose.model('User',userSchema);

module.exports = User;