const express= require('express');   
const app= express();


const path = require('path');




app.set("views","/views");
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/",(request,response)=>{
     //response.send("기본페이지")  
    response.render("index",{key:"value1"});
    
})
app.get("/login",(request,response)=>{
    response.render("login",{key:"value2"});
})





app.listen(3000, () =>{console.log('connected')});