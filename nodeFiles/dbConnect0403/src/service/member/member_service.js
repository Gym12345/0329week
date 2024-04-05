const memberDAO=require("../../database/member/member_dao");

const getList = () => {
    const result=memberDAO.getList();
    console.log("service:",result);
    return result;

}
const insert= async (body) => {
    const result =await memberDAO.insert(body);
    let msg="" ,url="";
    if(result==0){
        msg="문제 발생";
        url="/member/register_form";

    }else{
        msg="회원가입 성공";
        url="/member/list";
    }

    let msgPack=getMessage(msg,url);
    return msgPack;
}
const getMessage = (msg,url) =>{
    return `<script>
        alert("${msg}"); location.href="${url}";
    </script>`
}

const getMember= async (mId) => {
    const member= await memberDAO.getMember(mId);
    console.log("at member service:"+member[0]); 
    return member[0];

}
const deleteMember= async (mId) =>{
    console.log("at service(del):"+mId); //mId still in array
    let result=await memberDAO.deleteMember(mId); //result will be 0(fail) or 1(success)
    console.log("result at service:"+result)
    return result;

}
const updateMember= async(member)=>{
   
    let result=await memberDAO.updateMember(member); //result will be 0(fail) or 1(success)
    console.log("result at service(updateMember):"+result)
    return result;
}
module.exports = { getList ,insert , getMember, deleteMember ,updateMember};