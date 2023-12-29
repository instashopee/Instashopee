import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");
import cors from 'micro-cors';

const handler = cors()(async(req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  
    // Handle preflight requests (OPTIONS method)
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
    //await connectDb();
    if (req.method == "POST") {
      const {name, email} = req.body;
      const u = new User({name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString()});
      await u.save();

      res.status(200).json({ success: "success!" });
    } else {
      res.status(400).json({ error: "error! This method is not allowed." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default connectDb(handler);