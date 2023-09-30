import React, { useEffect, useState } from "react"
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer
} from "@mui/material"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardCard from "./BaseCard"
import { useRouter } from "next/router"
import Link from "next/link"
import Admin_sidebar from "@/components/Admin_sidebar";


const All_Order = () => {
  const router=useRouter()
  const [orders, setOrders] = useState({})
  
  useEffect(() => {
    const fetchUsers=async()=>{
      let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/get_all_orders`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({orders}),
      });
    
      let res=await a.json()
      setOrders(res.orders)
    }
    if(!localStorage.getItem("myuser")){
      router.push('/')
    }else{
      fetchUsers()
  }

     
}, [])
  return (
    <div className="h-screen overflow-y-auto">
      <Admin_sidebar/>
 
        <div className="text-black font-semibold text-3xl">All Orders</div>
     {Object.values(orders)==0&&<div className="text-3xl text-center">NO ORDERS TO SHOW</div>}
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
  

  )
}

export default All_Order

