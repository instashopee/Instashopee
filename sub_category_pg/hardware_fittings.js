import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";


  // }
const Hardware_Fittings = () => {
    const [dropdown, setDropdown] = useState(false)
  return (

<div>


    <span  onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} >
    {dropdown&&<div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute bg-white shadow-lg py-1 px-4 border my-5 rounded-lg p-3">
<div>
<div className={`left-0 bg-white z-10`}>
        <ol >
           <li className=" flex-row">

  <div>
    
  <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 text-red-500 text-lg font-bold">Hinges</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Butt Hinges</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Auto Hinges</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Hydraulic Hinges</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Piano Hinges</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Other Hinges</li></a></Link>
  <hr />
  </div>

  <div >
  <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 text-red-500 text-lg font-bold">Aluminium Profile</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Handle profile</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Frame Profile</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Frame With Hnadle Profile</li></a></Link>
  <hr />
  </div>

  <div>
  <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 text-red-500 text-lg font-bold">Door  Accessories</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Door Stopper</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Door Closer</li></a></Link>
  <hr />
  </div>
  </li>
  </ol>

      </div> 
    
</div>
    {/* 


    <div>
    <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 text-red-500 text-lg font-bold">Hinges</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Butt Hinges</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Auto Hinges</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Hydraulic Hinges</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Piano Hinges</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Other Hinges</li></a></Link>
  <hr />
  </div>

  
    <div >
    <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 text-red-500 text-lg font-bold">Aluminium Profile</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Handle profile</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Frame Profile</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Frame With Hnadle Profile</li></a></Link>

  <hr />



  </div>
    <div>
    <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 text-red-500 text-lg font-bold">Door Accessories</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Door Stopper</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Door Closer</li></a></Link>


  <hr />
  </div>
    <div>
    <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 text-red-500 text-lg font-bold">Handles</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Cabinet Handles</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Main Door Handles</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Mortice Handles</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Glass Door Handles</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Knobs</li></a></Link>

  <hr />



  </div>



  
    <div>
    <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 text-red-500 text-lg font-bold">General Hardware</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Tower Bolts</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Magnetic Catcher</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Locks</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 hover:text-red-500 text-sm">Screws</li></a></Link>

  <hr />
  </div> */}

</div>

}

  {
  
  <Link legacyBehavior href={"/hinges"}>
  <a>
    <li className="text-sm px-2 md:text-sm md:hover:scale-110 transition-all duration-500 cursor-pointer w-full max-w-full max-h-full m-auto font-semibold">Hardware Fittings</li>
  </a>
</Link>

  }</span>
  </div>
  )
  }
export default Hardware_Fittings;