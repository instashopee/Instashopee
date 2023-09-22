import Link from 'next/link'
import React, { useEffect } from 'react'
import Head from "next/head";
import Product from "@/models/Product";
import mongoose from 'mongoose'

import { useState } from "react";

 
 
var input='ms drawer channel'
const search = ({products}) => {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message);
  };
  
  module.exports={updated}
  
  return (

    <div className='min-h-screen'>
    <form>   
    <Head>
        <title>Search -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      {/* <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <h2>Message: {message}</h2>

      <h2>Updated: {updated}</h2> */}

      {/* <button onClick={handleClick}>Update</button> */}
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="userInputt" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Any Products here..." required/>
        
       {<Link href={'/search_product'}><button  type="submit" class="text-black absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button></Link>}
    </div>


</form>
        <div className='border p-3 sm:m-10'>
    <section className="text-gray-600 body-font">
<div className="container mx-auto 2xl:justify-start lg:justify-start md:justify-start justify-center">
  <div className="flex flex-row ">
  {Object.keys(products).length==0 && <p className='p-3 text-center'>NO PRODUCT FOUND FOR YOUR SEARCH !!</p>}
  {Object.keys(products).map((item)=>{
// _id inside key of link
return <Link key={products[item].id} passHref={true} legacyBehavior href={`product/${products[item].slug}`}>
<div className="2xl:w-1/4 2xl:h-[22rem] lg:w-1/5 lg:h-96 md:w-1/2 md:h-1/2 p-4 w-36 h-56 cursor-pointer shadow-lg m-5 productCard transition-all">
  <a className="block relative rounded overflow-hidden">
    <img alt="" className="2xl:w-40 2xl:h-32 lg:w-40 lg:h-32 md:w-40 md:h-32 w-12 h-12 m-auto block " src={products[item].img}/>
  </a>
  <div className="mt-4 text-left">
    <h3 className="2xl:text-sm lg:text-sm md:text-sm text-xs text-gray-500 title-font mb-1 textPart">{products[item].category}</h3>
    <h2 className="title-font 2xl:text-lg lg:text-lg md:text-lg text-xs text-gray-900 title-font font-medium textPart">{products[item].title}</h2>
    <div className='flex'>
      <p className="title-font 2xl:text-lg lg:text-lg md:text-lg text-xs mt-1 textPart">₹{products[item].price}/-</p>
    <span className="font-small title-font 2xl:text-lg lg:text-lg md:text-lg text-xs ml-2 mt-1 text-green-600 line-through textPart">
              ₹MRP {products[item].mrp}/-
              </span>
              <span className="title-font 2xl:text-lg lg:text-lg md:text-lg text-xs font-small text-md ml-2 mt-1 text-orange-600 textPart">
              (-{Math.floor(((products[item].mrp-products[item].price)/products[item].mrp)*100)}% off){/* (-70% Off) */}
              </span></div>
    <div className="mt-1 title-font 2xl:text-lg lg:text-lg md:text-lg text-xs textPart">
    {products[item].size.includes("4") && (<span className="border border-gray-300 px-1 mx-1">4</span>)}
    {products[item].size.includes("6") && (<span className="border border-gray-300 px-1 mx-1">6</span>)}
    {products[item].size.includes("8") && (<span className="border border-gray-300 px-1 mx-1">8</span>)}
    {products[item].size.includes("10") && (<span className="border border-gray-300 px-1 mx-1">10</span>)}
    {products[item].size.includes("12") && (<span className="border border-gray-300 px-1 mx-1">12</span>)}
    {products[item].size.includes("14") && (<span className="border border-gray-300 px-1 mx-1">14</span>)}
    {products[item].size.includes("16") && (<span className="border border-gray-300 px-1 mx-1">16</span>)}
    {products[item].size.includes("18") && (<span className="border border-gray-300 px-1 mx-1">18</span>)}
    {products[item].size.includes("24") && (<span className="border border-gray-300 px-1 mx-1">24</span>)}
    {products[item].size.includes("30") && (<span className="border border-gray-300 px-1 mx-1">30</span>)}
    {products[item].size.includes("36") && (<span className="border border-gray-300 px-1 mx-1">36</span>)}
    {products[item].size.includes("48") && (<span className="border border-gray-300 px-1 mx-1">48</span>)}
    </div>

    
    <div className="mt-1 text-gray-600 title-font 2xl:text-lg lg:text-lg md:text-lg text-xs space-x-1 textPart">
    {products[item].color.includes("zinc") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#BAC4C8] hover:bg-[#BAC4C8] w-6 h-6 focus:outline-none"></button>)}
    {products[item].color.includes("rose_gold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none"></button>)}
    {products[item].color.includes("black") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-black hover:bg-black w-6 h-6 focus:outline-none"></button>)}
    {products[item].color.includes("white") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-white hover:bg-white w-6 h-6 focus:outline-none"></button>)}
    {products[item].color.includes("gold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#FFD700] hover:bg-[#FFD700] w-6 h-6 focus:outline-none"></button>)}
    {products[item].color.includes("aluminium") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#848789] hover:bg-[#848789] w-6 h-6 focus:outline-none"></button>)}
    {products[item].color.includes("wenge") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#645452] hover:bg-[#645452] w-6 h-6 focus:outline-none"></button>)}
    {products[item].color.includes("ss") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#b4bdc7] hover:bg-[#b4bdc7] w-6 h-6 focus:outline-none"></button>)}
            
    </div>

  </div>
</div>
</Link>})}




    
  </div>
</div>
</section>
  </div>
  </div>

  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readystate){
    await mongoose.connect(process.env.MONGO_URI)
}

  let products = await Product.find({sub_category:input})
  let hinges = {}
  for(let item of products){
    if(item.title in hinges){
        if(!hinges[item.title].color.includes(item.color) && item.availableQty > 0){
          hinges[item.title].color.push(item.color)
        }
        if(!hinges[item.title].size.includes(item.size) && item.availableQty > 0){
          hinges[item.title].size.push(item.size)
        }
    }

    else{
      hinges[item.title] = JSON.parse(JSON.stringify(item))
      if(item.availableQty >0){
            hinges[item.title].color = [item.color]
            hinges[item.title].size = [item.size]
          }else{
            hinges[item.title].color = []
            hinges[item.title].size = []
          }
    }
  }

  return{
    props:{products:JSON.parse(JSON.stringify(hinges))},
  }
  }
export default search