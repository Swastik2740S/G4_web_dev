//Express framework built on top of the nodejs its useful for restfull apis it make our work easy 
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

// app.use("/",(req,res)=>{
//     try{
//     res.send("Backend Started");
//     console.log("App use running ");
    
//     }
//     catch{
//         res.send("Server not found")
//     }
// })

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));   //static file
//app.use() works from top to bottom takes all the http requests (get post put delete) it will go to the furthur routes (/)(/home)
//app.all() same all the http requests (get post put delete) but read the furthur parts(/)(/home) it will not go to /home from /

PORT =  8080
app.listen(PORT,()=>{
    console.log(`backend started at : http://localhost:${PORT}`);
})
