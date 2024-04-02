const express=require("express") ; 

const router=express.Router();

const ctrl=require("../controller/test_controller");
// router.get("/",(request,response) => {
//     response.send("router")
// })

router.get("/", ctrl.index);  //컨트롤러와 연결
router.get("/login", ctrl.login);  //컨트롤러와 연결
router.get("/showList",ctrl.showList)
router.post("/loginCheck", ctrl.loginCheck);  //컨트롤러와 연결
router.get("/getInfo", ctrl.getInfo);  //컨트롤러와 연결

module.exports=router;