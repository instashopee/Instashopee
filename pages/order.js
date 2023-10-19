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
    <section className="text-gray-600 body-font overflow-hidden min-h-screen">
      <Head>
        <title>My Orders -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    
      <div class="rounded-lg md:w-2/3">
        <h1 className="font-bold mx-5 my-5 text-2xl text-black">View Order Details</h1>
        <div className="border-2 justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <div className="flex flex-col">
            <div className="text-black font-semibold">ORDER DATE:{" "}
              <span className=" text-black">
                {date &&
                  date.toLocaleString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              </span></div>
            <div className="text-black font-semibold">ORDER ID: #{order.orderId}</div>
            <div className="text-black font-semibold">ORDER TOTAL: Rs.{order.amount}/-</div>
            <div className="text-black font-semibold">ADDRESS: {order.address}/-</div>
            <div className="text-black font-semibold">PINCODE: {order.pincode}/-</div>
            <div className="text-black font-semibold">PHONE: {order.phone}/-</div>
            <div className="text-green-500 font-semibold">YOUR PAYMENT STATUS: {order.status}</div>
            <div className="text-red-500 font-semibold">YOUR DELIVERY STATUS: {order.deliveryStatus}</div>
        </div>
        </div>
        <div className="text-black font-semibold">YOUR ORDERED PRODUCTS DETAILS :-</div>
        {Object.keys(products).map((key) => {
              return (
                <div key={key} className="border-2 justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                 <img src={products[key].img} alt="product-image" class="w-full h-72 rounded-lg sm:w-40 sm:h-40" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
            <div className="w-2/3 font-semibold text-2xl">{products[key].name}({products[key].size}/{products[key].variant})</div>
            <div class="flex flex-col mt-5">
                 <p class="text-sm">Price - Rs.{products[key].price}/-</p>
                 <p class="text-sm">Qty - {products[key].qty}</p>
                
                {/*<p class="text-sm">Delivery Charge - Rs.{cart[k].del_ch}/-</p> */}
              </div>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                {/* <span onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].del_ch,cart[k].img)}} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <span className="mx-1">{cart[k].qty}</span>
                <span onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].del_ch,cart[k].img)}} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                <span class="hover:text-gray-700"><AiOutlineHeart onClick={() => {
                    addTowishlist(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].del_ch,cart[k].img);
                  }} className="text-2xl cursor-pointer" />
                           </span> */}

              </div>
            </div>
              
          </div>
                </div>
              );
            })}
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
