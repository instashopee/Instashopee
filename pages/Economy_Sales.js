import Head from 'next/head'


import Link from 'next/link'
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from 'mongoose';
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Size_Color from '@/components/Size_Color';
export default function Economy_Sales({products3}){
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

        <div className='border rounded-sm sm:m-1'>
          <h1 className='text-2xl font-extrabold text-gray-800 p-5'>Economy Sales</h1>
          <section className="text-gray-600 body-font ">

  <div className="containerpy-3 mx-auto  ">
    <div className="flex flex-wrap justify-center">
      
     <Size_Color/>


      
    </div>
  </div>
</section>
    </div>
  
             <div className='my-4'>
            <img className="w-full 2xl:h-[40rem] h-[20rem]" src="/banners/gif/banner6.gif" alt="" />

            {/* <video ref={vidRef} className="w-full h-full" muted  autoPlay={true} loop src="/banners/banner3.mp4" ></video> */}
         
 
            </div> 
       
       
      
     </div>
   )
  }
  export async function getServerSideProps(context) {
    if(!mongoose.connections[0].readystate){
      await mongoose.connect(process.env.MONGO_URI)
  }
  
    let products3 = await Product.find({type:'economy'})
    let hinges3 = {}
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
      props:{products3:JSON.parse(JSON.stringify(hinges3))},
    }

    }
