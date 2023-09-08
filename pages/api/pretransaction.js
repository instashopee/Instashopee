const https = require("https");
import Order from "@/models/Order";
import connectDb from "@/middleware/mongoose";
const PaytmChecksum = require("paytmchecksum");
import Product from "@/models/Product";
import cart from "../cart";
import pincodes from "../../pincodes.json";
// export default async function handler(req, res) {
const handler = async (req, res) => {
  if (req.method == "POST") {
    if (!Object.keys(pincodes).includes(req.body.pincode)) {
      res
        .status(200)
        .json({
          success: false,
          error: "This Pincode is not serviceable try different pincode!",
          cartClear:false
        });
      return;
    }

    let product,
      sumTotal = 0;
    let cart = req.body.cart;
    if (req.body.subTotal <= 0) {
      res.status(200).json({
          success: false,
          error: "Cart Empty! Please build your cart and Try Again !",
          cartClear:false
        });
      return;
    }
    for (let item in cart) {
      sumTotal += cart[item].price * cart[item].qty;
      product = await Product.findOne({ slug: item });
      if (product.availableQty < cart[item].qty) {
        res
          .status(200)
          .json({
            success: false,
            error:
              "Some Items In Your Cart Went Out Of Stock. Please Try Again !",
              cartClear:true
          });
      }
      if (product.price != cart[item].price) {
        res
          .status(200)
          .json({
            success: false,
            error:
              "The Price of some items in your cart have changed. Please add items in cart again or try making payment again.",
              cartClear:true
          });
        return;
      }
    }
    // if (sumTotal !== req.body.subTotal) {
    //   res
    //     .status(200)
    //     .json({
    //       success: false,
    //       error:
    //         "The Price of some items in your cart have changed. Please add items in cart again or try making payment again.",
    //         cartClear:true
    //       });
    //   return;
    // }
    if (req.body.phone.length !== 10 || !Number.isInteger(Number(req.body.phone))) {
      res
        .status(200)
        .json({
          success: false,
          error: "Please Enter Correct 10 Digit Phone Number",
          cartClear:false
        });
      return;
    }
    if (req.body.pincode.length !== 6 || !Number.isInteger(Number(req.body.pincode))) {
      res
        .status(200)
        .json({
          success: false,
          error: "Please Enter Correct 6 Digit Pincode",
          cartClear:false
        });
      return;
    }
    // let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    // let pinJson = await pins.json();
    let order = new Order({
      email: req.body.email,
      name: req.body.name,
      orderId: req.body.oid,
      address: req.body.address,
      // city: pinJson[0],
      // state: pinJson[1],
      pincode: req.body.pincode,
      phone: req.body.phone,
      amount: req.body.subTotal,
      products: req.body.cart,
    });
    await order.save();

    var paytmParams = {};

    paytmParams.body = {
      requestType: "Payment",
      mid: process.env.NEXT_PUBLIC_PAYTM_MID,
      websiteName: "INSTASHOPEE",
      orderId: req.body.oid,
      callbackUrl: `${process.env.NEXT_PUBLIC_HOST}/api/posttransaction`,
      txnAmount: {
        value: req.body.subTotal,
        currency: "INR",
      },
      userInfo: {
        custId: req.body.email,
      },
    };

    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      process.env.PAYTM_MKEY
    );
    paytmParams.head = {
      signature: checksum,
    };

    var post_data = JSON.stringify(paytmParams);
    const requestAsync = async () => {
      return new Promise((resolve, reject) => {
        var options = {
          /* for Staging */
          // hostname: "securegw-stage.paytm.in",
          /* for Production */
          hostname: "securegw.paytm.in",
          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.oid}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });
          post_res.on("end", function () {
            //   console.log("Response: ", response);
            let ress = JSON.parse(response).body;
            ress.success = true;
            res.cartClear=false
            resolve(ress);
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
    };
    let myr = await requestAsync();
    res.status(200).json(myr);
  }
};

export default connectDb(handler);
