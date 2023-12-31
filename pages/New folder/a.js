import Link from 'next/link'
import React from 'react'
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from 'mongoose';
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Head from "next/head";
const sortOptions = [
  { name: 'Option1', href: '#', current: true },
  { name: 'Option2', href: '#', current: true },
  { name: 'Option3', href: '#', current: true },
  { name: 'Option4', href: '#', current: true },
  { name: 'Option5', href: '#', current: true },
]

const Hinges = ({products}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div>
      <Head>
        <title>Products -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
<div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  {/* <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button> */}
              {/* <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button> */}
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              {/* <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form> */}

              {/* Product grid */}
              <div className="lg:col-span-4 w-full items-center">
               
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
            </div>
          </section>
        </main>
      </div>
    </div>

    </div>
  )
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readystate){
    await mongoose.connect(process.env.MONGO_URI)
}

  let products = await Product.find({sub_category:'butt hinges'})
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
export default Hinges