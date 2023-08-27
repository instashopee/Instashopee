import Forgot from "@/models/Forgot"
import User from "@/models/User"
export default async function handler(req,res){
    if(req.body.sendMail){

    
    let token='wefgbvnjmkjhtgr3ert5yuhjgtfrdes'
    let forgot=new Forgot({
        email:req.body.email,
        token:token
    })
    let email=`Reset Your Password - <a href="https://instashopee.com/forgot?token=${token}">RESET PASSWORD</a> `}
    else{
        res.status(400).json({error:"error"})
    }
    res.status(200).json({success:true})
}