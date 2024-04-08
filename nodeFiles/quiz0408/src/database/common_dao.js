const oracledb = require("oracledb");
const dbConfig = require("../../config/database/db_config");
oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OBJECT;

// const dbConnect=async()=>{
//    return await 
// }

// module.exports=oracledb.getConnection(dbConfig)
module.exports=oracledb.getConnection(dbConfig);
//연결된 객체를 내보내서 
// dbConnect를 사용하여 연결된 객체를 가져오는 방법