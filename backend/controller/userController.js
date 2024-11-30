//login
require("dotenv").config();
const userModel=require("../models/userModel")
const jwt=require("jsonwebtoken");

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:"3d"})
}

const loginuser=async(req,res)=>{
   const {email,password}=req.body;
   try{
    const user=await userModel.login(email,password);
    const token=createToken(user._id);
     
    res.status(200).json({email,token})
   }catch(error){
    res.status(400).json({error:error.message})
   }
  
   

   
}
//signup

const signupUser=async(req,res)=>{
   const {email,password}=req.body;
   try{
      const user=await userModel.signUp(email,password);
      const token=createToken(user._id);

      res.status(200).json({email,token})
    
   }catch(error){
      res.status(400).json({error:error.message})
   }
}

module.exports={
    loginuser,
    signupUser
}