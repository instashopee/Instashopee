// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Size from "@/models/Size";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  let sizes = await Size.find()


  res.status(200).json({sizes})
}
export default connectDb(handler);