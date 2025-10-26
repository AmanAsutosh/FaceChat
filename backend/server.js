const express=require('express')
const cors=require('cors')
const jwt=require ('jsonwebtoken')
const verification=require('./routes/verify')
const PORT=8080

const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
  const tokenData=req.headers.authorization.split(' ')[1]
  const userdata=verification(tokenData)

  if(userdata){
    console.log("Yes")
  }else{
    console.log("No")
  }
})

app.listen(8080,()=>{
  console.log(`Listening at ${PORT}`)
})