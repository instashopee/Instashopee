import Link from 'next/link'
import React, { useEffect } from 'react'
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from 'mongoose';
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Head from "next/head";
import Size_Color from '@/components/Size_Color';

const Hinges = ({products}) => {
  useEffect(() => {
    
  }, [])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  // const sortOptions = [
  //   { name: 'Most Popular', href: '#', current: false },
  //   { name: 'Best Rating', href: '#', current: false },
  //   { name: 'Newest', href: '#', current: false },
  //   { name: 'Price: Low to High', href: '#', current: false },
  //   { name: 'Price: High to Low', href: '#', current: false },
  // ]

  const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'RoseGold', label: 'RoseGold', checked: false},
        { value: 'black', label: 'Black', checked: false },
        { value: 'gold', label: 'Gold', checked: false },
        { value: 'ss', label: 'SS', checked: false },
        // { value: 'green', label: 'Green', checked: false },
        // { value: 'purple', label: 'Purple', checked: false },
      ],
    },

    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '96', label: '96 mm', checked: false },
        { value: '160', label: '160 mm', checked: false },
        { value: '288', label: '280 mm', checked: false },
        { value: '450', label: '450 mm', checked: false },
        { value: '600', label: '600 mm', checked: false },
        { value: '900', label: '900 mm', checked: false },
      ],
    },
    // {
    //   id: 'price',
    //   name: 'Price',
    //   options: [
    //     { value: '-price', label: 'Low To High', checked: false },
    //     { value: 'price', label: 'High To low', checked: false },
    //   ],
    // },
  ]
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

    <div className="bg-white min-h-screen">
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
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                  

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
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  {/* <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button> */}
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
                      {/* {sortOptions.map((option) => (
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
                      ))} */}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

           
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/cabinet_handles?sub_category=cabinet%20handles`}><a><button className='underline text-red-600'>Remove Filters</button></a></Link>
               

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
                              
                                <Link legacyBehavior href={`cabinet_handles?${section.id}=${option.value}&sub_category=cabinet%20handles`}><a><label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 cursor-pointer hover:underline text-sm text-gray-600"
                                >
                                  {option.label}
                                </label></a></Link>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}

              </form>

              {/* Product grid */}
              <div className="lg:col-span-4"> <Size_Color products={products}/>
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
// const {color}=context.query
// const queryObject={}
// if (color){
//   queryObject.color={$regex:color,$options:"i"}
// }
let products = await Product.find(context.query)
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