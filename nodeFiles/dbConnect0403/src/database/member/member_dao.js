const oracledb=require("oracledb");
const dbConfig=require("../../../config/db_config");

oracledb.autoCommit=true;
oracledb.outFormat=oracledb.OBJECT;

const getList = async() =>{
   
    let con =await oracledb.getConnection(dbConfig); // 비동기가 끝나는걸 기다리겟다
   
    let result=await con.execute("select * from members");

    console.log("result", result);
    return result;

}

const bcrypt = require("bcrypt");

const insert = async (body) =>{

    body.pwd=bcrypt.hashSync(body.pwd,10);  //암호화 등록 실습
    let con = await oracledb.getConnection(dbConfig);
    const sql = `insert into members(id,pwd,name,addr) values(:id, :pwd, :name , :addr)`;
    let result=0;

    try {
        result=await con.execute(sql, body);
    }catch (err){
        console.log(err);
    }
    

    console.log("result :" , result);
    return result; 
}

const getMember=async (mId) =>{
    console.log("dao id:",mId);
  
    console.log("dao id:",mId.id);

    const con = await oracledb.getConnection(dbConfig);
    const sql= `select * from members where id = '${mId.id}'`;
    console.log("sql:"+ sql);
    let member;
    try{
        member = await con.execute(sql);

    }catch(err){
        console.log(err);
    } 
    

    console.log("member(dao):" , member.rows);
    return member.rows;

}

const deleteMember=async (mId) => {
    console.log("at delmem(dao)",mId.id); // array open and grabbed certain var
    let result=0;
    const con = await oracledb.getConnection(dbConfig);
    const sql= `delete from members where id = '${mId.id}'`;

    try {
        const result=await con.execute(sql);
        if (result.rowsAffected > 0) {
            console.log("Delete operation successful. Rows affected:", result.rowsAffected);
            // Set result to 1 indicating success
            result = 1;
        } else {
            console.log("No rows affected. Record with the given ID may not exist.");
            // Set result to 0 indicating failure
            result = 0;
        }

    }catch(err){
        console.log(err);
    }
    return result;

}

const updateMember= async (member) =>{
    
    let result=0;
    console.log("at update member member:"+member.ID);
    const con = await oracledb.getConnection(dbConfig);
    const sql= `update members set id = '${member.ID}' , name= ${member.NAME} , addr=${member.ADDR} where id=${member.ID} `;

    try {
        const result=await con.execute(sql);
        if (result.rowsAffected > 0) {
            console.log("update operation successful. Rows affected:", result.rowsAffected);
            // Set result to 1 indicating success
            result = 1;
        } else {
            console.log("No rows affected. Record with the given ID may not exist.");
            // Set result to 0 indicating failure
            result = 0;
        }

    }catch(err){
        console.log(err);
    }
    return result;
}
module.exports= {  getMember, insert, getList ,deleteMember ,updateMember} ;