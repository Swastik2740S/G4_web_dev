const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    rollno : {
        type : Number,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    }
})

module.exports = mongoose.model('User',userschema);