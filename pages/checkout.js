import React, { useEffect } from "react";
import Link from "next/link";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineShoppingCart,AiOutlineHeart, AiFillCloseCircle,AiOutlineSearch } from "react-icons/ai";

import { useRouter } from "next/router";

const Checkout = ({ cart, clearCart, addToCart, removeFromCart, subTotal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [promocode, setpromocode] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({ value: null });
  const router=useRouter()
  useEffect(() => {
    if((localStorage.getItem("myuser"))){
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (myuser && myuser.token) {
      setUser(myuser);
      setEmail(myuser.email);
      fetchData(myuser.token);
    }
    }
    // }else{
    //   router.push('/')
    //   toast.error('Please Create An Account or Login to Checkout !!', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });

    // }
  }, []);

  useEffect(() => {
    if (
      name.length >= 3 &&
      email.length > 3 &&
      phone.length > 3 &&
      address.length > 3 &&
      pincode.length > 3
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, phone, pincode, address]);
  const fetchData=async(token)=>{
    let data={token:token,name,address,phone,pincode}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    let res = await a.json();
    setName(res.name)
    setAddress(res.address)
    setPincode(res.pincode)
    setPhone(res.phone)
    getpincode(res.pincode)
  }
const getpincode=async(pin)=>{
  let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
  let pinJson = await pins.json();
  if (Object.keys(pinJson).includes(pin)) {
    setState(pinJson[pin][1]);
    setCity(pinJson[pin][0]);
  } else {
    setState("");
    setCity("");
  }
}
  const handleChange = async (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    }
      else if (e.target.name == "promocode") {
        setpromocode(e.target.value);
    } else if (e.target.name == "pincode") {
      setPincode(e.target.value);
    
      if (e.target.value.length == 6) {
          getpincode(e.target.value)
      } else {
        setState("");
        setCity("");
      }
    }
  };

  const initiatePayment = async () => {
    let oid = Math.floor(Math.random() * Date.now());

    const data = {
      cart,
      subTotal,
      oid,
      email: email,
      name,
      address,
      pincode,
      phone,
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let txnRes = await a.json();
    // console.log(txnRes)
    if (txnRes.success) {
      let txnToken = txnRes.txnToken;

      var config = {
        root: "",
        flow: "DEFAULT",
        data: {
          orderId: oid /* update order id */,
          token: txnToken /* update token value */,
          tokenType: "TXN_TOKEN",
          amount: subTotal /* update amount */,
        },
        handler: {
          notifyMerchant: function (eventName, data) {
            console.log("notifyMerchant handler function called");
            console.log("eventName => ", eventName);
            console.log("data => ", data);
          },
        },
      };

      window.Paytm.CheckoutJS.init(config)
        .then(function onSuccess() {
          // after successfully updating configuration, invoke JS Checkout
          window.Paytm.CheckoutJS.invoke();
        })
        .catch(function onError(error) {
          console.log("error => ", error);
        });
    } else {
      if (txnRes.cartClear) clearCart();
      toast.error(txnRes.error, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="container px-2 sm:m-auto">
      <ToastContainer
        position="top-left"
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
      <Head>
        <title>Checkout -  Instashopee</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Script
        type="application/javascript"
        src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
        crossorigin="anonymous"
      />
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>


      <h2 className="font-semibold text-xl">1. Review Cart Items</h2>
      <div className="sideCart shadow-sm my-2">
        {/* <h2 className="font-bold text-xl text-center">
          Review Your Shopping Cart
        </h2> */}
 <div class=" max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    
    <div class="rounded-lg md:w-2/3">
    
   {Object.keys(cart).map((k)=>{return <div key={k}>
      <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img src={cart[k].img} alt="product-image" class="w-full h-72 rounded-lg sm:w-40 sm:h-40" />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
          <p className="font-semibold text-xl">{cart[k].name}</p>
          <p className="font-semibold text-xl">({cart[k].size}/{cart[k].variant})</p>
          <div class="flex flex-col mt-5">
          <table class="table-fixed">

  <tbody>
    <tr>
      <td>Price</td>
    
      <td>Rs.{cart[k].price}/-</td>
    </tr>
    <tr>
      <td>Delivery Charge</td>
 
      <td>Rs.{cart[k].del_ch}/-</td>
    </tr>
    <tr>
      <td>Amount</td>
    
      <td>Rs.{cart[k].del_ch + (cart[k].price * cart[k].qty)}/-</td>
    </tr>
  </tbody>
</table>
              {/* <p class="">Price - Rs.{cart[k].price}/-</p>
              
              <p class="">Delivery Charge - Rs.{cart[k].del_ch}/-</p>
              <p className="">Amount - Rs.{cart[k].del_ch + (cart[k].price * cart[k].qty)}</p> */}

            </div>
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center border-gray-100">
              <span onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].del_ch,cart[k].img)}} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
              <span className="mx-1">{cart[k].qty}</span>
              <span onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant,cart[k].del_ch,cart[k].img)}} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
             

            </div>
          </div>
            
        </div>
      </div>
      </div>})}
    </div>
    <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      {/* <div class="mb-2 flex justify-between">
        <p class="text-gray-700">Subtotal</p>
        <p class="text-gray-700">$129.99</p>
      </div>
      <div class="flex justify-between">
        <p class="text-gray-700">Delivery Charge</p>
        <p class="text-gray-700">{cart[del_ch]}</p>
      </div> */}
      {Object.keys(cart).length==0&& <div className="font-semibold text-center text-2xl">YOUR CART IS EMPTY !!</div>}
   
      <div className="flex flex-col">


<span className="font-semibold text-green-500">Check Promocode: </span>
<div className="">

 
  <input
    onChange={handleChange}
    value={promocode}
    type="promocode"
    id="promocode"
    name="promocode"
    class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  />

</div>

{promocode=='INSTA100'?<><span className="text-green-500">Promocode Entered Available</span><br/></>:<div/>}
{promocode=='INSTA100'?<span className="font-bold">Subtotal: ₹{subTotal = (subTotal - 100)}</span>:<><span className="text-red-400">No Promocode Entered OR Not Available</span><br/><span className="font-bold">Subtotal: ₹{subTotal}</span></>}

</div>
<hr class="my-4" />
    
   
  
    </div>
  </div>
        {/* <ol className=" font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold text-center">
              YOUR CART IS EMPTY !!
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5 rounded-lg shadow-lg p-5 w-full h-full">
                  <div className="font-semibold flex">
                  <img class="mx-4 h-32 w-32" src={cart[k].img} alt="Product Image"/>
                    </div>

                  <div className="flex flex-col font-semibold text-lg">
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                    <div className="flex font-light items-center mt-4 ml-1">
                    <span className="mr-2">Quantity</span><AiFillMinusCircle
                    
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant,
                          cart[k].img,
                          cart[k].del_ch
                        );
                      }}
                      className="cursor-pointer text-red-400"
                    />
                    <span className="mx-1">{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant,
                          cart[k].img,
                          cart[k].del_ch

                        );
                      }}
                      className="cursor-pointer text-red-400"
                    />
                  <div className="ml-4 mx-1">Rs.{cart[k].price * cart[k].qty}</div>


                  </div>
                  <div className="font-light mx-1">Delivery Charge - Rs.{cart[k].del_ch}</div>
                  <div className=" mx-1">Amount - Rs.{cart[k].del_ch + (cart[k].price * cart[k].qty)}</div>

                  </div>
                
                </div>
              </li>
            );
          })}
        </ol> */}
         
      </div>
      <h2 className="font-semibold text-xl">2. Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              onChange={handleChange}
              value={name}
              type="name"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            {user && user.token ? (
              <input
                value={user.email}
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                readOnly
              />
            ) : (
              <input
                onChange={handleChange}
                value={email}
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            )}
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div class=" mb-4">
          <label for="address" class="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            onChange={handleChange}
            value={address}
            cols="30"
            rows="2"
            id="address"
            name="address"
            class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="phone" class="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              maxLength={10}
              onChange={handleChange}
              value={phone}
              type="phone"
              id="phone"
              name="phone"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="pincode" class="leading-7 text-sm text-gray-600">
              Pincode
            </label>
            <input
              maxLength={6}
              onChange={handleChange}
              value={pincode}
              type="pincode"
              id="pincode"
              name="pincode"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="city" class="leading-7 text-sm text-gray-600">
              District
            </label>
            <input
              onChange={handleChange}
              value={city}
              type="text"
              id="city"
              name="city"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="state" class="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              onChange={handleChange}
              value={state}
              type="text"
              id="state"
              name="state"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 flex p-2 my-4">
        <Link href={"/success"}>
          <button
            disabled={disabled}
            onClick={initiatePayment}
            className="disabled:bg-red-200 flex mx-2 text-white bg-red-500 border-0 p-2 focus:outline-none hover:bg-red-600 rounded text-sm"
          >
            <BsFillBagCheckFill className="m-1" />
            Pay Online ₹{subTotal}
          </button>
        </Link>
        {/* <br /> */}
        {/* <Link href={"/checkout"}>
          <button
            disabled={disabled}
            onClick={initiatePaymentcod}
            className="disabled:bg-red-200 flex mx-2 text-white bg-red-500 border-0 py-2 px-1 focus:outline-none hover:bg-red-600 rounded text-sm"
          >
            <BsFillBagCheckFill className="m-1" />
            Pay Now Using COD ₹{subTotal}
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Checkout;
