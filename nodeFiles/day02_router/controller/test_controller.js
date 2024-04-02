const express = require("express");
const service = require("../services/test_service");
const app = express();


const index = (request, response) => {
  
    response.render("index");
};
const showList=(request,response)=>{
    const member = service.showList();
    
    response.render("list", { member });
}
const login = (request, response) => {
    response.render("loginForm");
};

const getInfo = (request, response) => {
    let i=request.query.i;
    const specificInfo=service.getMember(i);
    
    response.render("info", { specificInfo });
};

const loginCheck = (request, response) => {
    let id =request.body.userId;    //form actionpost  data 받으려면 이렇게 받고 메인.js 에 
//const bodyParser = require('body-parser');  app.use(bodyParser.urlencoded({ extended: true })); 추가해줘야함
   
    let pw=request.body.userPw;
   
    console.log("Received id:", id);
    console.log("Received pwd:", pw);
    if(id=='id1' && pw=='1111'){
       
       
        response.redirect('/showList');
       
    }
    else{
       
        response.render("index",{isLoggedIn});
    }
   
};



module.exports = { index, login, loginCheck, getInfo ,showList};
