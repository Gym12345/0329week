module.exports = (app)=>{
    const memberRouter = require("./member/member_router");
    app.use("/member", memberRouter );

    const router = require("express").Router();
    router.get("/", (req, res)=>{
        //res.send("connect test");
        if(req.session.username){
            res.cookie("isLogin",true);
        }
        res.render("index",{username : req.session.username});
    })
    const boardRouter=require("./board/board_router.js")
    app.use("/board",boardRouter)
    return router;
}

