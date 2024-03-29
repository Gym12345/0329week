const express=require("express") ; 

const router=express.Router();

const ctrl=require("../controller/test_controller");
// router.get("/",(request,response) => {
//     response.send("router")
// })

router.get("/", ctrl.index);  //컨트롤러와 연결
router.get("/test1", ctrl.test1);  //컨트롤러와 연결
router.get("/test2", ctrl.test2);  //컨트롤러와 연결

module.exports=router;