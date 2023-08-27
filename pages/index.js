import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SliderIndicatorsControlsInside from '@/components/SliderIndicatorsControlsInside'
import Link from 'next/link'
import HomeSectionCarousel from '@/components/HomeSectionCarousel/HomeSectionCarousel'
import { hinges } from '@/Data/hinges'
export default function Home(){
   return(
     <div className='bg-white shadow-lg'>
       <Head>
        <title>Instashopee</title>
         <meta name ="description" content ="Instashopee - A Ecommerce Store" />
         <link rel= "icon" href ="/favicon.ico" />
       </Head>
       <div className='2xl:m-10'>

       <SliderIndicatorsControlsInside/>
       </div>
{/* <div>
        <img src="/Hardware_banner.png" alt="" width={2000}/>
      </div>  */}

          
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      {/* <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 font-bold">INSTASHOPEE</h1> */}
      <img src="/logo3.png" alt="" />
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-lg">Having your home fitted with the right accessories comprises the most important aspect of decorating and making your personal space your home. </p>
    
    </div>
      <h1 className="sm:text-3xl text-2xl text-center title-font text-gray-400 font-bold">!! Top Selling Products !!</h1>

<div className='shadow-2xl'>
<HomeSectionCarousel />
         
        </div>

  </div>
</section>
       
       
       
     </div>
   )
}