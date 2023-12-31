
import Link from 'next/link'
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from 'mongoose';

export default function Home({products}){
   return(
     <div className='bg-white'>
       
        <div className='border p-3 m-10'>
          <h1 className='text-2xl font-extrabold text-gray-800 p-5'>TOP SELLING PRODUCTS</h1>
      <section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto ">
    <div className="flex flex-wrap -m-4">
    {Object.keys(products).length==0 && <p className='p-3'>Sorry, All Items Out Of Stock, New Products Comming Soon !!</p>}
    {Object.keys(products).map((item)=>{
// _id inside key of link
return <Link key={products[item].id} passHref={true} legacyBehavior href={`product/${products[item].slug}`}>
  <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5 productCard transition-all">
    <a className="block relative rounded overflow-hidden">
      <img alt="" className="m-auto block w-30 h-32" src={products[item].img}/>
    </a>
    <div className="mt-4 text-center md:text-left">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 textPart">{products[item].category}</h3>
      <h2 className="text-gray-900 title-font text-lg font-medium textPart">{products[item].title}</h2>
      <div className='flex'>
        <p className="mt-1 textPart">₹{products[item].price}/-</p>
      <span className="font-small text-md ml-2 mt-1 text-green-600 line-through textPart">
                ₹MRP {products[item].mrp}/-
                </span>
                <span className="font-small text-md ml-2 mt-1 text-orange-600 textPart">
                (-{Math.floor(((products[item].mrp-products[item].price)/products[item].mrp)*100)}% off){/* (-70% Off) */}
                </span></div>
      <div className="mt-1 textPart">
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

      
      <div className="mt-1 text-gray-600 text-sm space-x-1 textPart">
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