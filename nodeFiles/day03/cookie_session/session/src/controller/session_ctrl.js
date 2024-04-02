const index=(req,res) =>{
    res.render("index_session");
    
}

var name="김개똥1111";

const set_session=(req,res) =>{
    req.session.name="홍길동";  // 세션의 키는 name 이다
    req.session.age=20;
    res.render("set_session")
}

const get_session=(req,res) =>{
    const sessionValue={
        name:req.session.name,
        age:req.session.age
    }

    res.render("get_session",sessionValue);
}
const del_session=(req,res) =>{
   // delete req.session.name; // name  이라는 특정 세션 삭제
    req.session.destroy(); //모든 세션 삭제
    res.render("del_session");
}
const login=(req,res) =>{
    res.render("login",{username:req.session.username});
}

const scriptMsg=( sMsg, sUrl) =>{



    return `<script> alert("${sMsg}"); 
    location.href="${sUrl}";
    </script>`;
}
const loginCheck=(req,res) => {

    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body['pwd']);

    const DBId="aaa", DBPwd="aaa",DBNick="홍길동"
    if(DBId === req.body.id && DBPwd===req.body['pwd']) {
        req.session.username= DBId;
        req.session.nick=DBNick;
        res.redirect("success");
    }
    else{
        console.log("error")
        let msg=scriptMsg("로그인 실패","login")
        
        res.send(msg);
    }
     //else 써야함 안쓴다면 res 응답이 두개라 좀 이상함
    
}


const success = (req,res) =>{

    if(req.session.username ){  //세션 존재유무에 따라 
        res.render("success",{nick :req.session.nick});
    }
    else{
        
        let msg=scriptMsg("로그인 먼저하세요","login")

        res.send(msg);
    }
   
   
   
}
const logout = (req,res) =>{
    req.session.destroy( () =>{
        console.log("모든세션만료")
    } ); // 매개변수안에 콜백함수
    res.redirect("/session/login");
}   

module.exports = {index ,set_session ,get_session, del_session , login ,loginCheck, success , logout};