// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Banner from "@/models/Banner";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  let banner = await Banner.find()


  res.status(200).json({banner})
}
export default connectDb(handler);