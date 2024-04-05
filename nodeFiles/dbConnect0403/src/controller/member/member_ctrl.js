const oracledb=require("oracledb");
const dbConfig=require("../../../config/db_config");
const ser=require("../../service/member/member_service");
oracledb.autoCommit=true;
oracledb.outFormat=oracledb.OBJECT;

const list= async (req,res) => {  // 비동기로 동작되는것을 연결될떄까지 기다리게해서 순차적으로 진행하게끔


    const listObject=await ser.getList();


    
    const list= listObject.rows;


    console.log(list[0].ID);
 
    // list.forEach((member) => {
    //     console.log('Member:', member);
    //     console.log(`ID:`, member.ID);
    //     console.log(`PWD:`, member.PWD);
    //     console.log(`NAME:`, member.NAME);
    //     console.log(`ADDR:`, member.ADDR);
    // });
    
    
    console.log("list"+list);
   
   
    res.render("member/member_index",{list:list});
    
}

const registerForm = (req,res) =>{
    res.render("member/register_form");
}
const register = async (req,res) =>{
    let msg=await ser.insert(req.body);
    res.send(msg);
}

const updateView = (req,res) =>{

}
const memberView01 = async (req,res) =>{
    // console.log("=== view 01 ===");
    // console.log("req.params" , req.params);
    // console.log("req.query" , req.query);

    let member= await ser.getMember(req.params);
   
    res.render(`member/member_view`,{member});
}


const memberDelete= async (req,res) =>{
    console.log("=== view 02 ===");
    console.log("req.params" , req.params);
    let result =await ser.deleteMember(req.params);
    // if(result==1){
        
    // }
    // else{

    // }
        const listObject=await ser.getList();
        const list= listObject.rows;
       
        res.render("member/member_index",{list:list});
}

const memberModifyForm= async(req,res) => {
    console.log("req.params(modifiyForm):" + req.params.id);

    
    let member= await ser.getMember(req.params); //memberdao 에서 받는 방식이이럼

    console.log(member);
    res.render("member/member_modifyForm",{member})
}


const memberModify= async(req,res) =>{
   
    console.log("req.params(during  modifiy):" + req.params.id);
    const { id, pwd, name, addr } = req.body;

    console.log("ID:", id);
    console.log("PWD:", pwd);
    console.log("NAME:", name);
    console.log("ADDR:", addr);
 // modify form action 내용 받음
    // let result =await ser.updateMember(req.params);
   



    // let result= await ser.updateMember(member);
    // if(result==1){ //성공

    // }else{

    // }
    
    //res.render(`member/member_view`,{member});
}
module.exports={list, registerForm , register , updateView ,memberView01, memberDelete ,memberModifyForm ,memberModify};