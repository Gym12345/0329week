const express= require('express');   
const app= express();
const path = require('path');



const config=require("./config/config");  //
const session=require("express-session");//
const sessionRouter=require("./session/src/routes/session_router");

app.set("views","./src/views");
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/src/views"));



app.use(session(config.sessionConfig));
app.use("/",sessionRouter);





app.listen(3000, "127.0.0.1"); // 3000 번 포트 


