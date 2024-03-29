const express= require('express');   
const app= express();
const path = require('path');


app.set("views","/views");
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));


const router2=express.Router();


router2.get("/",(request,respone) => {
    respone.send('/index',router2);
})
router2.get("/member",(request,respone) => {
    respone.send('/member',router2);
})


app.listen(3000, "192.168.42.92"); // 3000 번 포트 
