import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link legacyBehavior href={"/"}>
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Image src="/logo3.png" alt="" width={250} height={250}/>
        {/* <span className="ml-3 text-xl">Instashopee</span> */}
      </a>
      </Link>
      <p className="mt-2 text-sm text-gray-500 px-5">Instashopee - A Hardware Ecommerce Store</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className=" w-full px-4">
        <h2 className="title-font text-center font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT US</h2>
        <nav className="list-none mb-10 text-center">
          <li>
            <a className="text-gray-600 text-center hover:text-gray-800">Address: 326, Industrial Area, Patparganj, Delhi - 110092, India</a>
          </li>
          <li>
            <a className="text-gray-600 text-center hover:text-gray-800">Phone: 9871525579,011 35004656   Email: varunjainhome@gmail.com, abhishekjain4548@gmail.com</a>
          </li>
    
        </nav>
      </div>
      {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT US</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">About Instashopee</a>
          </li>

        </nav>
      </div> */}
      {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">OUR POLICY</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Terms And Conditions</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">No Return Policy</a>
          </li>

        </nav>
      </div> */}
      {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>*/}
    </div> 
    <div className='flex flex-col items-center my-5'>
      {<Link legacyBehavior href={'https://wa.me/qr/VM4H563QVXNOL1'} target="_blank"><a target="_blank"><div className="flex sticky cursor-pointer mr-4 float-right shadow-xl py-3 border rounded-3xl p-10 bg-green-500 ">
        <Image className='px-1' width={30} height={20} src="/icon.png" alt="" />
        <h4 className='font-semibold'>Whataspp Us</h4>
      </div></a></Link>}
      <br />
      {<Link legacyBehavior href={'https://www.instagram.com/instashopeeonline/'} target="_blank"><a target="_blank"><div className="flex sticky cursor-pointer mr-4 float-right shadow-xl py-3 border rounded-3xl p-10 bg-pink-500 ">
        <Image className='px-1' width={30} height={20} src="/instagram.webp" alt="" />
        <h4 className='font-semibold'>Instagram Us</h4>
      </div></a></Link>}
      <br />
      {/* {<Link legacyBehavior href={'https://facebook.com/'} target="_blank"><a target="_blank"><div className="flex sticky cursor-pointer mr-4 float-right shadow-xl py-3 border rounded-3xl p-10 bg-blue-500 ">
        <Image className='px-1' width={30} height={20} src="/facebook1.png" alt="" />
        <h4 className='font-semibold'>Facebook Us</h4>
      </div></a></Link>} */}</div>
      <p className="xl:hidden sm:text-gray-700 font font-semibold text-sm text-center">Developed By - ABHISHEK JAIN
        {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a> */}
      </p>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Instashopee.com - All Rights Reserved
        {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a> */}
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      <p className="text-gray-700 font font-semibold text-sm text-center sm:text-left float-left">Developed By - ABHISHEK JAIN
        {/* <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a> */}
      </p>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer