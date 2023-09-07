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
    <div className="container mx-auto">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                      <th scope="col" class="px-6 py-4">
                        #Order Id
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Amount
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  {Object.values(orders).map((item)=>{
                    
                    return <tr key={item._id} class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
                    
                      <td class="whitespace-nowrap px-6 py-4 font-medium">{item.orderId}</td>
                      <td class="whitespace-nowrap px-6 py-4">{item.email}</td>
                      <td class="whitespace-nowrap px-6 py-4">{item.amount}</td>
                      <td class="whitespace-nowrap px-6 py-4"><Link legacyBehavior href={'/order?id='+item._id}><a>Click Here To View Details</a></Link></td>
                    </tr>
                  })}
                    
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Orders;