const express=require("express");
const ctrl=require("../controller/cookie_ctrl");


const router=express.Router();

router.get("/",ctrl.index);
router.get("/popup",ctrl.popup);
router.get("/cookie02",ctrl.cookie02); // 하루동안 열지 않도록 쿠키 구현
router.get("/popup02",ctrl.popup02);
router.get("/makeCookie",ctrl.makeCookie);

router.get("/cart", ctrl.cart);

router.get("/save/:goods" ,ctrl.save);
router.get("/viewList" ,ctrl.viewList);

module.exports=router;

