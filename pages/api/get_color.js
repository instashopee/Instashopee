// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Color from "@/models/Color";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  let colors = await Color.find()


  res.status(200).json({colors})
}
export default connectDb(handler);