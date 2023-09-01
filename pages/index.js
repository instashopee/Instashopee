import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SliderIndicatorsControlsInside from '@/components/SliderIndicatorsControlsInside'
import Link from 'next/link'
import HomeSectionCarousel from '@/components/HomeSectionCarousel/HomeSectionCarousel'
import { hinges } from '@/Data/hinges'
import Banner1 from '@/components/Banner'
import { drawer_slides } from '@/Data/drawer_slides'
export default function Home(){
   return(
     <div className='bg-white'>
       <Head>
        <title>Instashopee</title>
         <meta name ="description" content ="Instashopee - A Ecommerce Store" />
         <link rel= "icon" href ="/favicon.ico" />
       </Head>
       <div className='2xl:mx-10 my-5'>
      
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
      <div className='space-y-5 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={drawer_slides} sectionName={"TOP SELLING DRAWER SLIDES"}/>
            <Banner1 banner={'/banners/static_banner1.jpg'}/>
            <HomeSectionCarousel data={hinges} sectionName={"TOP SELLING HINGES"}/>
            <Banner1 banner={'/banners/static_banner1.jpg'}/>

            
        </div>
       
       
       
      
     </div>
   )
}