 const express=require("express");
 const {User,Todo}=require("../models/user.models");

 const router=express.Router();

 router.get("",async(req,res)=>{
  try{const user=await User.find().lean().exec()
    return res.status(200).send({user:user})
}catch(err){
 return  res.status(500).send({message:err.message})
    }
})
router.post("",async(req,res)=>{
    try{
        const user=await User.create(req.body)
        return res.status(200).send(user)
    }catch(err){
     return res.status(500).send({err})
    }
})

module.exports=router