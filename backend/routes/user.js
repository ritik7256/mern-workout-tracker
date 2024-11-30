const express=require('express');

const router=express.Router();
//login
const {signupUser,loginuser}=require("../controller/userController")
router.post("/login",loginuser)


//signup
router.post("/signup",signupUser)

module.exports=router;
