// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Size from "@/models/Size";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
      let p = new Size({
        size: req.body.size
      });
      await p.save();
    res.status(200).json({ success: "success!" });
  } else {
    res.status(400).json({ error: "error! This method is not allowed." });
  }
  let size = await Size.find();
};
export default connectDb(handler);