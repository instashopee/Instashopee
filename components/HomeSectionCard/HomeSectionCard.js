import Link from "next/link";
import React from "react";
import { Router } from "react-router-dom";
const HomeSectionCard = ({ product }) => {

  return (
    <Link legacyBehavior href={`${process.env.NEXT_PUBLIC_HOST}/${product.href}`}>
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border ">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-contain w-[20rem] h-[12rem]"
          src={product.imageUrl}
          alt=""
        ></img>
      </div>
      <div className="py-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
        <div className='flex'>
        <p className="mt-1 textPart">₹{product.price}/-</p>
      <span className="font-small text-md ml-2 mt-1 text-green-600 line-through textPart">
                ₹MRP {product.mrp}/-
                </span>
                <span className="font-small text-md ml-2 mt-1 text-orange-600 textPart">
                (-{Math.floor(((product.mrp-product.price)/product.mrp)*100)}% off){/* (-70% Off) */}
                </span></div>
      <p className="mt-1 textPart border-2 p-2 text-center">Size - {product.size}</p>
      </div>
    </div></Link>
  );
};

export default HomeSectionCard;
