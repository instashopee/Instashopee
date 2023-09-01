// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Banner from "@/models/Banner";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    // for (let i = 0; i < req.body.length; i++) {
      let p = new Banner({

        banner1: req.body.banner1,
        banner2: req.body.banner2,
        banner3: req.body.banner3,
        banner4: req.body.banner4,
      });
      await p.save();
    // }
    res.status(200).json({ success: "success!" });
  } else {
    res.status(400).json({ error: "error! This method is not allowed." });
  }
  let banner = await Banner.find();
};
export default connectDb(handler);