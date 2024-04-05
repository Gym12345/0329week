const express = require("express");

const app=express();

console.log("dirname:", __dirname); // 이파일이있는 경로를 알려줌 


app.set("views",__dirname+"/views");
app.set("view engine","ejs");
let count=0;
app.get("/non_fetch",(req,res)=>{

    console.log("non_fetch 연동");
    count++;
    res.render("non_fetch",{count});
})


app.get("/fetch01",(req,res) => {
    console.log("fetch01:" , count++);
    res.render("fetch01",{count});
})


app.get("/get_count",(req,res)=>{
    console.log("get_count:", count++);
    //res.render("fetch01",{count});

    res.json({cnt : count })
})
app.get("/rest",(req,res)=>{
    res.render('rest');
})
/* 요청종류
     get:데이터 얻기 , post:추가 , put:수정, delete:삭제*/
app.get("/test",(req,res)=>{
    res.json("get 데이터 요청")
})
app.post("/test",(req,res)=>{
    res.json("post 데이터 요청")
})
app.put("/test",(req,res)=>{
    res.json("put 데이터 요청")
})
app.delete("/test",(req,res)=>{
    res.json("delete 데이터 요청")
})

app.listen(3000 ,() => console.log("3000server"));