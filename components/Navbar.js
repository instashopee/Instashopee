import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlineShoppingCart,AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle,AiOutlineSearch } from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md"
import {BsFillBagCheckFill} from "react-icons/bs"
import Hardware_Fittings from "@/sub_category_pg/hardware_fittings";
import Kitchen_Acc from "@/sub_category_pg/kitchen_acc";
// import sidebar from "@/sub_category_pg/sidebar";
import Deco_Panel from "@/sub_category_pg/decorative_panel";
import Ward_fitt from "@/sub_category_pg/wardrobe_fitt";
import Garments from "@/sub_category_pg/garments";
import Bathroom_Acc from "@/sub_category_pg/bathroom_fitt";
import Home_Automation from "@/sub_category_pg/home_auto";
import { Fragment } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { navigation } from "./Navigation/NavigationData";
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import { Avatar } from "@mui/material";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = ({Logout,user,cart,addToCart,removeFromCart,clearCart,subTotal}) => {
  const [dropdown, setDropdown] = useState(false)

  const [open, setOpen] = useState(false);
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
 
  
  return (
    <div>
   
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        {/* <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div> */}
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      <Avatar sx={{}} alt="" src="" />
                    </a>
                  </div>
                  {/* <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div> */}
                </div>

                {/* <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-7 items-center justify-center bg-rose-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Instashopee - The Ecommerce Store !!
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link legacyBehavior href={"/"}>
                <a >
                  <span className="sr-only">Instashopee</span>
                  <img className="h-8 w-auto" src="/logo1.png" alt="Logo" />
                </a></Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {/* {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))} */}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <Link legacyBehavior href={'/'+item.href}>
                                                <a
                                                // onClick={()=>
                                                  // handleCategoryClick(
                                                  //   category,
                                                  //   section,
                                                  //   item,
                                                  //   close
                                                  // )
                                                
                                                
                                                // }
                                                  
                                                  className="cursor-pointer hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a></Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
              
      <div  className="hidden xl:flex cursor-pointer items-center cart absolute right-0 top-12 mx-5">
      <Link legacyBehavior href={'/search'}><a><div className="border-red-400 flex mx-1 border-1 md:mx-2  border-2 rounded-lg px-2 ">
      <AiOutlineSearch className="text-sm md:text-md mx-1 m-auto"/>
      <label className="text-sm md:text-md mx-1 cursor-pointer font-semibold" htmlFor="">Search</label>
        </div></a></Link>

        {<Link legacyBehavior href={'/cart'}><a><div className="border-red-400 flex mx-1 border-1 md:mx-2  border-2 rounded-lg px-2 ">
        <AiOutlineShoppingCart  className="text-sm md:text-md mx-1 m-auto" />
        <label className="text-sm md:text-md mx-1 cursor-pointer font-semibold" htmlFor="">Cart</label>
        </div></a></Link>}

        
        <span onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} >
          {dropdown&&<div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute right-0 bg-white shadow-lg py-1 border top-6 rounded-md px-5 w-30 z-50">
            <ul>
        <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 font-semibold hover:text-red-500 text-center text-md">Account Page</li></a></Link>
        <Link legacyBehavior href={'/orders'}><a><li className="py-1 font-semibold hover:text-red-500 text-center text-md">Orders</li></a></Link>
        <li onClick={Logout} className="py-1 font-semibold hover:text-red-500 text-center text-md">Logout</li></ul>
      </div>}

        {user.value &&<Link legacyBehavior href={'/'}><a><div className=" border-red-400 flex mx-1 border-1 md:mx-2  border-2 rounded-lg px-2 ">
        <MdAccountCircle   className="text-sm md:text-md mx-1 m-auto"/>
        <label className="text-sm md:text-md mx-1 cursor-pointer font-semibold" htmlFor="">MyAccount</label>
        </div></a></Link>
        }</span>
        

        {!user.value &&<Link legacyBehavior href={'/login'}><a><div className=" border-red-400 flex mx-1 border-1 md:mx-2  border-2 rounded-lg px-2 ">
        <MdAccountCircle className="text-sm md:text-md mx-1 m-auto"/>
        <label className="text-sm md:text-md mx-1 cursor-pointer font-semibold" htmlFor="">Login</label>
        </div></a></Link>}

      </div>
      
<div class="2xl:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
    <Link legacyBehavior href={'/'}><a>{<button type="button" class="my-4 inline-flex flex-col items-center justify-center px-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
</svg>
            <span class="text-sm text-gray-500 dark:text-gray-400">Home</span>
        </button>}</a></Link>
        <Link legacyBehavior href={'/hinges'}><a>{<button type="button" class="my-4 inline-flex flex-col items-center justify-center px-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg>
            <span class="text-sm text-gray-500 dark:text-gray-400">Products</span>
        </button>}</a></Link>
        <Link legacyBehavior href={'/cart'}><a>{<button type="button" class="my-4 inline-flex flex-col items-center justify-center px-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>

            <span class="text-sm text-gray-500 dark:text-gray-400 ">Cart</span>
        </button>}</a></Link>
        <Link legacyBehavior href={'/login'}><a>{<button type="button" class="my-4 inline-flex flex-col items-center justify-center px-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>


            <span class="text-sm text-gray-500 dark:text-gray-400">Profile</span>
        </button>}</a></Link>
    </div>
</div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
    </div>
//     <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl sticky top-0 bg-white z-10">
//       <div className="logo mr-auto md:mx-5">
//         <Link legacyBehavior href={"/"}>
//           <a>
//             <Image className="scale-100 mx-3 md:p-0" width={30} height={30} src="/logo1.png" alt="" />
//           </a>
//         </Link>
//       </div>
//       <div className="nav">
//         <ul className="hidden text-sm md:flex items-center space-x-6">

//           {/* <sidebar/> */}
//           <Hardware_Fittings/>
          
//           <Kitchen_Acc/>
//           <Deco_Panel/>
//           <Ward_fitt/>
//           <Bathroom_Acc/>
//           <Home_Automation/>
//           <Garments/>



//           {/* <Link legacyBehavior href={"/hinges"}>
//             <a>
//               <li className="hover:text-red-800">Door Accessories</li>
//             </a>
//           </Link>
//           <Link legacyBehavior href={"/screws"}>
//             <a>
//               <li className="hover:text-red-800">Kitchen Accessories</li>
//             </a>
//           </Link>
//           <Link legacyBehavior href={"/screws"}>
//             <a>
//               <li className="hover:text-red-800">Glass Fittings</li>
//             </a>
//           </Link>

//           <Link legacyBehavior href={"/screws"}>
//             <a>
//               <li className="hover:text-red-800">Bathroom Fittings</li>
//             </a>
//           </Link>
//           <Link legacyBehavior href={"/screws"}>
//             <a>
//               <li className="hover:text-red-800">Garments</li>
//             </a>
//           </Link> */}

//         </ul>
        
//       </div>

 
//       <div  className="md:hidden cursor-pointer absolute right-1">
        
// <form>   
//     <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//     <div class="relative">
//         <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//             </svg>
//         </div>
//         <input type="search" id="default-search" class="block w-[40vh] h-[5vh] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Search..." required/>
//         <button type="submit" class="h-[4vh] text-white absolute top-1 right-1 bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Search</button>
//     </div>
// </form>

//       </div>



//       <div  className="hidden xl:flex cursor-pointer items-center cart absolute right-0 top-5 mx-5">
//       <Link legacyBehavior href={'/search'}><a><div className="bg-red-100  border-red-400 flex mx-1 border-1 md:mx-2  border-2 rounded-lg px-2 ">
//       <AiOutlineSearch className="text-sm md:text-md mx-1 m-auto"/>
//       <label className="text-sm md:text-md mx-1 cursor-pointer font-semibold" htmlFor="">Search</label>
//         </div></a></Link>

//         {<Link legacyBehavior href={'/cart'}><a><div className=" bg-red-100 border-red-400 flex mx-1 border-1 md:mx-2  border-2 rounded-lg px-2 ">
//         <AiOutlineShoppingCart  className="text-sm md:text-md mx-1 m-auto" />
//         <label className="text-sm md:text-md mx-1 cursor-pointer font-semibold" htmlFor="">Cart</label>
//         </div></a></Link>}

        
//         <span onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} >
//           {dropdown&&<div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute right-0 bg-white shadow-lg py-1 border top-6 rounded-md px-5 w-30">
//             <ul>
//         <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 font-semibold hover:text-red-500 text-center text-md">Account Page</li></a></Link>
//         <Link legacyBehavior href={'/orders'}><a><li className="py-1 font-semibold hover:text-red-500 text-center text-md">Orders</li></a></Link>
//         <li onClick={Logout} className="py-1 font-semibold hover:text-red-500 text-center text-md">Logout</li></ul>
//       </div>}

//         {user.value &&<Link legacyBehavior href={'/'}><a><div className=" bg-red-100 border-red-400 flex mx-1 border-1 md:mx-2  border-2 rounded-lg px-2 ">
//         <MdAccountCircle   className="text-sm md:text-md mx-1 m-auto"/>
//         <label className="text-sm md:text-md mx-1 cursor-pointer font-semibold" htmlFor="">MyAccount</label>
//         </div></a></Link>
//         }</span>
        

//         {!user.value &&<Link legacyBehavior href={'/login'}><a><div className=" bg-red-100 border-red-400 flex mx-1 border-1 md:mx-2  border-2 rounded-lg px-2 ">
//         <MdAccountCircle className="text-sm md:text-md mx-1 m-auto"/>
//         <label className="text-sm md:text-md mx-1 cursor-pointer font-semibold" htmlFor="">Login</label>
//         </div></a></Link>}

//       </div>
      
// <div class="2xl:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-red-50 border-t border-gray-200">
//     <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
//     <Link legacyBehavior href={'/'}><a>{<button type="button" class="my-4 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
//   <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
// </svg>
//             <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
//         </button>}</a></Link>
//         <Link legacyBehavior href={'/hinges'}><a>{<button type="button" class="my-4 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
//   <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
// </svg>
//             <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Products</span>
//         </button>}</a></Link>
//         <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
//   <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
// </svg>

//             <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Cart</span>
//         </button>
//         <Link legacyBehavior href={'/login'}><a>{<button type="button" class="my-4 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
//   <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
//   <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
// </svg>


//             <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
//         </button>}</a></Link>
//     </div>
// </div>

// {/* 
//       <div ref={ref} className={`h-screen sidebar absolute overflow-y-scroll right-0 top-0 p-10 bg-pink-50 z-10 backdrop-filter backdrop-blur-lg shadow-xl ring-1 ring-gray-900/5 transform transition-transform ${Object.keys(cart).length === 0? 'translate-x-full':'translate-x-0'} z-10`}>
//         <h2 className="text-xl font-bold text-center">Shopping Cart</h2>
//         <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-red-500"><AiFillCloseCircle/></span>
//         <ol className="list-decimal font-semibold">
//           {Object.keys(cart).length==0&& <div className="my-4 font-semibold text-center">YOUR CART IS EMPTY !!</div>}
//           {Object.keys(cart).map((k)=>{return <li key={k}>
//             <div className="item flex my-5">
//             <div className="w-2/3 font-semibold">{cart[k].name}</div>
//             <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}className="cursor-pointer text-red-400"/><span className="mx-1">{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}className="cursor-pointer text-red-400"/></div>
//             </div>
//           </li>})}
//         </ol>
//         <div className="font-bold mt-6 my-4">Subtotal: ₹{subTotal}</div>
//         <div className="flex mt-4">

//         <Link href={'/checkout'}><button className="flex mx-2 text-white bg-red-500 border-0 py-2 px-1 focus:outline-none hover:bg-red-600 rounded text-sm"><BsFillBagCheckFill className="m-1"/>Checkout</button></Link>
//         <button onClick={clearCart} className="flex mx-2 text-white bg-red-500 border-0 py-2 px-1 focus:outline-none hover:bg-red-600 rounded text-sm"><BsFillBagCheckFill className="m-1"/>Clear Cart</button>
        
//         </div>

//       </div> */}

    
//     </div>
  );
};

export default Navbar;
