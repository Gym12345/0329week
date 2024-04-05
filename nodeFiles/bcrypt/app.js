const express=require("express");
//const bodyParser=require("body-parser");
const bcrypt=require("bcrypt");
const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) =>{ 
    const pwd="test";
    // const changePwd=bcrypt.hash(pwd,10);   //비동기
    // console.log(changePwd);
    // changePwd.then(res => console.log(res));   // 비동기로 작동된 hash 의 동작 보장을 위해 서

    const changePwd=bcrypt.hashSync(pwd,10);  //동기  ,두번쨰 인수는 salt 로 크기가높을수록 암호화수준이 높아짐but 시간느려짐
    console.log(changePwd);
    const result = bcrypt.compareSync(pwd,changePwd); // encode.match 랑 같음 스프링

    console.log(result);
    res.send("/경로");
})


app.listen(3000, () => console.log("3000 server"));
