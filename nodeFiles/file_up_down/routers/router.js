module.exports= (app) =>{
    const router= require("express").Router();
    router.get("/",(req,res) =>{
        const msg=`<h3> 기본페이지 입니다<h3>
            <a href="/file">file_index</a>
        `
        res.send(msg);
    })
    return router;
}