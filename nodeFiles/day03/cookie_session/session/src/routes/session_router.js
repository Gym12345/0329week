const express= require("express");
const ctrl=require("../../src/controller/session_ctrl");

const router=express.Router();

router.get("/", ctrl.index);
router.get("/set_session", ctrl.set_session);
router.get("/get_session", ctrl.get_session);

router.get("/del_session", ctrl.del_session);

router.get("/login", ctrl.login);

router.post("/login_check",ctrl.loginCheck)
router.get("/success",ctrl.success);
router.get("/logout",ctrl.logout);

module.exports = router;