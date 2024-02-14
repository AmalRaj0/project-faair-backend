const {users}=require("../Models/userSchema")
const { json }=require('express')
const jwt = require('jsonwebtoken')
exports.register=async(req,res)=>{
  const {username,email,password}=req.body
  try{
    const existinguser = await users.findOne({email})
    if(existinguser){
      return  res.status(401).json("user already exist")
    }else{
        const newuser=  await users({
            username,email,password,github:"",link:"",profile:""
        })
        await newuser.save()
      return res.status(200).json("user registered successfully")
    }
  }catch(error){
console.log ("server error",error.message);
  }
    console.log(`${username},${email},${password}`);
   // console.log(hello);
    res.status(200).json("Register request received")
}

exports.login=async(req,res)=>{
  const { email, password } = req.body;
  try{
  const user=await users.findOne({email,password}).maxTimeMS(20000);
  if(user){
const token =jwt.sign({userId:user._id},"superkey2024")
console.log(token);
  return   res.status(200).json({user,token})

  }else{
  return  res.status(401).json("can,t find the user")
}
}catch(error){
  console.log(error.message);
}
res.status(200).json("Register request received")
}