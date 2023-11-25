import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { AiOutlineShoppingCart,AiOutlineHeart,AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle,AiOutlineSearch } from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md"
import Router, { useRouter } from "next/router";
import {BsFillBagCheckFill} from "react-icons/bs"
import Head from "next/head";
const cart = ({cart,addToCart,removeFromCart,clearCart,subTotal,addTowishlist}) => {
  const router=useRouter()
  const a=()=>{}
  return (
    <div>
    <Head>
    <title>Cart -  Instashopee</title>
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
     />
   </Head>
  <div className="min-h-screen bg-gray-100 pt-10">
    <h1 className="mb-10 text-center text-2xl font-bold">My Shopping Cart</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    
      <div className="rounded-lg md:w-2/3">
      
     {Object.keys(cart).map((k)=>{return <div key={k}>
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src={cart[k].img} alt="product-image" className="w-full h-72 rounded-lg sm:w-40 sm:h-40" />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
            <div className="font-semibold text-xl">{cart[k].name}({cart[k].size}{cart[k].unit}/{cart[k].variant} color)</div>
            <div className="flex flex-col mt-5">
            <table className="table-fixed">

<tbody>
  <tr>
    <td>Price {cart[k].price}X{cart[k].mqty}</td>
  
    <td>Rs.{cart[k].price*cart[k].mqty}/-</td>
  </tr>
  <tr>
    <td>Delivery Charge</td>

   {cart[k].del_ch>0?<td>Rs.{cart[k].del_ch}/-</td>:<td>FREE</td>}
  </tr>
  <tr>
    <td>Total Amount</td>
  
    <td>Rs.{cart[k].del_ch + (cart[k].price * cart[k].mqty)}/-</td>
  </tr>
</tbody>
</table>
              </div>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].del_ch,cart[k].img,cart[k].unit,cart[k].mqty,cart[k].mqty2)}} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <span className="mx-1">{cart[k].mqty}</span>
                <span onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].del_ch,cart[k].img,cart[k].unit,cart[k].mqty,cart[k].mqty2)}} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                <span className="hover:text-gray-700"><AiOutlineHeart onClick={() => {
                    addTowishlist(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].del_ch,cart[k].img,cart[k].unit,cart[k].mqty,cart[k].mqty2);
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
        {Object.keys(cart).length==0&& <div className="font-semibold text-center text-2xl">YOUR CART IS EMPTY !!</div>}
        
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">Rs.{subTotal}/-</p>
            {/* <p className="text-sm text-gray-700">including VAT</p> */}
          </div>
        </div>
        <div className="flex flex-row space-x-2">
        <Link href={'/checkout'}><button disabled={Object.keys(cart).length===0} className="disabled:bg-red-200   text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-md">Check out</button></Link>
     
    
        <button disabled={Object.keys(cart).length===0} onClick={clearCart} className="disabled:bg-red-200  text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-md">Clear Cart</button></div>
      </div>
    </div>
  </div>

    </div>
  //   <div className={`h-screen p-10 bg-white z-10 backdrop-filter backdrop-blur-lg shadow-xl ring-1 ring-gray-900/5 }`}>
  //   <Head>
  //       <title>Cart -  Instashopee</title>
  //       <meta
  //         name="viewport"
  //         content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
  //       />
  //     </Head>
  //   <h2 className="text-4xl font-bold text-center">My Shopping Cart</h2>
  //   {/* <span className="absolute top-5 right-2 cursor-pointer text-2xl text-red-500"><AiFillCloseCircle/></span> */}
  //   <ol className="text-2xl list-decimal font-semibold">
  //     {Object.keys(cart).length==0&& <div className="my-20 font-semibold text-center text-2xl">YOUR CART IS EMPTY !!</div>}
  //     {Object.keys(cart).map((k)=>{return <li key={k}>
  //       <div className="item flex my-5">
  //       <div className="w-2/3 font-semibold text-2xl">{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
  //       <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].del_ch)}}className="cursor-pointer text-red-400"/><span className="mx-1">{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].del_ch)}}className="cursor-pointer text-red-400"/></div>
  //       </div>
  //     </li>})}
  //   </ol>
  //   <div className="font-bold mt-10 my-4 text-2xl">Subtotal: ₹{subTotal}</div>
  //   <div className="flex mt-4">

  //   <Link href={'/checkout'}><button disabled={Object.keys(cart).length===0} className="disabled:bg-red-200 flex mx-2 text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-xl"><BsFillBagCheckFill className="m-1"/>Checkout</button></Link>
  //   <button disabled={Object.keys(cart).length===0} onClick={clearCart} className="disabled:bg-red-200 flex mx-2 text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-xl"><BsFillBagCheckFill className="m-1"/>Clear Cart</button>
    
  //   </div>

  // </div>
  )
}

export default cart