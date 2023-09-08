import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Glide from "@glidejs/glide"
import Error from "next/error";
import Product from "@/models/Product";
import Head from "next/head";
const Post = ({buyNow, addToCart,addTowishlist, product, variants,error,cart ,removeFromCart}) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [service, setservice] = useState();
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  useEffect(() => {
if(!error){
    setColor(product.color)
    setSize(product.size)
}
 
  }, [router.query])
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 1000,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])
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
        <div className="container px-5 mx-auto">
          <div className="ml-4 mx-auto flex flex-wrap">
          <div className="py-16">
          <>
      {/*<!-- Component: Slider with indicators & controls inside --> */}
      <div className="2xl:w-[70vh] xl:w-[70vh] lg:w-[60vh] md:relative md:w-[32vh] w-[40vh] items-center glide-03 ">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden " data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li >
              <img
                src={product.img}
                className="hover:scale-105 transition-all duration-500 cursor-pointer h-80 w-80 m-auto"
              />
            </li>
            <li>
              <img
                src={product.img1}
                className="hover:scale-105 transition-all duration-500 cursor-pointer  h-80 w-80 m-auto"
              />
            </li>
            <li>
              <img
              
                src={product.img2}
                className="hover:scale-105 transition-all duration-500 cursor-pointer  h-80 w-80 m-auto"
              />
            </li>
            {/* <li>
              <img
                src={product.img4}
                className="hover:scale-105 transition-all duration-500 cursor-pointer w-full max-w-full max-h-full m-auto"
              />
            </li> */}
            {/* <li>
              <img
                src={product.img5}
                className="w-full max-w-full max-h-full m-auto"
              />
            </li> */}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="md:absolute left-0 flex items-center justify-between w-full h-8 px-4 top-1/2 mt-3 sm: "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className=" flex items-center justify-center w-full gap-2 mt-10"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <img
                src={product.img}
                className="border-2 p-3 border-black hover:scale-105 transition-all duration-500 cursor-pointer  h-20 w-20 "
              />          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
                    <img
                src={product.img1}
                className="border-2 p-3 border-black hover:scale-105 transition-all duration-500 cursor-pointer  h-20 w-20 "
              />          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
          <img
                src={product.img2}
                className="border-2 border-black p-3 hover:scale-105 transition-all duration-500 cursor-pointer  h-20 w-20 "
              />         
              </button>
          {/* <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-2 ring-slate-700 focus:outline-none"></span>
          </button> */}
          {/* <button
            className="p-4 group"
            data-glide-dir="=4"
            aria-label="goto slide 5"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-2 ring-slate-700 focus:outline-none"></span>
          </button> */}
        </div>
      </div>
     
            
      {/*<!-- End Slider with indicators & controls inside --> */}
    </>
            </div>
            {/* <img
              alt="image"
              className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
              src={product.img}
            /> */}
            <div className="md:w-[60vh] 2xl:w-[90vh] w-full md:pl-10 md:py-6 md:mt-5">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                INSTASHOPEE
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title} ({product.size}/{product.color})
              </h1>

              <p className="leading-relaxed">{product.desc}
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

                  {Object.keys(variants).includes("rose gold") &&
                    Object.keys(variants["rose gold"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant("rose gold");
                        }}
                        className={`border-2 rounded-full bg-[#B76E79] hover:bg-[#B76E79] w-6 h-6 focus:outline-none ${
                          color === "rose gold" ? "border-black" : "border-yellow-200"
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
                      {color && Object.keys(variants[color]).includes('5') && (
                        <option value={'5'}>5</option>
                      )}
                      {color && Object.keys(variants[color]).includes('4') && (
                        <option value={'4'}>4</option>
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
                      {color && Object.keys(variants[color]).includes('96') && (
                        <option value={'96'}>96</option>
                      )}
                      {color && Object.keys(variants[color]).includes('100') && (
                        <option value={'100'}>100</option>
                      )}
                      {color && Object.keys(variants[color]).includes('128') && (
                        <option value={'128'}>128</option>
                      )}
                      {color && Object.keys(variants[color]).includes('160') && (
                        <option value={'160'}>160</option>
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
                (-{Math.floor(((product.price-product.mrp)/product.mrp)*100)}% off){/* (-70% Off) */}
                </span>

                
                </div>
                <br />
              <span className="mx-2 border-2 p-2 text-green-500 font-semibold text-sm">Min Order Qty - {product.mqty}</span>
              <br className="xl:hidden" />
                <br className="xl:hidden"/>
              <span className="mx-2 border-2 p-2 text-blue-500 font-semibold text-sm">Delivery Charge For This Product - Rs.{product.del_ch}/-</span>
                <br />
                <br />
              <span className="mx-2 border-2 p-2 text-red-500 font-semibold text-sm">Estimated Delivery Time - {product.edt}</span>
              <br />
                <br />
                <div className="flex">
                {product.availableQty <=0 &&<span className="title-font font-medium text-2xl text-red-700">
                OUT OF STOCK !
                </span>}
                <button disabled={product.availableQty <=0?true:false} onClick={() =>
                    buyNow(slug, 1, product.price, product.title, size, color,product.del_ch,product.img)
                  } className="flex ml-1 mb-5 text-white bg-red-500 disabled:bg-red-300  border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-red-600 rounded">
                  Buy Now
                </button>
                <button disabled={product.availableQty <=0?true:false} 
                  onClick={() => {
                    addToCart(slug, 1, product.price, product.title, size, color,product.del_ch,product.img);
                  }}
                  className="flex ml-5 mb-5 text-white bg-red-500 disabled:bg-red-300  border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Add To Cart
                </button>
                <button onClick={() => {
                    addTowishlist(slug, 1, product.price, product.title, size, color,product.del_ch,product.img);
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
              <div className="hidden pin mt-8  space-x-2 text-sm">
                <input
                  placeholder="Enter your pincode"
                  onChange={onChangePin}
                  className="border-2 px-2 border-gray-400 rounded-md"
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
  return {
    props: {
      error:error,
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    }, //
  };
}

export default Post;
