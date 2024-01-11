import Link from 'next/link'
import React from 'react'

const Admin_sidebar = () => {
  return (
 <div>

<nav className="bg-gray-900 fixed w-full z-40 top-0 left-0 border-b  border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/admin" className="flex items-center justify-center mx-auto mb-2">
      <img src="/logo1.png" className="h-11 mr-3" alt="Instashopee Logo"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white text-center">Instashopee Admin</span>
  </a>

  <div className="flex md:order-2">
      
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:flex-row md:space-x-2 md:mt-0 md:border-0 ">
      <li>
        <Link legacyBehavior href={"/admin"}><a className="block py-2 pl-3 pr-4 text-white" aria-current="page">Home</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={"/a.html"}><a className="block py-2 pl-3 pr-4 text-white ">Add Images</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={"/admin/add"}><a className="block py-2 pl-3 pr-4 text-white">Add Products</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={"/admin/edit"}><a className="block py-2 pl-3 pr-4 text-white">Edit Products</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={"/admin/delete"}><a className="block py-2 pl-3 pr-4 text-white">Delete Products</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={"/admin/allproducts"}><a className="block py-2 pl-3 pr-4 text-white">View All Products</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={"/admin/allorders"}><a className="block py-2 pl-3 pr-4 text-white ">View All Orders</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={"/admin/allusers"}><a className="block py-2 pl-3 pr-4 text-white ">View All Users</a></Link>
      </li>
      <li>
        <Link legacyBehavior href={"/"}><a className="block py-2 pl-3 pr-4 text-white ">View Website</a></Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
<br />
<br />
 </div>
  )
}

export default Admin_sidebar