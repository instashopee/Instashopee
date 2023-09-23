import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/router";

import mongoose from "mongoose";
import Admin_sidebar from "@/components/Admin_sidebar";

const index = () => {
  const router=useRouter()
 
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }

  
  }, []);

  return (
    <div className="fixed top-0 left-0 bg-white w-full h-screen z-40 overflow-y-auto mt-16">

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
      <h2>TOTAL PRODUCTS:</h2>
    </div>
    <div className="rounded-lg p-5 shadow-lg w-auto cursor-pointer bg-red-100">
      <h2>TOTAL ORDERS:</h2>
    </div>
    <div className="rounded-lg p-5 shadow-lg w-auto cursor-pointer bg-red-100">
      <h2>TOTAL USERS:</h2>
    </div>
</div>


  
  </div>


  )
}

export default index