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
app.get("/member",(request,response)=>{
    datas={
        arr:['홍길동','20살','산골짜기'],
        obj:{'name':'김개똥', 'age':'30살','addr':'seoul'},
        name: 'choi',
        'age':'40살',
        'addr':'inchoen'
    }
    response.render("member",{datas});
})


app.get("/for_quiz",(request,response)=>{
    datas={
        "rank":[
            [1,2,3,4,5],
            ["6","7","8","9","십"],
            [11,12,13,14,15]
        ]
    }
    response.render("for_quiz",{datas});
})

app.get("/onlineUrls",(request,response)=>{
    datas={
        urls:[
            {"네이버":"www.naver.com"}, 
            {"Google":"www.google.com"} ,
            {"daum":"www.daum.net"}
            ]
        }
    response.render("onlineUrls",{datas});
})


app.get("/if",(request,response) => {
    const num=150;
    if(num>100){
        console.log("80본다 크다");
    }
    else if(num>80) {
        console.log("80보다 크다");
    }
})
app.listen(3000, () =>{console.log('connected')});