const express = require('express');
const app = express();
app.use(express.json());

//over riddding

app.set('view engine',)

app.response.send = function(statuscode,type,message){
    return this.contentType(type)
    .status(statuscode)
    .send(message)
}

app.get("/",(req,res)=>{
    console.log("root api hit");
    // res.send("Welcome to the server");
    res.sendStatus(201,'text/plain','{"message":"created the method"}');
    
})

app.get("/home",(req,res)=>{
    res.render("home.hbs",{
        companyName : 'Adidas',
        founder : 'Swastik verma'
    })
})

// app.get("/bad",(req,res)=>{
//     console.log("root api hit");
//     // res.send("Welcome to the server");
//     res.sendStatus(400);
    
// })

// app.get("/error",(req,res)=>{
//     console.log("root api hit");
//     // res.send("Welcome to the server");
//     res.sendStatus(404);
    
// })

// app.get("/forbidden",(req,res)=>{
//     console.log("root api hit");
//     // res.send("Welcome to the server");
//     res.sendStatus(403);
    
// })

// app.get("/internal",(req,res)=>{
//     console.log("root api hit");
//     // res.send("Welcome to the server");
//     res.sendStatus(501);
    
// })



app.listen(8080,()=>{
    console.log("Server listening on http://localhost:8080");
})