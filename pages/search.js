import Link from 'next/link'
import React, { useEffect } from 'react'
import Head from "next/head";
import Product from "@/models/Product";
import mongoose from 'mongoose'

import { useState } from "react";
import { useRouter } from 'next/router';

 
 
const search = ({products}) => {
  const [message, setMessage] = useState('');
  const router = useRouter();
  const [search, setsearch] = useState("");
  const handleChanged = (e) => {
    if (e.target.name == "search") {
      setsearch(e.target.value);}}
  const [updated, setUpdated] = useState(message);
  const submit=()=>{
    router.push(`${process.env.NEXT_PUBLIC_HOST}/search?title=${search}`)
    console.log(`${search}`)
  }
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
    <Head>
        <title>Search -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>

    {/* <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
         
        </div>
        <div className="mx-24 mb-4">
          
             <input
               onChange={handleChanged}
               value={search}
               type="search"
               placeholder='YOU CAN SEARCH HERE ALSO...'
               id="search"
               name="search"
               className="w-full mt-6 bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>        
       {<button  type="submit" onClick={submit} className="text-black absolute right-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>}
    </div> */}



<section className="text-gray-600 body-font ">

<div className="container py-3 mx-auto  ">
  <div className="flex flex-wrap justify-center">
   
    
  {Object.keys(products).length==0 && <p>NO PRODUCTS FOUND FOR YOUR SEARCH!!</p>}
  {Object.keys(products).map((item)=>{
// _id inside key of link
return <Link key={products[item].id} passHref={true} legacyBehavior href={`product/${products[item].slug}`}>
<div className="lg:w-[20rem] md:w-1/2 p-4 w-1/2 sm:h-[30rem] h-[28rem] sm:m-2 cursor-pointer shadow-lg  productCard transition-all">
   <div className='z-50 textPart'><span className="rounded-md bg-red-500 p-1 text-sm text-white ">{Math.floor(((products[item].price-products[item].mrp)/products[item].mrp)*100)}% Off</span></div>
  <div className="block relative rounded textPart mt-1">
    <img alt="Instashopee" className="w-56 sm:h-64 h-52 m-auto block" src={products[item].img}/>
  </div>
  <div className="mt-2 text-center md:text-left">
    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 textPart">{products[item].category}</h3>
    <h2 className="text-gray-900 title-font md:text-lg font-medium textPart">{products[item].title}</h2>
    <div className='flex'>
    <span className="text-md mr-2 text-gray-400 line-through textPart">
      
    ₹{products[item].mrp}/-
              </span>
      <span className="textPart md:text-lg text-green-600 font-semibold">₹{products[item].price}/-</span>
             
              </div>
              <div className="mt-1 textPart py-2">
      {products[item].size.includes("0") && (<span className="border border-gray-300 px-1 mx-1">0</span>)}
      {products[item].size.includes("1") && (<span className="border border-gray-300 px-1 mx-1">1</span>)}
      {products[item].size.includes("2") && (<span className="border border-gray-300 px-1 mx-1">2</span>)}
      {products[item].size.includes("3") && (<span className="border border-gray-300 px-1 mx-1">3</span>)}
      {products[item].size.includes("4") && (<span className="border border-gray-300 px-1 mx-1">4</span>)}
      {products[item].size.includes("5") && (<span className="border border-gray-300 px-1 mx-1">5</span>)}
      {products[item].size.includes("6") && (<span className="border border-gray-300 px-1 mx-1">6</span>)}
      {products[item].size.includes("7") && (<span className="border border-gray-300 px-1 mx-1">7</span>)}
      {products[item].size.includes("8") && (<span className="border border-gray-300 px-1 mx-1">8</span>)}
      {products[item].size.includes("9") && (<span className="border border-gray-300 px-1 mx-1">9</span>)}
      {products[item].size.includes("10") && (<span className="border border-gray-300 px-1 mx-1">10</span>)}
      {products[item].size.includes("12") && (<span className="border border-gray-300 px-1 mx-1">12</span>)}
      {products[item].size.includes("14") && (<span className="border border-gray-300 px-1 mx-1">14</span>)}
      {products[item].size.includes("15") && (<span className="border border-gray-300 px-1 mx-1">15</span>)}
      {products[item].size.includes("16") && (<span className="border border-gray-300 px-1 mx-1">16</span>)}
      {products[item].size.includes("18") && (<span className="border border-gray-300 px-1 mx-1">18</span>)}
      {products[item].size.includes("19") && (<span className="border border-gray-300 px-1 mx-1">19</span>)}
      {products[item].size.includes("20") && (<span className="border border-gray-300 px-1 mx-1">20</span>)}
      {products[item].size.includes("21") && (<span className="border border-gray-300 px-1 mx-1">21</span>)}
      {products[item].size.includes("22") && (<span className="border border-gray-300 px-1 mx-1">22</span>)}
      {products[item].size.includes("24") && (<span className="border border-gray-300 px-1 mx-1">24</span>)}
      {products[item].size.includes("25") && (<span className="border border-gray-300 px-1 mx-1">25</span>)}
      {products[item].size.includes("26") && (<span className="border border-gray-300 px-1 mx-1">26</span>)}
      {products[item].size.includes("28") && (<span className="border border-gray-300 px-1 mx-1">28</span>)}
      {products[item].size.includes("30") && (<span className="border border-gray-300 px-1 mx-1">30</span>)}
      {products[item].size.includes("32") && (<span className="border border-gray-300 px-1 mx-1">32</span>)}
      {products[item].size.includes("34") && (<span className="border border-gray-300 px-1 mx-1">34</span>)}
      {products[item].size.includes("35") && (<span className="border border-gray-300 px-1 mx-1">35</span>)}
      {products[item].size.includes("36") && (<span className="border border-gray-300 px-1 mx-1">36</span>)}
      {products[item].size.includes("38") && (<span className="border border-gray-300 px-1 mx-1">38</span>)}
      {products[item].size.includes("40") && (<span className="border border-gray-300 px-1 mx-1">40</span>)}
      {products[item].size.includes("40") && (<span className="border border-gray-300 px-1 mx-1">40</span>)}
      {products[item].size.includes("42") && (<span className="border border-gray-300 px-1 mx-1">42</span>)}
      {products[item].size.includes("44") && (<span className="border border-gray-300 px-1 mx-1">44</span>)}
      {products[item].size.includes("46") && (<span className="border border-gray-300 px-1 mx-1">46</span>)}
      {products[item].size.includes("48") && (<span className="border border-gray-300 px-1 mx-1">48</span>)}
      {products[item].size.includes("50") && (<span className="border border-gray-300 px-1 mx-1">50</span>)}
      {products[item].size.includes("60") && (<span className="border border-gray-300 px-1 mx-1">60</span>)}
      {products[item].size.includes("65") && (<span className="border border-gray-300 px-1 mx-1">65</span>)}
      {products[item].size.includes("70") && (<span className="border border-gray-300 px-1 mx-1">70</span>)}
      {products[item].size.includes("75") && (<span className="border border-gray-300 px-1 mx-1">75</span>)}
      {products[item].size.includes("86") && (<span className="border border-gray-300 px-1 mx-1">86</span>)}
      {products[item].size.includes("90") && (<span className="border border-gray-300 px-1 mx-1">90</span>)}
      {products[item].size.includes("96") && (<span className="border border-gray-300 px-1 mx-1">96</span>)}
      {products[item].size.includes("100") && (<span className="border border-gray-300 px-1 mx-1">100</span>)}
      {products[item].size.includes("128") && (<span className="border border-gray-300 px-1 mx-1">128</span>)}
      {products[item].size.includes("150") && (<span className="border border-gray-300 px-1 mx-1">150</span>)}
      {products[item].size.includes("160") && (<span className="border border-gray-300 px-1 mx-1">160</span>)}
      {products[item].size.includes("182") && (<span className="border border-gray-300 px-1 mx-1">182</span>)}
      {products[item].size.includes("200") && (<span className="border border-gray-300 px-1 mx-1">200</span>)}
      {products[item].size.includes("224") && (<span className="border border-gray-300 px-1 mx-1">224</span>)}
      {products[item].size.includes("250") && (<span className="border border-gray-300 px-1 mx-1">250</span>)}
      {products[item].size.includes("288") && (<span className="border border-gray-300 px-1 mx-1">288</span>)}
      {products[item].size.includes("300") && (<span className="border border-gray-300 px-1 mx-1">300</span>)}
      <br />
      {products[item].size.includes("450") && (<span className="border border-gray-300 px-1 mx-1">450</span>)}
      {products[item].size.includes("600") && (<span className="border border-gray-300 px-1 mx-1">600</span>)}
      {products[item].size.includes("900") && (<span className="border border-gray-300 px-1 mx-1">900</span>)}
      {products[item].size.includes("S") && (<span className="border border-gray-300 px-1 mx-1">S</span>)}
      {products[item].size.includes("M") && (<span className="border border-gray-300 px-1 mx-1">M</span>)}
      {products[item].size.includes("L") && (<span className="border border-gray-300 px-1 mx-1">L</span>)}
      {products[item].size.includes("XL") && (<span className="border border-gray-300 px-1 mx-1">XL</span>)}
      {products[item].size.includes("2XL") && (<span className="border border-gray-300 px-1 mx-1">2XL</span>)}
      {products[item].size.includes("3XL") && (<span className="border border-gray-300 px-1 mx-1">3XL</span>)}
      </div>

      
      <div className="mt-1 text-gray-600 text-sm space-x-1 textPart">
      {products[item].color.includes("zinc") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#BAC4C8] hover:bg-[#BAC4C8] w-6 h-6 focus:outline-none"></button>)}
      {products[item].color.includes("RoseGold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none"></button>)}
      {products[item].color.includes("antique") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none"></button>)}
      {products[item].color.includes("black") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-black hover:bg-black w-6 h-6 focus:outline-none"></button>)}
      {products[item].color.includes("white") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-white hover:bg-white w-6 h-6 focus:outline-none"></button>)}
      {products[item].color.includes("gold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#FFD700] hover:bg-[#FFD700] w-6 h-6 focus:outline-none"></button>)}
      {products[item].color.includes("aluminium") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#848789] hover:bg-[#848789] w-6 h-6 focus:outline-none"></button>)}
      {products[item].color.includes("wenge") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#645452] hover:bg-[#645452] w-6 h-6 focus:outline-none"></button>)}
      {products[item].color.includes("ss") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#b4bdc7] hover:bg-[#b4bdc7] w-6 h-6 focus:outline-none"></button>)}
      {products[item].color.includes("mocha brown") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#664F40] hover:bg-[#664F40] w-6 h-6 focus:outline-none"></button>)}
      {products[item].color.includes("grey") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-gray-500 hover:bg-gray-500 w-6 h-6 focus:outline-none"></button>)}
              
      </div>

  </div>
</div>
</Link>})}



    
  </div>
</div>
</section>
  </div>

  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readystate){
    await mongoose.connect(process.env.MONGO_URI)
}
  const {title}=context.query
  const queryObject={}
  if (title){
    queryObject.title={$regex:title,$options:"i"}
  }
  let products = await Product.find(queryObject)
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