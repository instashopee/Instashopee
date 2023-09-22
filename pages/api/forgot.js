
import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
const nodemailer = require("nodemailer");

var CryptoJS = require("crypto-js");
import Forgot from "@/models/Forgot"
var jwt = require('jsonwebtoken');

export default async function handler(req,res){
    let token = jwt.sign({email: req.body.email}, process.env.JWT_SECRET, {expiresIn:"1h"});
   
    if(req.body.sendMail){

    let forgot=new Forgot({
        email:req.body.email,
        token:token
    })
    let email=`Reset Your Password - <a href="https://instashopeeonline.com/forgot?token=${token}">RESET PASSWORD</a> `

    try {
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'instashopeeonline@gmail.com',
                pass:'tiwh husu ilkx ovbe'
            }
        });
        const mailOptions={
            from:'instashopeeonline@gmail.com',
            to:req.body.email,
            subject:'RESET PASSWORD LINK',
            html:email
        }
        transporter.sendMail(mailOptions,(error,info)=> {
            if(error){
                // console.log('Error',error)
            }
            else{
                // console.log('Email sent '+info.response)
                res.status(201).json({staus:201,info})
            }
        })
    } catch (error) {
        res.status(201).json({staus:401,error})

    }
    res.status(200).json({success:true})

    


    }
    else{
      
        let user = await User.findOne({ "email": req.body.email })
        
                await User.findOneAndUpdate({email:user.email},{password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString()})
       
    
        
    }
    res.status(200).json({success:true})
}