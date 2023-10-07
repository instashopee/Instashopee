import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/router";

import mongoose from "mongoose";
import Admin_sidebar from "@/components/Admin_sidebar";

const index = () => {
  const router=useRouter()
  const [orders, setOrders] = useState({})
  
  useEffect(() => {
    const fetchOrders=async()=>{
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
      fetchOrders()
  }

     
}, [])
const [products, setProducts] = useState({})
  
useEffect(() => {
  
  const fetchProducts=async()=>{
    let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({products}),
    });
  
    let res=await a.json()
    setProducts(res.products)
  }
  if(!localStorage.getItem("myuser")){
    router.push('/')
  }else{
    fetchProducts()
}

   
}, [])
const [users, setUsers] = useState({})
  
useEffect(() => {
  const fetchUsers=async()=>{
    let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/get_all_users`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({users}),
    });
  
    let res=await a.json()
    setUsers(res.users)
  }
  if(!localStorage.getItem("myuser")){
    router.push('/')
  }else{
    fetchUsers()
}

   
}, [])
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }

  
  }, []);

  return (
    <div className="fixed top-0 left-0 bg-white w-full h-screen z-40 overflow-y-auto mt-24">

    <ToastContainer
    position="top-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />


   <Admin_sidebar/>


<h1 className="text-3xl text-black text-center font-bold underline mt-6">WELCOME TO INSTASHOPEE ADMIN PANEL</h1>
<div className="flex m-4 mt-6 space-x-5 justify-center">

    <div className="rounded-lg p-5 shadow-lg w-auto cursor-pointer bg-red-100">
      <h2>TOTAL PRODUCTS(Including Size): {Object.values(products).length}</h2>
    </div>
    <div className="rounded-lg p-5 shadow-lg w-auto cursor-pointer bg-red-100">
      <h2>TOTAL ORDERS: {Object.values(orders).length}</h2>
    </div>
    <div className="rounded-lg p-5 shadow-lg w-auto cursor-pointer bg-red-100">
      <h2>TOTAL USERS: {Object.values(users).length}</h2>
    </div>
</div>


  
  </div>


  )
}

export default index