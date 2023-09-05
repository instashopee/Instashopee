import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SliderIndicatorsControlsInside from '@/components/SliderIndicatorsControlsInside'

import Link from 'next/link'
import Product from "@/models/Product";
import Banner from "@/models/Banner";
import connectDb from "@/middleware/mongoose";
import mongoose from 'mongoose';
import HomeSectionCarousel from '@/components/HomeSectionCarousel/HomeSectionCarousel'
// import { hinges } from '@/Data/hinges'
import Banner1 from '@/components/Banner'
import { drawer_slides } from '@/Data/drawer_slides'
import { hinges } from '@/Data/hinges'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export default function Home({products}){
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
         <link rel= "icon" href ="/favicon.ico" />
       </Head>
       <div className='2xl:mx-10 my-5'>
      {/* <img className='' src="/banners/banner_gif.webp" alt="" /> */}



       <SliderIndicatorsControlsInside/>
      
       </div>
{/* <div>
        <img src="/Hardware_banner.png" alt="" width={2000}/>
      </div>  */}

          
  {/* <div className=" 2xl:container px-5 py-24 mx-auto"> */}
    {/* <div className="flex flex-wrap w-full mb-2 flex-col items-center text-center">
      {/* <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 font-bold">INSTASHOPEE</h1> */}
      {/* <img src="/logo3.png" alt="" className='mx-2'/>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-lg">Having your home fitted with the right accessories comprises the most important aspect of decorating and making your personal space your home. </p>
     */}
    {/* </div> */}
  {/* </div>  */}

      {/* <h1 className="sm:text-3xl text-2xl text-center title-font text-gray-400 font-bold">!! Top Selling Products !!</h1> */}
      {/* <div className='hidden space-y-5 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={drawer_slides} sectionName={"TOP SELLING DRAWER SLIDES"}/>
            <Banner1 banner={'/banners/static_banner1.jpg'}/>
            <HomeSectionCarousel data={hinges} sectionName={"TOP SELLING HINGES"}/>
            <Banner1 banner={'/banners/static_banner1.jpg'}/>
            

            
        </div> */}
        <div className='border p-3 sm:m-10'>
          <h1 className='text-2xl font-extrabold text-gray-800 p-5'>TOP SELLING PRODUCTS</h1>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto 2xl:justify-start lg:justify-start md:justify-start justify-center">
    <div className="flex flex-row ">
    {Object.keys(products).length==0 && <p className='p-3 text-center'>Sorry, All Items Out Of Stock, New Products Comming Soon !!</p>}
    {Object.keys(products).map((item)=>{
// _id inside key of link
return <Link key={products[item].id} passHref={true} legacyBehavior href={`product/${products[item].slug}`}>
  <div className="2xl:w-1/5 2xl:h-[22rem] lg:w-1/5 lg:h-96 md:w-1/2 md:h-1/2 p-4 w-36 h-56 cursor-pointer shadow-lg m-5 productCard transition-all">
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
