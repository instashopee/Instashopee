import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Product from "@/models/Product";
import mongoose from 'mongoose';
const all_products = ({products}) => {
  return (
    <div className='bg-white min-h-screen'>
        <Head>
        <title>Products -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>

      <div className='text-center font-semibold text-2xl'>
            Instashopee All Products
      </div>
      <section className="text-gray-600 body-font ">

  <div className="container px-5 py-3 mx-auto  ">
    <div className="flex flex-wrap -m-4 justify-center">
     
      
    {Object.keys(products).length==0 && <p>Sorry, All Items Out Of Stock, New Products Comming Soon !!</p>}
    {Object.keys(products).map((item)=>{
// _id inside key of link
return <Link key={products[item].id} passHref={true} legacyBehavior href={`product/${products[item].slug}`}>
  <div className="lg:w-[20rem] md:w-1/2 p-4 w-1/2 h-[26rem] cursor-pointer shadow-lg  productCard transition-all">
    <a className="block relative rounded overflow-hidden">
      <img alt="" className="w-40 h-40 m-auto block" src={products[item].img}/>
    </a>
    <div className="mt-4 text-center md:text-left">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 textPart">{products[item].category}</h3>
      <h2 className="text-gray-900 title-font md:text-lg font-medium textPart">{products[item].title}</h2>
      <div className=''>
        <p className="mt-1 textPart md:text-lg font-semibold">₹{products[item].price}/-</p>
        
      <span className="font-small text-md mr-2 mt-1 text-green-600 line-through textPart">
      ₹{products[item].mrp}/-
                </span>
                <span className="font-small text-md mt-1 text-orange-600 textPart">
                ({Math.floor(((products[item].price-products[item].mrp)/products[item].mrp)*100)}% Off){/* (-70% Off) */}
                </span>
                </div>
                <div className="mt-1 textPart">
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
        {products[item].size.includes("14") && (<span className="border border-gray-300 px-1 mx-1">15</span>)}
        {products[item].size.includes("15") && (<span className="border border-gray-300 px-1 mx-1">14</span>)}
        {products[item].size.includes("16") && (<span className="border border-gray-300 px-1 mx-1">16</span>)}
        {products[item].size.includes("18") && (<span className="border border-gray-300 px-1 mx-1">18</span>)}
        {products[item].size.includes("20") && (<span className="border border-gray-300 px-1 mx-1">20</span>)}
        {products[item].size.includes("22") && (<span className="border border-gray-300 px-1 mx-1">22</span>)}
        {products[item].size.includes("24") && (<span className="border border-gray-300 px-1 mx-1">24</span>)}
        {products[item].size.includes("26") && (<span className="border border-gray-300 px-1 mx-1">26</span>)}
        {products[item].size.includes("28") && (<span className="border border-gray-300 px-1 mx-1">28</span>)}
        {products[item].size.includes("30") && (<span className="border border-gray-300 px-1 mx-1">30</span>)}
        {products[item].size.includes("32") && (<span className="border border-gray-300 px-1 mx-1">32</span>)}
        {products[item].size.includes("34") && (<span className="border border-gray-300 px-1 mx-1">34</span>)}
        {products[item].size.includes("36") && (<span className="border border-gray-300 px-1 mx-1">36</span>)}
        {products[item].size.includes("38") && (<span className="border border-gray-300 px-1 mx-1">38</span>)}
        {products[item].size.includes("40") && (<span className="border border-gray-300 px-1 mx-1">40</span>)}
        {products[item].size.includes("40") && (<span className="border border-gray-300 px-1 mx-1">40</span>)}
        {products[item].size.includes("42") && (<span className="border border-gray-300 px-1 mx-1">42</span>)}
        {products[item].size.includes("44") && (<span className="border border-gray-300 px-1 mx-1">44</span>)}
        {products[item].size.includes("46") && (<span className="border border-gray-300 px-1 mx-1">46</span>)}
        {products[item].size.includes("48") && (<span className="border border-gray-300 px-1 mx-1">48</span>)}
        {products[item].size.includes("96") && (<span className="border border-gray-300 px-1 mx-1">96</span>)}
        {products[item].size.includes("100") && (<span className="border border-gray-300 px-1 mx-1">100</span>)}
        {products[item].size.includes("128") && (<span className="border border-gray-300 px-1 mx-1">128</span>)}
        {products[item].size.includes("288") && (<span className="border border-gray-300 px-1 mx-1">288</span>)}
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
        {products[item].color.includes("rose gold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("antique") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("black") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-black hover:bg-black w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("white") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-white hover:bg-white w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("gold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#FFD700] hover:bg-[#FFD700] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("aluminium") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#848789] hover:bg-[#848789] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("wenge") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#645452] hover:bg-[#645452] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("ss") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#b4bdc7] hover:bg-[#b4bdc7] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("mocha brown") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#664F40] hover:bg-[#664F40] w-6 h-6 focus:outline-none"></button>)}
                
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

  let products = await Product.find({__v:0})
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
export default all_products