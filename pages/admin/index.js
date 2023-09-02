import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/router";

import mongoose from "mongoose";
import Admin_sidebar from "@/components/Admin_sidebar";



const index = () => {
  const router=useRouter()
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let email='abhishekjain4548@gmail.com'
  useEffect(() => {

    if(email=="abhishekjain4548@gmail.com"){
      router.push('/admin')
    }
    else{
      router.push(`${process.env.NEXT_PUBLIC_HOST}`)
    }


  
 
  }, [])
  

  const handleChange = (e) => {
     if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  // const handleSubmit = async (e) => {
  //   if(email=="abhishekjain4548@gmail.com"){
  //   e.preventDefault();
  //   const data = {email, password };

  //   let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   let response = await res.json();
  //   console.log(response);

  //   setEmail("");
  //   setPassword("");

  //   if(response.success) {
  //     localStorage.setItem('myuser', JSON.stringify({token:response.token,email:response.email}))
  //   toast.success('Logged In Successfully', {
  //     position: "top-center",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     });
  //     setTimeout(() => {
        
  //       router.push('/admin/main')
  //     }, 2500);
      
  //   }else{
  //     toast.error(response.error, {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       });}}
  //       else{
  //         toast.error("You are not admin", {
  //           position: "top-center",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //           });
  //       }
    
  //   };
   
    
  return (
    <div className="fixed top-0 left-0 bg-white w-full h-screen z-40 overflow-y-auto">

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


<h1 className="text-2xl text-center font-bold">INSTASHOPEE ADMIN PANEL</h1>
  
  </div>


  )
}

export default index