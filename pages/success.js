import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const success = () => {

  return (
    <div className='min-h-screen bg-white'>
        <Head>
        <title>ORDER PLACED -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
        <img className='m-auto h-52' src="/order.png" alt="" />
        <h1 className='text-3xl font-extrabold text-center mb-5'>YOUR ORDER HAS BEEN PLACED !!</h1>
    <div className='text-xl font-medium text-green-500 text-center'>
    We have placed your order but to confirm your order,
    </div>
    <div className='text-xl font-medium text-green-500 text-center'>
    you have to pay on this UPI Handle as we do not accept cash on delivery !
    </div>
    <img className='m-auto h-96' src="/qr.jpg" alt="" />
    <div className='text-xl font-medium text-red-500 text-center'>
    !! If Payment is not completed then your order may get Cancelled !!
    </div>
    <p className='text-xl font-medium text-green-500 text-center '>
      After Complete Payment your payment status in orders page will get converted from pending to paid in 24 hours.  
    </p>
    <p className='text-xl font-medium text-green-500 text-center '>
    You will recieve the order within the expected delivery time.</p>
  <div className='flex justify-center'>
    <div className="bg-blue-400 p-2 m-3 rounded-md shadow-lg">
                <Link legacyBehavior href={'/'} >
                    Take me home
                </Link>
     </div>
    <div className="bg-blue-400 p-2 m-3 rounded-md shadow-lg ">
                <Link legacyBehavior href={'/orders'} >
                    Take me to orders page
                </Link>
     </div>
     </div>
     </div>
 
  )
}

export default success