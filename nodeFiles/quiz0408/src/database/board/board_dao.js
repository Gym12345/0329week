const con =require("../common_dao")
const boardRead={
    list :async ()=>{
        const sql ="select * from board";
        const list =(await con).execute(sql);
        //con을 직접 받을 때 await을 통해 con을 우선 처리해야된다.
        //우선처리 필수
        return list
    }
}

const boardInsert={
    write:async(body) =>{
        const sql=`insert into board(write_no,id, title,content, origin_file_name,
            change_file_name)values(board_seq.nextval, :id, :title, :content,
            :origin_file_name, :change_file_name)`;
                const result= await (await con).execute(sql,body);
                return result;

    }
}   
module.exports={boardRead , boardInsert}