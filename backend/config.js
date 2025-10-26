let jwt=require('jsonwebtoken')
const secretKey="AmaNkAr"
function tokenGet(){
   const payload={
    id:user.id,
    name:user.name,
    email:user.email
   }
   return jwt.sign(payload,secretKey,{expiresIn:'10s'})
}
const user ={id:1234,name:"Aman Asutosh Kar", email:"karamanashutosh@gmail.com"}
let token=tokenGet(user)

console.log(token)


