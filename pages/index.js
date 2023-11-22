import Head from 'next/head'
import SliderIndicatorsControlsInside from '@/components/SliderIndicatorsControlsInside'

import Link from 'next/link'
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from 'mongoose';
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { hinges } from '@/Data/hinges';
import Deals_of_day from './Deals_of_day';
import Top_selling from './Top_selling';
import Economy_Sales from './Economy_Sales';
import Chimney_Appliances from './Chimney_Appliances';
import Decorative_Items from './Decorative_Items';
import HomeSectionCarousel from '@/components/HomeSectionCarousel/HomeSectionCarousel';
import Responsive from '@/components/HomeSectionCarousel/HomeSectionCarousel';

export default function Home({products,products2,products3,products4,products5}){
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
//   const [banners, setbanners] = useState({})
  
//   useEffect(() => {
    
//     const fetchProducts=async()=>{
//       let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getbanners`, {
//         method: "POST", // or 'PUT'
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({banners}),
//       });
    
//       let res=await a.json()
//       setbanners(res.banners)
//     }
//     if(!localStorage.getItem("myuser")){
//       router.push('/')
//     }else{
//       fetchProducts()
//   }

     
// }, [])

  
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
       {/* <div className=''>
        <Responsive/>
       </div> */}
<div className='flex flex-wrap mx-auto my-3 sm:space-x-12 space-y-3 md:space-y-0 justify-center'>
          
        <div className='p-2 rounded-md shadow-2xl bg-slate-50 '>
          <h1 className='font-bold'>Shop Latest Cabinet Handles</h1>
          <div>
          <div className='p-2 space-x-2 flex'>
            <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/handle1078x160`}><a>
              <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/IMG-6310.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Cabinet Handle 1078</h1>
            </div></a></Link>
            <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/handle1077x160`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/IMG-6306.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Cabinet Handle 1077</h1>
            </div></a></Link>
          </div>
          <div className='p-2 space-x-2 flex'>
          <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/handle1076x160`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/1076.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Cabinet Handle 1076</h1>
            </div></a></Link>
            <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/handle1085x96`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/1085.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Cabinet Handle 1085</h1>
            </div></a></Link>
          </div>
          
          </div>
        </div>
        <div className='p-2 rounded-md shadow-2xl bg-slate-50 '>
          <h1 className='font-bold'>Try Shopping New Knobs</h1>
          <div>
          <div className='p-2 space-x-2 flex'>
          <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/knb175`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/IMG-8498.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Knob 175</h1>
            </div></a></Link>
            <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/knb172`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/IMG-8488.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Knob 172</h1>
            </div></a></Link>
          </div>
          <div className='p-2 space-x-2 flex'>
          <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/knob175rgd`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/RGDGREY1.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Knob 175</h1>
            </div></a></Link>
            <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/knob172`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/KNOB%20RGD6.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Knob 172</h1>
            </div></a></Link>
          </div>
          
          </div>
        </div>
        <div className='p-2 rounded-md shadow-2xl bg-slate-50 '>
          <h1 className='font-bold'>Explore Latest Tandem Box</h1>
          <div>
          <div className='p-2 space-x-2 flex'>
          <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/ssb1`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/slim_box1.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Slim Box 86 MM</h1>
            </div></a></Link>
            <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/stsg1`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/stsg1.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Single Gallery 6"</h1>
            </div></a></Link>
          </div>
          <div className='p-2 space-x-2 flex'>
          <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/stdg1`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/stdg1.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Double Gallery 8"</h1>
            </div></a></Link>
            <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/woodcutlery600`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/WOODEN%20CUTLERY%20ADJUSTABLE%20450-600MM.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Wooden Cutlery Insert</h1>
            </div></a></Link>
          </div>
          
          </div>
        </div>
        <div className='p-2 rounded-md shadow-2xl bg-slate-50 '>
          <h1 className='font-bold'>Find Brand New Main Door Handles</h1>
          <div>
          <div className='p-2 space-x-2 flex'>
          <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/peacock`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/peacock.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Peacock Handles</h1>
            </div></a></Link>
            <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/main611`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/glass%20door%20611.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Antique Door Handle</h1>
            </div></a></Link>
          </div>
          <div className='p-2 space-x-2 flex'>
          <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/handle2123`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/IMG-6308.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Main Handle 2123</h1>
            </div></a></Link>
            <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/product/handle2104x150`}><a>
            <div title="CLICK TO VIEW" className='cursor-pointer hover:opacity-60'>
              <img src="/images/2104.jpg" className='w-40 h-40 rounded-md' alt="" />
              <h1 className='font-semibold'>Main Handle 2104</h1>
            </div></a></Link>
          </div>
          
          </div>
        </div>


  </div>
       <h1 className='text-2xl font-black p-3 mx-5 mt-5'>TOP BRANDS</h1>
  <div className='hidden md:flex my-3 p-5 shadow-2xl'>

  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/kaff.png" alt="" />
  </div>
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/dorset.png" alt="" />
  </div>
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/avis.png" alt="" />
  </div>
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/stelocasa.png" alt="" />
  </div> 
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/hettich.png" alt="" />
  </div> 
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/sris_ma_fils.jpeg" alt="" />
  </div>
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/fevicol.png" alt="" />
  </div>
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/ozone.png" alt="" />
  </div>

</div>
  <div className='sm:hidden'>
  <div className='flex my-3 p-5'>

<div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/stelocasa.png" alt="" />
  </div> 
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/hettich.png" alt="" />
  </div> 

  </div>
<div className='flex my-3 p-5'>
<div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/kaff.png" alt="" />
  </div>
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/dorset.png" alt="" />
  </div>
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/avis.png" alt="" />
  </div>


</div>
<div className='flex my-3 p-5'>
<div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/fevicol.png" alt="" />
  </div>
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/ozone.png" alt="" />
  </div>
  <div className='flex justify-center text-center animate-bounce mx-auto font-semibold cursor-pointer'>
  <img className='h-24 w-32' src="/sris_ma_fils.jpeg" alt="" />
  </div>


</div>
</div>
       <div className='hidden flex flex-wrap mx-auto my-3 sm:space-x-12 space-y-3 md:space-y-0 justify-center mt-4 mb-4'>
        <div className='bg-white shadow-lg p-5'>
          <div className='font-semibold text-xl'>Pick up where you left</div>
          <img src="/images/peacock.jpg" className='w-72 h-72 rounded-md' alt="" />
          <div></div>
        </div>
        <div className='bg-white shadow-lg p-5'>
          <div className='font-semibold text-xl'>Continue Shopping for</div>
          <img src="/images/peacock.jpg" className='w-72 h-72 rounded-md' alt="" />
          <div></div>
        </div>
        <div className='bg-white shadow-lg p-5'>
        <div className='font-semibold text-xl'>Shop now its for you</div>
        <img src="/images/peacock.jpg" className='w-72 h-72 rounded-md' alt="" />
          <div></div>
          </div>
        <div className='bg-white shadow-lg p-5'>
        <div className='font-semibold text-xl'>Keep Shopping for</div>
        <img src="/images/peacock.jpg" className='w-72 h-72 rounded-md' alt="" />
          <div></div>
        </div>
       </div>


      <Top_selling products={products} />
      <div className='my-4'>
      {/* {Object.values(banners).map(item => ( <img className="w-full 2xl:h-[40rem] h-[20rem]" src={item.static_banner1} alt="" />))} */}
            </div> 
      <Chimney_Appliances products4={products4}/>
      <div className='my-4'>
      {/* {Object.values(banners).map(item => ( <img className="w-full 2xl:h-[40rem] h-[20rem]" src={item.static_banner2} alt="" />))} */}
            </div> 
      <Deals_of_day products2={products2}/>
      <div className='my-4'>
      {/* {Object.values(banners).map(item => ( <img className="w-full 2xl:h-[40rem] h-[20rem]" src={item.static_banner3} alt="" />))} */}
            </div> 
      <Economy_Sales products3={products3}/>
      <div className='my-4'>
      {/* {Object.values(banners).map(item => ( <img className="w-full 2xl:h-[40rem] h-[20rem]" src={item.static_banner4} alt="" />))} */}
            </div> 
      <Decorative_Items products5={products5}/>
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
    let products4 = await Product.find({type:'chimney'})
    let products5 = await Product.find({type:'decorative'})
    let hinges = {}
    let hinges2 = {}
    let hinges3 = {}
    let hinges4 = {}
    let hinges5 = {}
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
    for(let item of products4){
      if(item.title in hinges4){
          if(!hinges4[item.title].color.includes(item.color) && item.availableQty > 0){
            hinges4[item.title].color.push(item.color)
          }
          if(!hinges4[item.title].size.includes(item.size) && item.availableQty > 0){
            hinges4[item.title].size.push(item.size)
          }
      }
  
      else{
        hinges4[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty >0){
              hinges4[item.title].color = [item.color]
              hinges4[item.title].size = [item.size]
            }else{
              hinges4[item.title].color = []
              hinges4[item.title].size = []
            }
      }
    }
    for(let item of products5){
      if(item.title in hinges5){
          if(!hinges5[item.title].color.includes(item.color) && item.availableQty > 0){
            hinges5[item.title].color.push(item.color)
          }
          if(!hinges5[item.title].size.includes(item.size) && item.availableQty > 0){
            hinges5[item.title].size.push(item.size)
          }
      }
  
      else{
        hinges5[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty >0){
              hinges5[item.title].color = [item.color]
              hinges5[item.title].size = [item.size]
            }else{
              hinges5[item.title].color = []
              hinges5[item.title].size = []
            }
      }
    }
  
    return{
      props:{products:JSON.parse(JSON.stringify(hinges)),products2:JSON.parse(JSON.stringify(hinges2)),products3:JSON.parse(JSON.stringify(hinges3)),products4:JSON.parse(JSON.stringify(hinges4)),products5:JSON.parse(JSON.stringify(hinges5))},
    }

    }

