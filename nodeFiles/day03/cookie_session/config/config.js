const cookieConfig = {
    httpOnly: true,
    maxAge: 5000,
    //signed:true   //암호화
}

const sessionConfig = {
    secret: " 암호화 키",
    resave:false,
    saveUninitialized:true, //내용이 수정될때만 변경하겟다
    //cookie: {maxAge:5000} //기본은 30분
}


module.exports={cookieConfig, sessionConfig}