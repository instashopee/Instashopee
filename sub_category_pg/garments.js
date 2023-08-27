import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const Garments = () => {
    const [dropdown, setDropdown] = useState(false)
  return (


    <span  onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} >
    {dropdown&&<div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute columns-2 bg-white shadow-lg py-1 px-4 border my-5 rounded-lg p-3 ">
      
    <div >

    <div>
    <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 text-red-500 text-md font-bold">Mens Wear</li></a></Link>
    <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Shirts</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">T-Shirts</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Jackets</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Jeans</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Trousers</li></a></Link>
  <hr />
  </div>

    <div>
    <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 text-red-500 text-md font-bold">Womens Wear</li></a></Link>
    <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Suits</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Sarees</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Western Wear</li></a></Link>
  <hr />

  </div>






</div>
</div>}

  {
  
  <Link legacyBehavior href={"/hinges"}>
  <a>
    <li className="text-sm md:hover:scale-110 transition-all duration-500 cursor-pointer w-full max-w-full max-h-full m-auto font-semibold">Clothings</li>
  </a>
</Link>
  /* {<Link legacyBehavior href={'/'}><a><div className=" bg-red-100 border-red-400 flex mx-1 border-1 md:mx-2  border-2 rounded-lg px-2 ">

  <label className="text-sm md:text-lg mx-1 cursor-pointer font-semibold" htmlFor="">Hardware Fittings</label>
  </div></a></Link> */
  }</span>

  )
  }
export default Garments;