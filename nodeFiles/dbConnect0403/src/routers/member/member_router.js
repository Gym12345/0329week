const router =require("express").Router();

const memberCtrl =require("../../controller/member/member_ctrl")

// router.get("/list",(req,res)=>{res.send("member list 연동")});
//연동 확인 후 ctrl로 연동
router.get("/list",memberCtrl.list)
 router.get("/register_form",memberCtrl.registerForm);
 router.post("/register",memberCtrl.register);

 router.get("/member_view/:id",memberCtrl.memberView01);//
 router.get("/member_delete/:id",memberCtrl.memberDelete);
 router.get("/member_modifyForm/:id",memberCtrl.memberModifyForm);

 router.post("/member_modify",memberCtrl.memberModify);


module.exports=router;
