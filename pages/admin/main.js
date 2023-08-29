import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
// import { AiOutlineShoppingCart,AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle,AiOutlineSearch } from "react-icons/ai";
// import {MdAccountCircle} from "react-icons/md"
// import {BsFillBagCheckFill} from "react-icons/bs"
// import Hardware_Fittings from "@/sub_category_pg/hardware_fittings";
// import Kitchen_Acc from "@/sub_category_pg/kitchen_acc";
// // import sidebar from "@/sub_category_pg/sidebar";
// import Deco_Panel from "@/sub_category_pg/decorative_panel";
// import Ward_fitt from "@/sub_category_pg/handles_knobs";
// import Garments from "@/sub_category_pg/garments";
// import Bathroom_Acc from "@/sub_category_pg/bathroom_fitt";
// import Home_Automation from "@/sub_category_pg/home_auto";
const main = ({Logout,user,cart,addToCart,removeFromCart,clearCart,subTotal}) => {
  const [dropdown, setDropdown] = useState(false)

  // const toggleCart=()=>{
  //   if(ref.current.classList.contains('translate-x-full')){
  //     ref.current.classList.remove('translate-x-full')
  //     ref.current.classList.add('translate-x-0')
  //   }
  //   else if(!ref.current.classList.contains('translate-x-full')){
  //     ref.current.classList.remove('translate-x-0')
  //     ref.current.classList.add('translate-x-full')
  //   }

  // }
  const ref=useRef()
  return (
      <div className="text-3xl font-bold text-center my-5 text-decoration-line: underline">INSTASHOPEE ADMIN PANEL
    <div className="min-h-screen justify-center my-5">
      <style jsx global>{`
      footer {
        display: none;
      }
  
      `}</style>
      
    <div className="flex flex-col md:justify-start justify-center items-center py-5 top-0 sticky bg-white">
      <div className="nav ">
        <ul className="hidden text-sm md:flex items-center space-x-6 top-0">

         
            
          
          <Link legacyBehavior href={"/admin/add"}>
            <a>
              <li className="hover:text-red-800 text-3xl font-semibold p-2 border-4">Add Products</li>
            </a>
          </Link>
          <Link legacyBehavior href={"/admin/allproducts"}>
            <a>
              <li className="hover:text-red-800 text-3xl font-semibold p-2 border-4">View All Products</li>
            </a>
          </Link>
          {/* <Link legacyBehavior href={"/admin/imageuploaders"}>
            <a>
              <li className="hover:text-red-800">Image Uploader</li>
            </a>
          </Link> */}

          <Link legacyBehavior href={"/admin/allorders"}>
            <a>
              <li className="hover:text-red-800 text-3xl font-semibold p-2 border-4">All Orders</li>
            </a>
          </Link>


        </ul>
        
      </div>
      <br />
      <div className="space-x-6">

      <Link legacyBehavior href={"/admin/delete"}>
            <a
               className="hover:text-red-800 text-3xl font-semibold p-2 border-4">Delete Product
            </a>
          </Link>
      <Link legacyBehavior href={"/admin/allorders"}>
            <a
               className="hover:text-red-800 text-3xl font-semibold p-2 border-4">Update Product
            </a>
          </Link>
      {/* <Link legacyBehavior href={"/admin/allorders"}>
            <a
               className="hover:text-red-800 text-3xl font-semibold p-2 border-4">Delete Product
            </a>
          </Link> */}
      </div>
    </div>
    </div>
    </div>
  );
};

export default main;
