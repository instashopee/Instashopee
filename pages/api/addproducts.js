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
        // img3: req.body.img3,
        // img4: req.body.img4,
        category: req.body.category,
        sub_category: req.body.sub_category,
        price: req.body.price,
        mrp: req.body.mrp,
        availableQty: req.body.availableQty,
        size: req.body.size,
        // size2: req.body.size2,
        // size3: req.body.size3,
        // size4: req.body.size4,
        // size5: req.body.size5,
        // size6: req.body.size6,
        // size7: req.body.size7,
        // size8: req.body.size8,
        // size9: req.body.size9,
        // size10:req.body.size10,
        // size11:req.body.size11,
        // size12:req.body.size12,
        color: req.body.color,
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
  let products = await Product.find();
};
export default connectDb(handler);