import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/router";

import mongoose from "mongoose";
// import User from "@/models/User";

const index = () => {
  const router=useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {

    if(localStorage.getItem("myuser")){
      router.push('/admin')
    }
    else if(window.location=`${process.env.NEXT_PUBLIC_HOST}/admin`&&(!localStorage.getItem("myuser"))){
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
  const handleSubmit = async (e) => {
    if(email=="abhishekjain4548@gmail.com"){
    e.preventDefault();
    const data = {email, password };

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);

    setEmail("");
    setPassword("");

    if(response.success) {
      localStorage.setItem('myuser', JSON.stringify({token:response.token,email:response.email}))
    toast.success('Logged In Successfully', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(() => {
        
        router.push('/admin/main')
      }, 2500);
      
    }else{
      toast.error(response.error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });}}
        else{
          toast.error("You are not admin", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
    
    };
   
    
  return (
    <div>
      <ToastContainer
        position="top-center"
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
 
  {/* <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="/logo2.png" alt="Your Company"/>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login Admin Account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} class="space-y-6" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input value={email} onChange={handleChange} id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
                      
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <Link legacyBehavior href={'/forgot'}><a href="#" class="font-semibold text-red-600 hover:text-red-500">Forgot password?</a></Link>
            </div>
          </div>
          <div class="mt-2">
            <input value={password} onChange={handleChange} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
    
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Sign in</button>
        </div>
      </form>
  
      <p class="mt-10 text-center text-sm text-gray-500">
        Not a user?
        <Link legacyBehavior href={'/signup'}><a href="#" class="font-semibold leading-6 text-red-600 hover:text-red-500">Sign Up</a></Link>
      </p>
    </div>
  </div> */}
  
  <div className="text-3xl font-bold text-center my-5 text-decoration-line: underline">INSTASHOPEE ADMIN PANEL
    <div className="min-h-screen justify-center my-5">
      <style jsx global>{`
      footer {
        display: none;
      }
  
      `}</style>
      
    <div className="flex flex-col md:justify-start justify-center items-center py-5 top-0 sticky bg-white">
      <div className="nav ">
        <ul className="hidden text-sm md:flex items-center space-x-6 top-0">

         
            
          
          <Link legacyBehavior href={"/admin/add"}>
            <a>
              <li className="hover:text-red-800 text-3xl font-semibold p-2 border-4">Add Products</li>
            </a>
          </Link>
          <Link legacyBehavior href={"/admin/allproducts"}>
            <a>
              <li className="hover:text-red-800 text-3xl font-semibold p-2 border-4">View All Products</li>
            </a>
          </Link>
          {/* <Link legacyBehavior href={"/admin/imageuploaders"}>
            <a>
              <li className="hover:text-red-800">Image Uploader</li>
            </a>
          </Link> */}

          <Link legacyBehavior href={"/admin/allorders"}>
            <a>
              <li className="hover:text-red-800 text-3xl font-semibold p-2 border-4">All Orders</li>
            </a>
          </Link>


        </ul>
        
      </div>
      <br />
      <div className="space-x-6">

      {/* <Link legacyBehavior href={"/admin/delete"}>
            <a
               className="hover:text-red-800 text-3xl font-semibold p-2 border-4">Delete Product
            </a>
          </Link>
      <Link legacyBehavior href={"/admin/allorders"}>
            <a
               className="hover:text-red-800 text-3xl font-semibold p-2 border-4">Update Product
            </a>
          </Link> */}
      {/* <Link legacyBehavior href={"/admin/allorders"}>
            <a
               className="hover:text-red-800 text-3xl font-semibold p-2 border-4">Delete Product
            </a>
          </Link> */}
      </div>
    </div>
    </div>
    </div>
  </div>

  )
}

export default index