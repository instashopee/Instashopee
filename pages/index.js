import Head from 'next/head'
import SliderIndicatorsControlsInside from '@/components/SliderIndicatorsControlsInside'

import Link from 'next/link'
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from 'mongoose';
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import Deals_of_day from './Deals_of_day';
import Top_selling from './Top_selling';
import Economy_Sales from './Economy_Sales';

export default function Home({products,products2,products3}){
  const router=useRouter()
  const [user, setUser] = useState({value:null})
    const [key, setKey] = useState()
  useEffect(() => {

    const myuser=JSON.parse(localStorage.getItem('myuser'))
    if(myuser){
      setUser({value:myuser.token, email:myuser.email})
    }
    setKey(Math.random())
  }, [router.query])


  
   return(
     <div className='bg-white min-h-screen'>
       <Head>
        <title>Instashopee</title>
         <meta name ="description" content ="Instashopee" />
         <link rel= "icon" href ="/logo_icon.ico" />
       </Head>
       <div >
       <SliderIndicatorsControlsInside/>
       </div>

       <div class="relative mx-16 my-5">
		<div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
 
		<div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center space-x-6 ">
    <div class="neon">
  <span class="text" data-text="!! SALE IS LIVE !!">!! SALE IS LIVE !!</span>
  <span class="gradient"></span>
  <span class="spotlight"></span>
</div>    </div>
  </div>
      <Top_selling products={products} />
      {/* <div class="logo"><b>d<span>ri</span>bb<span>b</span>le</b></div> */}

      <Deals_of_day products2={products2}/>
      <Economy_Sales products3={products3}/>
     </div>
   )
  }
 

  export async function getServerSideProps(context) {
    if(!mongoose.connections[0].readystate){
      await mongoose.connect(process.env.MONGO_URI)
  }
  
    let products = await Product.find({type:'top selling'})
    let products2 = await Product.find({type:'deals'})
    let products3 = await Product.find({type:'economy'})
    let hinges = {}
    let hinges2 = {}
    let hinges3 = {}
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
    for(let item of products2){
      if(item.title in hinges2){
          if(!hinges2[item.title].color.includes(item.color) && item.availableQty > 0){
            hinges2[item.title].color.push(item.color)
          }
          if(!hinges2[item.title].size.includes(item.size) && item.availableQty > 0){
            hinges2[item.title].size.push(item.size)
          }
      }
  
      else{
        hinges2[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty >0){
              hinges2[item.title].color = [item.color]
              hinges2[item.title].size = [item.size]
            }else{
              hinges2[item.title].color = []
              hinges2[item.title].size = []
            }
      }
    }
    for(let item of products3){
      if(item.title in hinges3){
          if(!hinges3[item.title].color.includes(item.color) && item.availableQty > 0){
            hinges3[item.title].color.push(item.color)
          }
          if(!hinges3[item.title].size.includes(item.size) && item.availableQty > 0){
            hinges3[item.title].size.push(item.size)
          }
      }
  
      else{
        hinges3[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty >0){
              hinges3[item.title].color = [item.color]
              hinges3[item.title].size = [item.size]
            }else{
              hinges3[item.title].color = []
              hinges3[item.title].size = []
            }
      }
    }
  
    return{
      props:{products:JSON.parse(JSON.stringify(hinges)),products2:JSON.parse(JSON.stringify(hinges2)),products3:JSON.parse(JSON.stringify(hinges3))},
    }

    }

