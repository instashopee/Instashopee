// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Color from "@/models/Color";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
      let p = new Color({
        color: req.body.color,

      });
      await p.save();
    res.status(200).json({ success: "success!" });
  } else {
    res.status(400).json({ error: "error! This method is not allowed." });
  }
  let color = await Color.find();
};
export default connectDb(handler);