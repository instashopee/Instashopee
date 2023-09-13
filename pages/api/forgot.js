// import Forgot from "@/models/Forgot"
// import User from "@/models/User"
// import jsonwebtoken from "jsonwebtoken";
// import { useRouter } from "next/router";
// const router = useRouter();
// var CryptoJS = require("crypto-js");
// export default async function handler(req,res){
//     if(req.body.sendMail){

//     let token='wefgbvnjjmkjhtgr3ert5yuhsdfgjgtfrdes'
//     let forgot=new Forgot({
//         email:req.body.email,
//         token:token
//     })
//     let email=`Reset Your Password - <a href="https://instashopee.com/forgot?token=${token}">RESET PASSWORD</a> `}
//     else{
//         // if(req.method =="POST"){
         
            
//         //     if( req.body.password=== req.body.cpassword){
    
//         //         await User.findOneAndUpdate({email:router.query.email},{password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString()})
               
                
//         //     }
            
//         // }
//     }
//     res.status(200).json({success:true})
// }
import Forgot from "@/models/Forgot"
import User from "@/models/User"
export default async function handler(req,res){
    if(req.body.sendMail){

    
    let token='wefgbvnjmkjhtgr3ert5yuhjgtfrdecs'
    let forgot=new Forgot({
        email:req.body.email,
        token:token
    })
    let email=`Reset Your Password - <a href="https://instashopee.com/forgot?token=${token}">RESET PASSWORD</a> `}
    else{
        
    }
    res.status(200).json({success:true})
}