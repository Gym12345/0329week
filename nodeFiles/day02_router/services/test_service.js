const member=require("../../db/memberDAO.js");

const showList = () =>{
    console.log("service working checke");
    console.log(member)

    return member;
}

const getMember=(i) =>{    //i data from testcontroller

    
   
    const infoArr={id: member.DBMember[i].id , name:member.DBMember[i].name,addr:member.DBMember[i].addr}
    return infoArr;
}

const checkAuth=(result) =>{
    let isLoggedIn
    if (result==1){
        isLoggedIn=true;
        return isLoggedIn;
    }else{
        isLoggedIn=false;
        return isLoggedIn;
    }
} 
 
module.exports={showList, getMember,checkAuth};