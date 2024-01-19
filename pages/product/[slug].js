import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Glide from "@glidejs/glide"
import Error from "next/error";
// import ReactImageMagnify from 'react-image-magnify';
import Product from "@/models/Product";
import Head from "next/head";
import ReactImageMagnify from "react-image-magnify";
import Recommended from "@/components/Recommended";
import Link from "next/link";
const Post = ({buyNow, addToCart,addTowishlist, product,products, variants,error,cart }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [service, setservice] = useState();
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [image, setImage] = useState(product.img);
  useEffect(() => {
if(!error){
    setColor(product.color)
    setSize(product.size)
}
 
  }, [router.query])

  const checkServicability = async () => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinJson = await pins.json();
    if (Object.keys(pinJson).includes(pin)) {
      setservice(true);
      toast.success('Your Pincode is serviceable!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      setservice(false);
      toast.error('Sorry, Your Pincode is not serviceable!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };
  const onChangePin = (e) => {
    setPin(e.target.value);
  };
  

  // setTitle("");
  const refreshVariant = (newsize, newcolor) => {
    const url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newcolor][newsize]["slug"]}`;
    
    router.push(url)
  };
  // const refreshVariant = (newsize) => {
  //   // const url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newcolor][newsize][slug]}`;
  //   const url = `${process.env.NEXT_PUBLIC_HOST}/product/${product.title}_${newsize}`;
  //   // const url = `${process.env.NEXT_PUBLIC_HOST}/product/${slug}`;
  //   // window.location = url;
  //   router.push(url)
  // };
  if(error==404){
    return <Error statusCode={404}/>
  }
  const handleImage=()=>{
    setImage(product.img)
  }
  const handleImage1=()=>{
    setImage(product.img1)
  }
  const handleImage2=()=>{
    setImage(product.img2)
  }
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden min-h-screen">
    <Head>
        <title>Product Details -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        

        <div className="sm:hidden flex items-center justify-center text-center">
  

  <img src={image} className="sm:h-[38rem] sm:w-[32rem] h-[28rem] w-full sm:px-0 px-5 " alt="" />
 </div>
  <div className="sm:hidden flex items-center justify-center gap-2 "
  
  >
    <button
      className="p-4 group"
      onClick={handleImage}
     
    >
      <img
          src={product.img}
          className="border-2 p-3 border-black hover:scale-105 transition-all duration-500 cursor-pointer  h-20 w-20 "
        />          </button>
    <button
      className="p-4 group"
      onClick={handleImage1}
    >
              <img
          src={product.img1}
          className="border-2 p-3 border-black hover:scale-105 transition-all duration-500 cursor-pointer  h-20 w-20 "
        />          </button>
    <button
      className="p-4 group"
      onClick={handleImage2}
    >
    <img
          src={product.img2}
          className="border-2 border-black p-3 hover:scale-105 transition-all duration-500 cursor-pointer  h-20 w-20 "
        />         
        </button>
 
  </div>

        <div className="container mx-auto mt-2">
          <div className="mx-auto flex flex-wrap">
          <div className="sm:py-8 py-2">
     
       <div className="hidden md:flex items-center justify-center text-center">
  

        <img src={image} className="sm:h-[38rem] sm:w-[32rem] h-[28rem] w-full sm:px-0 px-5 " alt="" />
       </div>
        <div className="hidden md:flex items-center justify-center gap-2 "
        
        >
          <button
            className="p-4 group"
            onClick={handleImage}
           
          >
            <img
                src={product.img}
                className="border-2 p-3 border-black hover:scale-105 transition-all duration-500 cursor-pointer  h-20 w-20 "
              />          </button>
          <button
            className="p-4 group"
            onClick={handleImage1}
          >
                    <img
                src={product.img1}
                className="border-2 p-3 border-black hover:scale-105 transition-all duration-500 cursor-pointer  h-20 w-20 "
              />          </button>
          <button
            className="p-4 group"
            onClick={handleImage2}
          >
          <img
                src={product.img2}
                className="border-2 border-black p-3 hover:scale-105 transition-all duration-500 cursor-pointer  h-20 w-20 "
              />         
              </button>
       
        </div>
    
     


     
            
   
            </div>
            {/* <img
              alt="image"
              className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
              src={product.img}
            /> */}
            <div className="md:w-[60vh] 2xl:w-[80vh] w-full px-5 md:pl-10 md:py-6 md:mt-5">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                INSTASHOPEE
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title} ({product.size}{product.unit}/{product.color} color)
              </h1>
              <br />
              <p className="leading-relaxed p-2 rounded-lg border bg-gray-50">Description: {product.desc}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>

                  {Object.keys(variants).includes("black") &&
                    Object.keys(variants["black"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "black");
                        }}
                        className={`border-2 rounded-full bg-black hover:bg-black w-6 h-6 focus:outline-none ${
                          color === "black" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("grey") &&
                    Object.keys(variants["grey"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "grey");
                        }}
                        className={`border-2 rounded-full bg-gray-500 hover:bg-gray-500 w-6 h-6 focus:outline-none ${
                          color === "grey" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("RoseGold") &&
                    Object.keys(variants["RoseGold"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "RoseGold");
                        }}
                        className={`border-2 rounded-full bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none bg-blend-saturation ${
                          color === "RoseGold" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("RoseGold/Black") &&
                    Object.keys(variants["RoseGold/Black"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "RoseGold/Black");
                        }}
                        className={`border-2 rounded-full r_to_b w-6 h-6 focus:outline-none bg-blend-saturation ${
                          color === "RoseGold/Black" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}
                  {/* {Object.keys(variants).includes("Black/RoseGold") &&
                    Object.keys(variants["Black/RoseGold"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Black/RoseGold");
                        }}
                        className={`border-2 rounded-full b_to_r w-6 h-6 focus:outline-none bg-blend-saturation ${
                          color === "Black/RoseGold" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )} */}
                  {Object.keys(variants).includes("Black/Gold") &&
                    Object.keys(variants["Black/Gold"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Black/Gold");
                        }}
                        className={`border-2 rounded-full b_to_g w-6 h-6 focus:outline-none bg-blend-saturation ${
                          color === "Black/Gold" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Wood/RoseGold") &&
                    Object.keys(variants["Wood/RoseGold"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Wood/RoseGold");
                        }}
                        className={`border-2 rounded-full wo_to_r w-6 h-6 focus:outline-none bg-blend-saturation ${
                          color === "Wood/RoseGold" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Wood/Gold") &&
                    Object.keys(variants["Wood/Gold"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Wood/Gold");
                        }}
                        className={`border-2 rounded-full wo_to_g w-6 h-6 focus:outline-none bg-blend-saturation ${
                          color === "Wood/Gold" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("White/RoseGold") &&
                    Object.keys(variants["White/RoseGold"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "White/RoseGold");
                        }}
                        className={`border-2 rounded-full wh_to_r w-6 h-6 focus:outline-none bg-blend-saturation ${
                          color === "White/RoseGold" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("White/Gold") &&
                    Object.keys(variants["White/Gold"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "White/Gold");
                        }}
                        className={`border-2 rounded-full wh_to_g w-6 h-6 focus:outline-none bg-blend-saturation ${
                          color === "White/Gold" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Grey/Gold") &&
                    Object.keys(variants["Grey/Gold"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Grey/Gold");
                        }}
                        className={`border-2 rounded-full gr_to_g w-6 h-6 focus:outline-none bg-blend-saturation ${
                          color === "Grey/Gold" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Grey/RoseGold") &&
                    Object.keys(variants["Grey/RoseGold"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Grey/RoseGold");
                        }}
                        className={`border-2 rounded-full gr_to_r w-6 h-6 focus:outline-none bg-blend-saturation ${
                          color === "Grey/RoseGold" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("antique") &&
                    Object.keys(variants["antique"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant("antique");
                        }}
                        className={`border-2 rounded-full bg-[#986335] hover:bg-[#986335] w-6 h-6 focus:outline-none ${
                          color === "antique" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}

                  

                  {Object.keys(variants).includes("white") &&
                    Object.keys(variants["white"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "white");
                        }}
                        className={`border-2 rounded-full bg-white hover:bg-white w-6 h-6 focus:outline-none ${
                          color === "white" ? "border-black" : "border-yellow-200"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("zinc") &&
                    Object.keys(variants["zinc"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "zinc");
                        }}
                        className={`border-2 rounded-full bg-[#BAC4C8] hover:bg-[#BAC4C8] w-6 h-6 focus:outline-none ${
                          color === "zinc" ? "border-black" : "border-yellow-300"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("gold") &&
                    Object.keys(variants["gold"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "gold");
                        }}
                        className={`border-2 rounded-full bg-[#FFD700] hover:bg-[#FFD700] w-6 h-6 focus:outline-none ${
                          color === "gold" ? "border-black" : "border-yellow-300"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("aluminium") &&
                    Object.keys(variants["aluminium"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "aluminium");
                        }}
                        className={`border-2 rounded-full bg-[#848789] hover:bg-[#848789] w-6 h-6 focus:outline-none ${
                          color === "aluminium"
                            ? "border-black"
                            : "border-yellow-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("mocha brown") &&
                    Object.keys(variants["mocha brown"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "mocha brown");
                        }}
                        className={`border-2 rounded-full bg-[#664F40] hover:bg-[#664F40] w-6 h-6 focus:outline-none ${
                          color === "mocha brown"
                            ? "border-black"
                            : "border-yellow-300"
                        }`}
                      ></button>
                    )}
                       {Object.keys(variants).includes("brown") &&
                    Object.keys(variants["brown"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "brown");
                        }}
                        className={`border-2 rounded-full bg-[#964B00] hover:bg-[#964B00] w-6 h-6 focus:outline-none ${
                          color === "brown"
                            ? "border-black"
                            : "border-yellow-300"
                        }`}
                      ></button>
                    )}
                    {Object.keys(variants).includes("wood") &&
                    Object.keys(variants["wood"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "wood");
                        }}
                        className={`border-2 rounded-full bg-[#966F33] hover:bg-[#966F33] w-6 h-6 focus:outline-none ${
                          color === "wood"
                            ? "border-black"
                            : "border-yellow-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("wenge") &&
                    Object.keys(variants["wenge"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "wenge");
                        }}
                        className={`border-2 rounded-full bg-[#645452] hover:bg-[#645452] w-6 h-6 focus:outline-none ${
                          color === "wenge"
                            ? "border-black"
                            : "border-yellow-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("ss") &&
                    Object.keys(variants["ss"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "ss");
                        }}
                        className={`border-2 rounded-full bg-[#b4bdc7] hover:bg-[#b4bdc7] w-6 h-6 focus:outline-none ${
                          color === "ss"
                            ? "border-black"
                            : "border-yellow-300"
                        }`}
                      ></button>
                    )}
                </div>

                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVariant(e.target.value, color);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                    >
                   
                      {color && Object.keys(variants[color]).includes('0') && (
                        <option value={'0'}>0</option>
                      )}
                      {color && Object.keys(variants[color]).includes('1') && (
                        <option value={'1'}>1</option>
                      )}
                      {color && Object.keys(variants[color]).includes('2') && (
                        <option value={'2'}>2</option>
                      )}
                      {color && Object.keys(variants[color]).includes('3') && (
                        <option value={'3'}>3</option>
                      )}
                      {color && Object.keys(variants[color]).includes('4') && (
                          <option value={'4'}>4</option>
                        )}
                      {color && Object.keys(variants[color]).includes('5') && (
                        <option value={'5'}>5</option>
                      )}
                      {color && Object.keys(variants[color]).includes('6') && (
                        <option value={'6'}>6</option>
                      )}
                      {color && Object.keys(variants[color]).includes('7') && (
                        <option value={'7'}>7</option>
                      )}
                      {color && Object.keys(variants[color]).includes('8') && (
                        <option value={'8'}>8</option>
                      )}
                      {color && Object.keys(variants[color]).includes('9') && (
                        <option value={'9'}>9</option>
                      )}
                      {color && Object.keys(variants[color]).includes('10') && (
                        <option value={'10'}>10</option>
                      )}
                      {color && Object.keys(variants[color]).includes('12') && (
                        <option value={'12'}>12</option>
                      )}
                      {color && Object.keys(variants[color]).includes('14') && (
                        <option value={'14'}>14</option>
                      )}
                      {color && Object.keys(variants[color]).includes('15') && (
                        <option value={'15'}>15</option>
                      )}
                      {color && Object.keys(variants[color]).includes('16') && (
                        <option value={'16'}>16</option>
                      )}
                      {color && Object.keys(variants[color]).includes('18') && (
                        <option value={'18'}>18</option>
                      )}
                      {color && Object.keys(variants[color]).includes('20') && (
                        <option value={'20'}>20</option>
                      )}
                      {color && Object.keys(variants[color]).includes('22') && (
                        <option value={'22'}>22</option>
                      )}
                      {color && Object.keys(variants[color]).includes('24') && (
                        <option value={'24'}>24</option>
                      )}
                      {color && Object.keys(variants[color]).includes('26') && (
                        <option value={'26'}>26</option>
                      )}
                      {color && Object.keys(variants[color]).includes('28') && (
                        <option value={'28'}>28</option>
                      )}
                      {color && Object.keys(variants[color]).includes('32') && (
                        <option value={'32'}>32</option>
                      )}
                      {color && Object.keys(variants[color]).includes('34') && (
                        <option value={'34'}>34</option>
                      )}
                      {color && Object.keys(variants[color]).includes('36') && (
                        <option value={'36'}>36</option>
                      )}
                      {color && Object.keys(variants[color]).includes('38') && (
                        <option value={'38'}>38</option>
                      )}
                      {color && Object.keys(variants[color]).includes('40') && (
                        <option value={'40'}>40</option>
                      )}
                      {color && Object.keys(variants[color]).includes('42') && (
                        <option value={'42'}>42</option>
                      )}
                      {color && Object.keys(variants[color]).includes('44') && (
                        <option value={'44'}>44</option>
                      )}
                      {color && Object.keys(variants[color]).includes('46') && (
                        <option value={'46'}>46</option>
                      )}
                      {color && Object.keys(variants[color]).includes('48') && (
                        <option value={'48'}>48</option>
                      )}
                      {color && Object.keys(variants[color]).includes('60') && (
                        <option value={'60'}>60</option>
                      )}
                      {color && Object.keys(variants[color]).includes('65') && (
                        <option value={'65'}>65</option>
                      )}
                      {color && Object.keys(variants[color]).includes('70') && (
                        <option value={'70'}>70</option>
                      )}
                      {color && Object.keys(variants[color]).includes('80') && (
                        <option value={'80'}>80</option>
                      )}
                      {color && Object.keys(variants[color]).includes('86') && (
                        <option value={'86'}>86</option>
                      )}
                      {color && Object.keys(variants[color]).includes('90') && (
                        <option value={'90'}>90</option>
                      )}
                      {color && Object.keys(variants[color]).includes('96') && (
                        <option value={'96'}>96</option>
                      )}
                      {color && Object.keys(variants[color]).includes('100') && (
                        <option value={'100'}>100</option>
                      )}
                      {color && Object.keys(variants[color]).includes('128') && (
                        <option value={'128'}>128</option>
                      )}
                      {color && Object.keys(variants[color]).includes('150') && (
                        <option value={'150'}>150</option>
                      )}
                      {color && Object.keys(variants[color]).includes('160') && (
                        <option value={'160'}>160</option>
                      )}
                      {color && Object.keys(variants[color]).includes('182') && (
                        <option value={'182'}>182</option>
                      )}
                      {color && Object.keys(variants[color]).includes('200') && (
                        <option value={'200'}>200</option>
                      )}
                      {color && Object.keys(variants[color]).includes('224') && (
                        <option value={'224'}>224</option>
                      )}
                      {color && Object.keys(variants[color]).includes('288') && (
                        <option value={'288'}>288</option>
                      )}
                      {color && Object.keys(variants[color]).includes('450') && (
                        <option value={'450'}>450</option>
                      )}
                      {color && Object.keys(variants[color]).includes('600') && (
                        <option value={'600'}>600</option>
                      )}
                      {color && Object.keys(variants[color]).includes('900') && (
                        <option value={'900'}>900</option>
                      )}
                      {color && Object.keys(variants[color]).includes('S') && (
                        <option value={'S'}>S</option>
                      )}
                      {color && Object.keys(variants[color]).includes('M') && (
                        <option value={'M'}>M</option>
                      )}
                      {color && Object.keys(variants[color]).includes('L') && (
                        <option value={'L'}>L</option>
                      )}
                      {color && Object.keys(variants[color]).includes('XL') && (
                        <option value={'XL'}>XL</option>
                      )}
                      {color && Object.keys(variants[color]).includes('2XL') && (
                        <option value={'2XL'}>2XL</option>
                      )}
                      {color && Object.keys(variants[color]).includes('3XL') && (
                        <option value={'3XL'}>3XL</option>
                      )}
                     
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              <span className="mx-2 border-2 p-2">{product.unit}</span>
              </div>
          
        

              <div className="flex mt-2">
              {product.availableQty >0&&<span className="title-font font-medium text-2xl text-gray-900">
                ₹{product.price}/-
                </span>}
                <span className="font-small text-md ml-2 mt-1 text-green-600 line-through">
                ₹MRP {product.mrp}/-
                </span>
                <span className="font-small text-md ml-2 mt-1 text-orange-600">
                ({Math.floor(((product.price-product.mrp)/product.mrp)*100)}% off){/* (-70% Off) */}
                </span>

                
                </div>
                <br />
                <div className="flex mx-auto">
              <span className="mx-2 border-2 my-auto bg-green-50 rounded-lg p-1 text-green-500 font-semibold text-sm">Min Order Qty - {product.mqty}</span>
              <br/>
                <br/>
              {product.del_ch>0?<span className="mx-2 my-auto border-2 bg-blue-50 rounded-lg p-1 text-blue-500 font-semibold text-sm">Delivery Charge - Rs.{product.del_ch}/-</span>:
              <span className="mx-2 border-2 p-1 bg-blue-50 rounded-lg my-auto text-blue-500 font-semibold text-sm">HURRAY! FREE DELIVERY</span>}
              </div>
                <br />
              <span className="mx-2 border-2 p-1 bg-red-50 rounded-lg my-auto text-red-500 font-semibold text-sm">Estimated Delivery Time - {product.edt}</span>
              <br />
                <br />
                <div className="flex flex-col">
                {product.availableQty <=0 &&<span className="title-font font-medium text-2xl text-red-700">
                OUT OF STOCK !
                </span>}
                <div id="bottom-banner" tabindex="-1" className="sm:hidden fixed bottom-0 left-0 z-50 flex justify-between w-full h-20 p-4 border-t border-gray-200 bg-gray-50">
    <div className="flex items-center mx-auto my-auto space-x-1">
       
             
                <button disabled={product.availableQty <=0?true:false} 
                  onClick={() => {
                    addToCart(slug, 1, product.price, product.title, size, color,product.del_ch,product.img,product.unit,product.mqty,product.mqty2);
                  }}
                  className="w-[10rem] ml-1 text-white bg-blue-500 disabled:bg-blue-300  border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-blue-800 rounded"
                >
                  Add To Cart
                </button>
              
             
                <button disabled={product.availableQty <=0?true:false} onClick={() =>
                    buyNow(slug, 1, product.price, product.title, size, color,product.del_ch,product.img,product.unit,product.mqty,product.mqty2)
                  } className="w-[10rem] ml-1  text-white bg-red-500 disabled:bg-red-300  border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-red-800 rounded">
                  Buy Now
                </button>
                <button onClick={() => {
                    addTowishlist(slug, 1, product.price, product.title, size, color,product.del_ch,product.img,product.unit,product.mqty,product.mqty2);
                  }} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
    </div>
 
</div>
                <div className="hidden md:flex flex-row">
                <button disabled={product.availableQty <=0?true:false} 
                  onClick={() => {
                    addToCart(slug, 1, product.price, product.title, size, color,product.del_ch,product.img,product.unit,product.mqty,product.mqty2);
                  }}
                  className="animate-bounce w-[16rem] ml-1 mb-5 text-white bg-blue-500 disabled:bg-blue-300  border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-blue-800 rounded"
                >
                  Add To Cart
                </button>
                <button onClick={() => {
                    addTowishlist(slug, 1, product.price, product.title, size, color,product.del_ch,product.img,product.unit,product.mqty,product.mqty2);
                  }} className=" rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
                </div>
                <button disabled={product.availableQty <=0?true:false} onClick={() =>
                    buyNow(slug, 1, product.price, product.title, size, color,product.del_ch,product.img,product.unit,product.mqty,product.mqty2)
                  } className="hidden md:block w-[16rem] ml-1 mb-5  text-white bg-red-500 disabled:bg-red-300  border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-red-800 rounded">
                  Buy Now
                </button>
              </div>
              <div className="pin mt-2 mb-4  space-x-2 text-sm">
                <input 
                  placeholder="Enter your pincode"
                  onChange={onChangePin}
                  className="border-2 px-2 py-2 border-gray-400 rounded-md"
                  type="text"
                  />
                <button
                  onClick={checkServicability}
                  className=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                  Check Pincode
                </button>
              </div>
              {!service && service != null && (
                <div className="text-red-700 text-sm mt-3">
                  Sorry, We Do Not Deliver To This Pincode Yet !!
                </div>
              )}
              {service && service != null && (
                <div className="text-green-700 text-sm mt-3">
                  Hurray, We Can Deliver To This Pincode !!
                </div>
              )}
              
              </div>
            </div>
          </div>
       
      </section>
      <h1 className="md:ml-28 text-center text-3xl font-bold">Product Information</h1>
      <div className="md:flex items-center text-center justify-center md:space-x-36">

              <div class="relative">
  <img src={product.img} alt="Your Image" class="opacity-70 rounded-full p-3 h-96 w-96 items-center text-center mx-auto justify-between" />

  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <p class="text-black text-lg font-bold">Elegant Design</p>
  </div>
</div>
              <div class="relative">
  <img src={product.img1} alt="Your Image" class="opacity-70 rounded-full p-3 h-96 w-96 items-center text-center mx-auto justify-between" />

  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <p class="text-black text-lg font-bold">Strong & Powerfull</p>
  </div>
</div>
              <div class="relative">
  <img src={product.img2} alt="Your Image" class="opacity-70 rounded-full p-3 h-96 w-96 items-center text-center mx-auto justify-between" />

  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <p class="text-black text-lg font-bold">Easily Fits</p>
  </div>
</div>
        </div>
        <br />
        <br />
        <div class="border-t-2 border-black w-full"></div>
        <br />
        <h1 className=" text-3xl text-black font-bold mx-14">Some More Items !</h1>
        <br />
        <div className="flex flex-wrap -m-4 justify-center">

       
        {Object.keys(products).slice(0,10).map((item)=>{
// _id inside key of link
return <a key={products[item].id} passHref={true} legacyBehavior href={`${products[item].slug}`}>
  <div className="lg:w-[20rem] md:w-1/2 p-4 w-80 sm:h-[31rem] h-[28rem] sm:m-2 cursor-pointer shadow-lg  productCard transition-all">
     <div className='z-50 textPart'><span className="rounded-md bg-red-500 p-1 text-sm text-white ">{Math.floor(((products[item].price-products[item].mrp)/products[item].mrp)*100)}% Off</span></div>
    <div className="block relative rounded textPart mt-1">
      <img alt="Instashopee" className="w-60 sm:h-64 h-52 m-auto block" src={products[item].img}/>
    </div>
    <div className="mt-2 text-center md:text-left">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 textPart">{products[item].category}</h3>
      <h2 className="text-gray-900 title-font md:text-lg font-medium textPart">{products[item].title}</h2>
      <div className='flex'>
      <span className="text-md mr-2 text-gray-400 line-through textPart">
        
      ₹{products[item].mrp}/-
                </span>
        <span className="textPart md:text-lg text-green-600 font-semibold">₹{products[item].price}/-</span>
               
                </div>
                <div className="mt-1 textPart py-2">
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
        {products[item].size.includes("14") && (<span className="border border-gray-300 px-1 mx-1">14</span>)}
        {products[item].size.includes("15") && (<span className="border border-gray-300 px-1 mx-1">15</span>)}
        {products[item].size.includes("16") && (<span className="border border-gray-300 px-1 mx-1">16</span>)}
        {products[item].size.includes("18") && (<span className="border border-gray-300 px-1 mx-1">18</span>)}
        {products[item].size.includes("19") && (<span className="border border-gray-300 px-1 mx-1">19</span>)}
        {products[item].size.includes("20") && (<span className="border border-gray-300 px-1 mx-1">20</span>)}
        {products[item].size.includes("21") && (<span className="border border-gray-300 px-1 mx-1">21</span>)}
        {products[item].size.includes("22") && (<span className="border border-gray-300 px-1 mx-1">22</span>)}
        {products[item].size.includes("24") && (<span className="border border-gray-300 px-1 mx-1">24</span>)}
        {products[item].size.includes("25") && (<span className="border border-gray-300 px-1 mx-1">25</span>)}
        {products[item].size.includes("26") && (<span className="border border-gray-300 px-1 mx-1">26</span>)}
        {products[item].size.includes("28") && (<span className="border border-gray-300 px-1 mx-1">28</span>)}
        {products[item].size.includes("30") && (<span className="border border-gray-300 px-1 mx-1">30</span>)}
        {products[item].size.includes("32") && (<span className="border border-gray-300 px-1 mx-1">32</span>)}
        {products[item].size.includes("34") && (<span className="border border-gray-300 px-1 mx-1">34</span>)}
        {products[item].size.includes("35") && (<span className="border border-gray-300 px-1 mx-1">35</span>)}
        {products[item].size.includes("36") && (<span className="border border-gray-300 px-1 mx-1">36</span>)}
        {products[item].size.includes("38") && (<span className="border border-gray-300 px-1 mx-1">38</span>)}
        {products[item].size.includes("40") && (<span className="border border-gray-300 px-1 mx-1">40</span>)}
        {products[item].size.includes("40") && (<span className="border border-gray-300 px-1 mx-1">40</span>)}
        {products[item].size.includes("42") && (<span className="border border-gray-300 px-1 mx-1">42</span>)}
        {products[item].size.includes("44") && (<span className="border border-gray-300 px-1 mx-1">44</span>)}
        {products[item].size.includes("46") && (<span className="border border-gray-300 px-1 mx-1">46</span>)}
        {products[item].size.includes("48") && (<span className="border border-gray-300 px-1 mx-1">48</span>)}
        {products[item].size.includes("50") && (<span className="border border-gray-300 px-1 mx-1">50</span>)}
        {products[item].size.includes("60") && (<span className="border border-gray-300 px-1 mx-1">60</span>)}
        {products[item].size.includes("65") && (<span className="border border-gray-300 px-1 mx-1">65</span>)}
        {products[item].size.includes("70") && (<span className="border border-gray-300 px-1 mx-1">70</span>)}
        {products[item].size.includes("75") && (<span className="border border-gray-300 px-1 mx-1">75</span>)}
        {products[item].size.includes("80") && (<span className="border border-gray-300 px-1 mx-1">80</span>)}
        {products[item].size.includes("86") && (<span className="border border-gray-300 px-1 mx-1">86</span>)}
        {products[item].size.includes("90") && (<span className="border border-gray-300 px-1 mx-1">90</span>)}
        {products[item].size.includes("96") && (<span className="border border-gray-300 px-1 mx-1">96</span>)}
        {products[item].size.includes("100") && (<span className="border border-gray-300 px-1 mx-1">100</span>)}
        {products[item].size.includes("128") && (<span className="border border-gray-300 px-1 mx-1">128</span>)}
        {products[item].size.includes("150") && (<span className="border border-gray-300 px-1 mx-1">150</span>)}
        {products[item].size.includes("160") && (<span className="border border-gray-300 px-1 mx-1">160</span>)}
        {products[item].size.includes("182") && (<span className="border border-gray-300 px-1 mx-1">182</span>)}
        {products[item].size.includes("200") && (<span className="border border-gray-300 px-1 mx-1">200</span>)}
        {products[item].size.includes("224") && (<span className="border border-gray-300 px-1 mx-1">224</span>)}
        {products[item].size.includes("250") && (<span className="border border-gray-300 px-1 mx-1">250</span>)}
        {products[item].size.includes("288") && (<span className="border border-gray-300 px-1 mx-1">288</span>)}
        {products[item].size.includes("300") && (<span className="border border-gray-300 px-1 mx-1">300</span>)}
        <br />
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
        {products[item].color.includes("RoseGold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("antique") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("black") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-black hover:bg-black w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("white") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-white hover:bg-white w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("gold") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#FFD700] hover:bg-[#FFD700] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("aluminium") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#848789] hover:bg-[#848789] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("wenge") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#645452] hover:bg-[#645452] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("ss") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#b4bdc7] hover:bg-[#b4bdc7] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("mocha brown") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#664F40] hover:bg-[#664F40] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("grey") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-gray-500 hover:bg-gray-500 w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("brown") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#964B00] hover:bg-[#964B00] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("wood") && (<button className="border-2 border-gray-300 rounded-full bg-none bg-[#966F33] hover:bg-[#966F33] w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("RoseGold/Black") && (<button className="border-2 border-gray-300 rounded-full bg-none r_to_b w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("Black/RoseGold") && (<button className="border-2 border-gray-300 rounded-full bg-none b_to_r w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("Black/Gold") && (<button className="border-2 border-gray-300 rounded-full bg-none b_to_g w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("Wooden/RoseGold") && (<button className="border-2 border-gray-300 rounded-full bg-none wo_to_r w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("Wooden/Gold") && (<button className="border-2 border-gray-300 rounded-full bg-none wo_to_g w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("White/RoseGold") && (<button className="border-2 border-gray-300 rounded-full bg-none wh_to_r w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("White/Gold") && (<button className="border-2 border-gray-300 rounded-full bg-none wh_to_g w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("Grey/RoseGold") && (<button className="border-2 border-gray-300 rounded-full bg-none gr_to_r w-6 h-6 focus:outline-none"></button>)}
        {products[item].color.includes("Grey/Gold") && (<button className="border-2 border-gray-300 rounded-full bg-none gr_to_g w-6 h-6 focus:outline-none"></button>)}

        </div>

    </div>
  </div>
  </a>})}
  </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let error=null;
  if (!mongoose.connections[0].readystate) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let product = await Product.findOne({ slug: context.query.slug });
  if(product==null){
    return {
      props: {
        error:404}
  }}
  let variants = await Product.find({
    title: product.title,
    category: product.category,
  });
  let colorSizeSlug = {};
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }

  
    let products = await Product.find({category:product.category})
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
  return {
    props: {
      error:error,
      product: JSON.parse(JSON.stringify(product)),
      products:JSON.parse(JSON.stringify(hinges)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug))
    }, //
  };
}




  

export default Post;

