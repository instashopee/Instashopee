// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    // for (let i = 0; i < req.body.length; i++) {
      let p = new Product({
        title: req.body.title,
        slug: req.body.slug,
        desc: req.body.desc,
        img: req.body.img,
        img1: req.body.img1,
        img2: req.body.img2,
        img3: req.body.img3,
        img4: req.body.img4,
        category: req.body.category,
        price: req.body.price,
        mrp: req.body.mrp,
        availableQty: req.body.availableQty,
        size: req.body.size,
        color: req.body.color,
      });
      await p.save();
    // }
    res.status(200).json({ success: "success!" });
  } else {
    res.status(400).json({ error: "error! This method is not allowed." });
  }
  let products = await Product.find();
};
export default connectDb(handler);