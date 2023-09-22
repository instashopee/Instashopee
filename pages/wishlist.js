import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { AiOutlineShoppingCart,AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle,AiOutlineSearch } from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md"
import {BsFillBagCheckFill} from "react-icons/bs"
import Head from "next/head";
const wishlist = ({wishlist,cart,addTowishlist,removeFromwishlist,clearwishlist,subTotalwishlist,addToCart}) => {
  return (
    <div>
    <Head>
    <title>Wishlist -  Instashopee</title>
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
     />
   </Head>
  <div class="min-h-screen bg-gray-100 pt-10">
    <h1 class="mb-10 text-center text-2xl font-bold">My Wishlist</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    
      <div class="rounded-lg md:w-2/3">
      
     {Object.keys(wishlist).map((k)=>{return <div key={k}>
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src={wishlist[k].img} alt="product-image" class="w-full h-72 rounded-lg sm:w-40 sm:h-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
            <div className="font-semibold text-xl">{wishlist[k].name}({wishlist[k].size}/{wishlist[k].variant})</div>
            <div class="flex flex-col mt-5">
                <p class="text-sm">Price - Rs.{wishlist[k].price}/-</p>
                
                <p class="text-sm">Delivery Charge - Rs.{wishlist[k].del_ch}/-</p>
              </div>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span onClick={()=>{removeFromwishlist(k,1,wishlist[k].price,wishlist[k].name,wishlist[k].size,wishlist[k].variant,wishlist[k].del_ch,wishlist[k].img)}} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <span className="mx-1">{wishlist[k].qty}</span>
                <span onClick={()=>{addTowishlist(k,1,wishlist[k].price,wishlist[k].name,wishlist[k].size,wishlist[k].variant,wishlist[k].del_ch,wishlist[k].img)}} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                <span class="hover:text-gray-700"><AiOutlineShoppingCart onClick={() => {
                    addToCart(k,1,wishlist[k].price,wishlist[k].name,wishlist[k].size,wishlist[k].variant,wishlist[k].del_ch,wishlist[k].img);
                  }} className="text-2xl cursor-pointer" />
                           </span>
              </div>
             
            </div>
          </div>
        </div>
        </div>})}
      </div>
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        {/* <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">$129.99</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Delivery Charge</p>
          <p class="text-gray-700">{cart[del_ch]}</p>
        </div> */}
        {Object.keys(wishlist).length==0&& <div className="font-semibold text-center text-2xl">YOUR WISHLIST IS EMPTY !!</div>}
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">Rs.{subTotalwishlist}/-</p>
            {/* <p class="text-sm text-gray-700">including VAT</p> */}
          </div>
        </div>
        <div className="flex flex-row space-x-2">

        <button disabled={Object.keys(wishlist).length===0} onClick={clearwishlist} class="disabled:bg-red-200  text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-md">Clear Wishlist</button></div>
      </div>
    </div>
  </div>

    </div>

  )
}

export default wishlist