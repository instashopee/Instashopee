import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { AiOutlineShoppingCart,AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle,AiOutlineSearch } from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md"
import {BsFillBagCheckFill} from "react-icons/bs"

const cart = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {
  return (

    <div className={`h-screen p-10 bg-white z-10 backdrop-filter backdrop-blur-lg shadow-xl ring-1 ring-gray-900/5 }`}>
    <h2 className="text-4xl font-bold text-center">My Shopping Cart</h2>
    {/* <span className="absolute top-5 right-2 cursor-pointer text-2xl text-red-500"><AiFillCloseCircle/></span> */}
    <ol className="text-2xl list-decimal font-semibold">
      {Object.keys(cart).length==0&& <div className="my-20 font-semibold text-center text-2xl">YOUR CART IS EMPTY !!</div>}
      {Object.keys(cart).map((k)=>{return <li key={k}>
        <div className="item flex my-5">
        <div className="w-2/3 font-semibold text-2xl">{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
        <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}className="cursor-pointer text-red-400"/><span className="mx-1">{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}className="cursor-pointer text-red-400"/></div>
        </div>
      </li>})}
    </ol>
    <div className="font-bold mt-10 my-4 text-2xl">Subtotal: ₹{subTotal}</div>
    <div className="flex mt-4">

    <Link href={'/checkout'}><button disabled={Object.keys(cart).length===0} className="disabled:bg-red-200 flex mx-2 text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-xl"><BsFillBagCheckFill className="m-1"/>Checkout</button></Link>
    <button disabled={Object.keys(cart).length===0} onClick={clearCart} className="disabled:bg-red-200 flex mx-2 text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-xl"><BsFillBagCheckFill className="m-1"/>Clear Cart</button>
    
    </div>

  </div>
  )
}

export default cart