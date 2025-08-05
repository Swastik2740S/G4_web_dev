require('dotenv').config();

const mongoose = require('mongoose');
const mongoconnect = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("MongoDB Connected");
    }
    catch(err){
        console.log("Not connected")
    }
}

module.exports = mongoconnect;