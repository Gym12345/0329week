const express =require("express");
const app =express();
let con;

app.get("/",(req,res) => {
    console.log("1.연동전..")
    con = connect();
    con.then(msg => {
        console.log("3.연동완료후 특정 기능 사용");
        res.send("con:"+msg);
    })
   
   // res.send("con:"+con);
})

const connect = () =>{
    let msg;
    return new Promise( (resolve) => {   //비동기로 동작을 할떄 msg 의 올바른 값을 보장 해주는것
        setTimeout( () => {       
            msg="연동 되었습니다";
            console.log("2.연동 하는중")
            resolve(msg);
        } , 1000);
       

    } );
    // setTimeout( () => {        // 비동기
    //     msg="연동 되었습니다";
    //     console.log("2.연동 하는중")

    // } , 1000);
 
    // msg="연동 되엇습니다";             //동기
    // console.log("2.연동 하는중");
    // return msg;
}

app.get("/async", async (req,res) => {   // async : 이함수안에는 비동기로 하는 함수가있습니다 명시
    console.log("1111 연동전 async");
    con=await connect();
    console.log("3333 받아온 객체 연산 async");
    res.send("con:"+con);
})


const oracleDB=require("oracledb");

const dbConfig={
    user:"C##Gym12345_2",
    password:"991224",
    connectString:"localhost:1521/orcl"//orcl
}

app.get("/connect", async (req,res)=>{
    let con = await oracleDB.getConnection(dbConfig);
    console.log("con:"+ con);

    let con1=oracleDB.getConnection(dbConfig);
    con1.then(res =>{
        console.log("res:" ,res);
        //res.execute("sql 명령어");
    })
    console.log("con :",con)
    console.log("con1111:"+con1);
    res.send("con:" +con);
});
app.listen(3000,() =>console.log("running"))