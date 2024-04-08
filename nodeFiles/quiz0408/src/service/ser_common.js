//const { getMessage } = require("./member/member_service");

const sessionCheck= (session) =>{
    if(!session || !session.username){
        msg="로그인 사용자만 접근가능";
        url="/member/login";
        return getMessage(msg,url);
    }
    return 0;

}

const getMessage= (msg,url ) => {
    return `<script>
        alert('${msg}');
        location.href="${url}";
        </script>
    `
}
const timeModify = ( list) =>{
    list=list.map((data) =>{
        data.SAVE_DATE= data.SAVE_DATE.toLocaleString();
        return data;
    })
    return list;
}

module.exports={sessionCheck,getMessage,timeModify};