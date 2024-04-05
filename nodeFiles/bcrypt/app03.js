const express = require("express");

const app=express();

console.log("dirname:", __dirname); // 이파일이있는 경로를 알려줌 
app.set("view engine","ejs");


app.get("/",(req,res) =>{
    res.render("index");
})
app.get("/get_members",(req,res) =>{
    res.json(members);
})

const bodyParser= require("body-parser");
app.use(bodyParser.json());

app.post("/register",(req,res) => {
    console.log("req body:", req.body)
    members=members.concat(req.body);
    res.json(1);
})

app.get("/search/:id", (req,res)=>{
    console.log(req.params);

    const result=members.filter(mem=> mem.id  === req.params.id)
    console.log("result:",result);
    res.json(result[0]);
})

app.put("/modify",(req,res) =>{
    members=members.filter(mem => mem.id !== req.body.id)
    members = members.concat(req.body);
    res.json(1);
})

app.delete("/delete", (req,res) => {
    members=members.filter(mem => mem.id !== req.body.id);
    res.json(1);    
})
app.listen(3000 ,() => console.log("3000server"));