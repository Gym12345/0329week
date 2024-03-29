const express= require('express');   
const app= express();
const path = require('path');
const router=require("./routes/test_router"); 

app.set("views","/views");
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));



app.use("/",router);


app.listen(3000, "192.168.42.92"); // 3000 번 포트 
