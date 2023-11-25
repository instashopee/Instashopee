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
  <div className="min-h-screen bg-gray-100 pt-10">
    <h1 className="mb-10 text-center text-2xl font-bold">My Wishlist</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    
      <div className="rounded-lg md:w-2/3">
      
     {Object.keys(wishlist).map((k)=>{return <div key={k}>
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src={wishlist[k].img} alt="product-image" className="w-full h-72 rounded-lg sm:w-40 sm:h-40" />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
            <div className="font-semibold text-xl">{wishlist[k].name}({wishlist[k].size}{wishlist[k].unit}/{wishlist[k].variant} color)</div>
            <div className="flex flex-col mt-5">
            <table className="table-fixed">

<tbody>
  <tr>
  <td>Price {wishlist[k].price}X{wishlist[k].mqty}</td>
  
  <td>Rs.{wishlist[k].price*wishlist[k].mqty}/-</td>
  </tr>
  <tr>
    <td>Delivery Charge</td>

    {wishlist[k].del_ch>0?<td>Rs.{wishlist[k].del_ch}/-</td>:<td>FREE</td>}
  </tr>
  <tr>
    <td>Total Amount</td>
  
    <td>Rs.{wishlist[k].del_ch + (wishlist[k].price * wishlist[k].mqty)}/-</td>
  </tr>
</tbody>
</table>
              </div>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span onClick={()=>{removeFromwishlist(k,1,wishlist[k].price,wishlist[k].name,wishlist[k].size,wishlist[k].variant,wishlist[k].del_ch,wishlist[k].img,wishlist[k].unit,wishlist[k].mqty,wishlist[k].mqty2)}} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <span className="mx-1">{wishlist[k].mqty}</span>
                <span onClick={()=>{addTowishlist(k,1,wishlist[k].price,wishlist[k].name,wishlist[k].size,wishlist[k].variant,wishlist[k].del_ch,wishlist[k].img,wishlist[k].unit,wishlist[k].mqty,wishlist[k].mqty2)}} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                <span className="hover:text-gray-700"><AiOutlineShoppingCart onClick={() => {
                    addToCart(k,1,wishlist[k].price,wishlist[k].name,wishlist[k].size,wishlist[k].variant,wishlist[k].del_ch,wishlist[k].img,wishlist[k].unit,wishlist[k].mqty,wishlist[k].mqty2);
                  }} className="text-2xl cursor-pointer" />
                           </span>
              </div>
             
            </div>
          </div>
        </div>
        </div>})}
      </div>
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        {/* <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Delivery Charge</p>
          <p className="text-gray-700">{cart[del_ch]}</p>
        </div> */}
        {Object.keys(wishlist).length==0&& <div className="font-semibold text-center text-2xl">YOUR WISHLIST IS EMPTY !!</div>}
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">Rs.{subTotalwishlist}/-</p>
            {/* <p className="text-sm text-gray-700">including VAT</p> */}
          </div>
        </div>
        <div className="flex flex-row space-x-2">

        <button disabled={Object.keys(wishlist).length===0} onClick={clearwishlist} className="disabled:bg-red-200  text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-md">Clear Wishlist</button></div>
      </div>
    </div>
  </div>

    </div>

  )
}

export default wishlist