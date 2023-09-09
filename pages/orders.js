import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
const Orders = () => {

  const router=useRouter()
  const [orders, setOrders] = useState({})
  
  useEffect(() => {
    const fetchOrders=async()=>{
      let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token:JSON.parse(localStorage.getItem('myuser')).token}),
      });
    
      let res=await a.json()
      setOrders(res.orders)
    }
    if(!localStorage.getItem("myuser")){
      router.push('/')
    }else{
      fetchOrders()
  }

     
}, [])
return (
  <div className="min-h-screen">
    <Head>
        <title>Orders Details -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
    <h1 className="font-bold text-center text-3xl p-8">My Orders</h1>
    <div class="mx-auto max-w-10xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

      <div class="rounded-lg md:w-2/3">
                  {Object.values(orders).map((item)=>{
                    
              
                    return <div key={item._id} class="">
                      <div class="justify-between mb-6 rounded-lg bg-gray-100 p-6 shadow-md sm:flex sm:justify-start">
                 
                      <div class="px-6 py-4 font-bold underline hover:text-red-500 cursor-pointer">ORDER ID # {item.orderId}</div>
                      <div class="px-6 py-4 font-semibold">Name: {item.name}</div>
                      <div class="px-6 py-4 font-semibold">Email: {item.email}</div>
                      <div class="px-6 py-4 font-semibold">Total Amount To Pay: Rs.{item.amount}/-</div>
                      <Link legacyBehavior href={'/order?id='+item._id}><div class="px-6 py-4 bg-red-200 font-semibold rounded-lg cursor-pointer hover:text-red-500"><a>View Order Details</a></div></Link>
                </div>
                    </div>
                  })}
                    
                  
              </div>
              </div>
              </div>
           


  );
};



export default Orders;