 //이전
// const router =require("express").Router();
// module.exports=router
//위의 방식이 아래와 같이 바뀌는 것

module.exports=(app)=>{
    //app을 받아와서 사용 {}안에서 사용
    const router =require("express").Router();
    router.get("/",(req,res)=>{
        res.render("index")
    })
    
    //연결을 위해 라우터로 이동시켜야 된다.
    const memberRouter=require("./member/member_router")
    app.use("/member",memberRouter);

    


    return router;
}