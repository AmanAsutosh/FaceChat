const express=require('express')
const jwt=require ('jsonwebtoken')
const secretKey="AmaNkAr"
// get the token from frontend

const verification=(token)=>{
    try{
    const decoded=jwt.verify(token,secretKey)
    return decoded
    }catch(err){
      console.error("Invalid token")
      return null;
    }
}
module.exports=verification()