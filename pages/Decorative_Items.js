import Head from 'next/head'


import Link from 'next/link'
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from 'mongoose';
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Size_Color from '@/components/Size_Color';
export default function Decorative_Items({products5}){
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
          <h1 className='text-2xl font-extrabold text-gray-800 p-5'>Decorative Items</h1>
          <section className="text-gray-600 body-font ">

  <div className="containerpy-3 mx-auto  ">
    <div className="flex flex-wrap  justify-center">
     
     
    {Object.keys(products5).length==0 && <p>Sorry, All Items Out Of Stock, New products5 Comming Soon !!</p>}
    {Object.keys(products5).map((item)=>{
// _id inside key of link
return <Link key={products5[item].id} passHref={true} legacyBehavior href={`product/${products5[item].slug}`}>
  <div className="lg:w-[20rem] md:w-1/2 p-4 w-1/2 sm:h-[30rem] h-[27rem] sm:m-2 cursor-pointer shadow-lg  productCard transition-all">
     <div className='z-50 textPart'><span class="rounded-md bg-red-500 p-1 text-sm text-white ">{Math.floor(((products5[item].price-products5[item].mrp)/products5[item].mrp)*100)}% Off</span></div>
    <div className="block relative rounded textPart mt-1">
      <img alt="Instashopee" className="w-56 sm:h-64 h-52 m-auto block" src={products5[item].img}/>
    </div>
    <div className="mt-2 text-center md:text-left">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 textPart">{products5[item].category}</h3>
      <h2 className="text-gray-900 title-font md:text-lg font-medium textPart">{products5[item].title}</h2>
      <div className='flex'>
      <span className="text-md mr-2 text-gray-400 line-through textPart">
        
      ₹{products5[item].mrp}/-
                </span>
        <span className="textPart md:text-lg text-green-600 font-semibold">₹{products5[item].price}/-</span>
               
                </div>
                <div className="mt-1 textPart">
        {products5[item].size.includes("0") && (<span className="border border-gray-300 px-1 mx-1">0</span>)}
        {products5[item].size.includes("1") && (<span className="border border-gray-300 px-1 mx-1">1</span>)}
        {products5[item].size.includes("2") && (<span className="border border-gray-300 px-1 mx-1">2</span>)}
        {products5[item].size.includes("3") && (<span className="border border-gray-300 px-1 mx-1">3</span>)}
        {products5[item].size.includes("4") && (<span className="border border-gray-300 px-1 mx-1">4</span>)}
        {products5[item].size.includes("5") && (<span className="border border-gray-300 px-1 mx-1">5</span>)}
        {products5[item].size.includes("6") && (<span className="border border-gray-300 px-1 mx-1">6</span>)}
        {products5[item].size.includes("7") && (<span className="border border-gray-300 px-1 mx-1">7</span>)}
        {products5[item].size.includes("8") && (<span className="border border-gray-300 px-1 mx-1">8</span>)}
        {products5[item].size.includes("9") && (<span className="border border-gray-300 px-1 mx-1">9</span>)}
        {products5[item].size.includes("10") && (<span className="border border-gray-300 px-1 mx-1">10</span>)}
        {products5[item].size.includes("12") && (<span className="border border-gray-300 px-1 mx-1">12</span>)}
        {products5[item].size.includes("14") && (<span className="border border-gray-300 px-1 mx-1">14</span>)}
        {products5[item].size.includes("15") && (<span className="border border-gray-300 px-1 mx-1">15</span>)}
        {products5[item].size.includes("16") && (<span className="border border-gray-300 px-1 mx-1">16</span>)}
        {products5[item].size.includes("18") && (<span className="border border-gray-300 px-1 mx-1">18</span>)}
        {products5[item].size.includes("19") && (<span className="border border-gray-300 px-1 mx-1">19</span>)}
        {products5[item].size.includes("20") && (<span className="border border-gray-300 px-1 mx-1">20</span>)}
        {products5[item].size.includes("21") && (<span className="border border-gray-300 px-1 mx-1">21</span>)}
        {products5[item].size.includes("22") && (<span className="border border-gray-300 px-1 mx-1">22</span>)}
        {products5[item].size.includes("24") && (<span className="border border-gray-300 px-1 mx-1">24</span>)}
        {products5[item].size.includes("25") && (<span className="border border-gray-300 px-1 mx-1">25</span>)}
        {products5[item].size.includes("26") && (<span className="border border-gray-300 px-1 mx-1">26</span>)}
        {products5[item].size.includes("28") && (<span className="border border-gray-300 px-1 mx-1">28</span>)}
        {products5[item].size.includes("30") && (<span className="border border-gray-300 px-1 mx-1">30</span>)}
        {products5[item].size.includes("32") && (<span className="border border-gray-300 px-1 mx-1">32</span>)}
        {products5[item].size.includes("34") && (<span className="border border-gray-300 px-1 mx-1">34</span>)}
        {products5[item].size.includes("35") && (<span className="border border-gray-300 px-1 mx-1">35</span>)}
        {products5[item].size.includes("36") && (<span className="border border-gray-300 px-1 mx-1">36</span>)}
        {products5[item].size.includes("38") && (<span className="border border-gray-300 px-1 mx-1">38</span>)}
        {products5[item].size.includes("40") && (<span className="border border-gray-300 px-1 mx-1">40</span>)}
        {products5[item].size.includes("40") && (<span className="border border-gray-300 px-1 mx-1">40</span>)}
        {products5[item].size.includes("42") && (<span className="border border-gray-300 px-1 mx-1">42</span>)}
        {products5[item].size.includes("44") && (<span className="border border-gray-300 px-1 mx-1">44</span>)}
        {products5[item].size.includes("46") && (<span className="border border-gray-300 px-1 mx-1">46</span>)}
        {products5[item].size.includes("48") && (<span className="border border-gray-300 px-1 mx-1">48</span>)}
        {products5[item].size.includes("50") && (<span className="border border-gray-300 px-1 mx-1">50</span>)}
        {products5[item].size.includes("60") && (<span className="border border-gray-300 px-1 mx-1">60</span>)}
        {products5[item].size.includes("65") && (<span className="border border-gray-300 px-1 mx-1">65</span>)}
        {products5[item].size.includes("70") && (<span className="border border-gray-300 px-1 mx-1">70</span>)}
        {products5[item].size.includes("75") && (<span className="border border-gray-300 px-1 mx-1">75</span>)}
        {products5[item].size.includes("86") && (<span className="border border-gray-300 px-1 mx-1">86</span>)}
        {products5[item].size.includes("90") && (<span className="border border-gray-300 px-1 mx-1">90</span>)}
        {products5[item].size.includes("96") && (<span className="border border-gray-300 px-1 mx-1">96</span>)}
        {products5[item].size.includes("100") && (<span className="border border-gray-300 px-1 mx-1">100</span>)}
        {products5[item].size.includes("128") && (<span className="border border-gray-300 px-1 mx-1">128</span>)}
        {products5[item].size.includes("150") && (<span className="border border-gray-300 px-1 mx-1">150</span>)}
        {products5[item].size.includes("160") && (<span className="border border-gray-300 px-1 mx-1">160</span>)}
        {products5[item].size.includes("182") && (<span className="border border-gray-300 px-1 mx-1">182</span>)}
        {products5[item].size.includes("200") && (<span className="border border-gray-300 px-1 mx-1">200</span>)}
        {products5[item].size.includes("224") && (<span className="border border-gray-300 px-1 mx-1">224</span>)}
        {products5[item].size.includes("250") && (<span className="border border-gray-300 px-1 mx-1">250</span>)}
        {products5[item].size.includes("288") && (<span className="border border-gray-300 px-1 mx-1">288</span>)}
        {products5[item].size.includes("300") && (<span className="border border-gray-300 px-1 mx-1">300</span>)}
        {products5[item].size.includes("450") && (<span className="border border-gray-300 px-1 mx-1">450</span>)}
        {products5[item].size.includes("600") && (<span className="border border-gray-300 px-1 mx-1">600</span>)}
        {products5[item].size.includes("900") && (<span className="border border-gray-300 px-1 mx-1">900</span>)}
        {products5[item].size.includes("S") && (<span className="border border-gray-300 px-1 mx-1">S</span>)}
        {products5[item].size.includes("M") && (<span className="border border-gray-300 px-1 mx-1">M</span>)}
        {products5[item].size.includes("L") && (<span className="border border-gray-300 px-1 mx-1">L</span>)}
        {products5[item].size.includes("XL") && (<span className="border border-gray-300 px-1 mx-1">XL</span>)}
        {products5[item].size.includes("2XL") && (<span className="border border-gray-300 px-1 mx-1">2XL</span>)}
        {products5[item].size.includes("3XL") && (<span className="border border-gray-300 px-1 mx-1">3XL</span>)}
        </div>
  
        
        <div className="mt-1 text-gray-600 text-sm space-x-1 textPart">
        {products5[item].color.includes("zinc") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#BAC4C8] hover:bg-[#BAC4C8] w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("RoseGold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("antique") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("black") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-black hover:bg-black w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("white") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-white hover:bg-white w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("gold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#FFD700] hover:bg-[#FFD700] w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("aluminium") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#848789] hover:bg-[#848789] w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("wenge") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#645452] hover:bg-[#645452] w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("ss") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#b4bdc7] hover:bg-[#b4bdc7] w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("mocha brown") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#664F40] hover:bg-[#664F40] w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("grey") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-gray-500 hover:bg-gray-500 w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("brown") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#964B00] hover:bg-[#964B00] w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("wood") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#966F33] hover:bg-[#966F33] w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("RoseGold/Black") && (<button className="border-2 border-gray-300 rounded-full bg-none r_to_b w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("Black/RoseGold") && (<button className="border-2 border-gray-300 rounded-full bg-none b_to_r w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("Black/Gold") && (<button className="border-2 border-gray-300 rounded-full bg-none b_to_g w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("Wooden/RoseGold") && (<button className="border-2 border-gray-300 rounded-full bg-none wo_to_r w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("Wooden/Gold") && (<button className="border-2 border-gray-300 rounded-full bg-none wo_to_g w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("White/RoseGold") && (<button className="border-2 border-gray-300 rounded-full bg-none wh_to_r w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("White/Gold") && (<button className="border-2 border-gray-300 rounded-full bg-none wh_to_g w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("Grey/RoseGold") && (<button className="border-2 border-gray-300 rounded-full bg-none gr_to_r w-6 h-6 focus:outline-none"></button>)}
        {products5[item].color.includes("Grey/Gold") && (<button className="border-2 border-gray-300 rounded-full bg-none gr_to_g w-6 h-6 focus:outline-none"></button>)}
 
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
  
    let products5 = await Product.find({type:'decorative'})
    let hinges2 = {}
    for(let item of products5){
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
  
    return{
      props:{products5:JSON.parse(JSON.stringify(hinges2))},
    }

    }
