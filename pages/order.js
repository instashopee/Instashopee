import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Order from "@/models/Order";
import mongoose from "mongoose";
import Head from "next/head";
const MyOrder = ({ order, clearCart }) => {
  const products = order.products;
  const [date, setDate] = useState();
  const router = useRouter();
  useEffect(() => {
    const d = new Date(order.createdAt);
    setDate(d);

    if (router.query.clearCart == 1) {
      clearCart();
    }
  }, []);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <Head>
        <title>My Orders -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full  lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              INSTASHOPEE
            </h2>
            {/* <span className="mb-2 mt-2 font-medium text-lg text-blue-800">
                SHARE OTP ON DELIVERY TO COMPLETE ORDER: {order.otp}
              </span> */}
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id: #{order.orderId}
            </h1>
            <p className="leading-relaxed mb-4">
              Your Order Has Been Placed Successfully !!.{" "}
            </p>
            <p>
              Your Payment Status is:{" "}
              <span className="font-semibold text-green-600 text-lg">
                {order.status}
              </span>
            </p>
            <p className="leading-relaxed">
              Your Order was placed on:{" "}
              <span className="font-semibold text-red-600 text-lg">
                {date &&
                  date.toLocaleString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              </span>
            </p>
            
                  <p className="leading-relaxed mb-4 font-bold">
                  YOUR ORDER IS {order.deliveryStatus}
                  </p>

            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 py-2 text-lg px-1">
                Item Description
              </a>
              <a className="flex-grow  text-indigo-500 py-2 text-lg px-1">
                Quantity
              </a>
              <a className="flex-grow text-indigo-500 py-2 text-lg px-1">
                Price
              </a>
              {/* <a className="flex-grow text-indigo-500 py-2 text-lg px-1">
                Estimated Delivery Time
              </a> */}
            </div>

            {Object.keys(products).map((key) => {
              return (
                <div key={key} className="flex border-t border-gray-200 py-3">
                  <span className="text-gray-500">
                    {products[key].name}
                    <br />
                    ({products[key].size}/
                    {products[key].variant})
                  </span>
                  <span className="m-auto text-gray-900">
                    {products[key].qty}
                  </span>
                  <span className="m-auto text-gray-900">
                  ₹{products[key].price} X {products[key].qty} = ₹
                    {products[key].price * products[key].qty}
                  </span>
                  {/* <span className="m-auto float-left text-gray-900">
                  {products[key].edt}
                  </span> */}
                 
                </div>
              );
            })}

            <div className="flex my-8">
              <span className="title-font font-medium text-2xl text-gray-900">
                Subtotal: ₹{order.amount}
              </span>
              
              {/* <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Track Order
              </button> */}
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://cdni.iconscout.com/illustration/premium/thumb/order-placed-4283423-3581435.png"
          />
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readystate) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let order = await Order.findById(context.query.id);

  return {
    props: {
      order: JSON.parse(JSON.stringify(order)),
    }, //
  };
}

export default MyOrder;
