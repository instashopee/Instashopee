import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
// import GoogleProvider from "next-auth/providers/google";


const handler = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

  // Handle preflight requests (OPTIONS method)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  try {
    if (req.method == "POST") {
      let user = await User.findOne({ "email": req.body.email })
      const bytes  = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
      let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

        if (user) {
            if (req.body.email == user.email && req.body.password == decryptedPass) {
              var token = jwt.sign({email: user.email, name: user.name}, process.env.JWT_SECRET, {expiresIn:"2d"});

             res.status(200).json({success: true, token,email:user.email});
            }
            else{
                res.status(200).json({ success: false, error: "Invalid email or password." });
            }   
        }
      else {
        res.status(200).json({ success: false, error: "No User Found!" });
      }
    } else {
        res.status(400).json({ error: "error! This method is not allowed." });
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
      }
};

export default connectDb(handler);