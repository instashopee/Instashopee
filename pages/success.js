import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const success = () => {
    const router=useRouter()
    setTimeout(() => {
        router.push('/')
    }, 3000);
  return (
    <div className='min-h-screen bg-white'>
        <Head>
        <title>ORDER SUCCESS -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
        <img className='m-auto h-72' src="/order.png" alt="" />
        <h1 className='text-3xl font-extrabold text-center mb-5'>ORDER PLACED SUCCESSFULLY !!</h1>
    <div className='text-xl font-medium text-red-500 text-center'>
    We appreciate your order, we’re currently processing it. 
    </div>
    <div className='text-xl font-medium text-red-500 text-center'>
    So hang tight and we’ll send you confirmation very soon in your orders section!
    </div>
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