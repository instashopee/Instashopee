import Head from 'next/head'


import Link from 'next/link'
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from 'mongoose';
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Size_Color from '@/components/Size_Color';
export default function Top_selling({products}){
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
    <div>
     <div className='bg-white min-h-screen'>

        <div className='border rounded-sm sm:m-1'>
          <h1 className='text-2xl font-extrabold text-gray-800 p-5'>TOP SELLING PRODUCTS</h1>
          <section className="text-gray-600 body-font ">

  <div className="containerpy-3 mx-auto  ">
    <div className="flex flex-wrap justify-center">
     
      
    <Size_Color products={products}/>



      
    </div>
  </div>
</section>
    </div>
  
       
       
      
     </div>
             <div className='my-4'>
            <img className="w-full 2xl:h-[40rem] h-[20rem]" src="/banners/gif/banner2.gif" alt="" />
            </div> </div>
   )
  }
  export async function getServerSideProps(context) {
    if(!mongoose.connections[0].readystate){
      await mongoose.connect(process.env.MONGO_URI)
  }
  
    let products = await Product.find({type:'top selling'})
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
