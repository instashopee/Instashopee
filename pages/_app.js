import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  const [cart,setCart]=useState({})
  const [wishlist,setwishlist]=useState({})
  const [subTotal, setsubTotal] = useState(0)
  const [subTotalwishlist, setsubTotalwishlist] = useState(0)
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({value:null})
  const [key, setKey] = useState()
  const router=useRouter()


  useEffect(() => {
    if(!(user.email=="abhishekjain4548@gmail.com")&&window.location==`${process.env.NEXT_PUBLIC_HOST}/admin`)
    {(window.location==`${process.env.NEXT_PUBLIC_HOST}/`)
     
    }
    else if((user.email=="abhishekjain4548@gmail.com")&&window.location==`${process.env.NEXT_PUBLIC_HOST}/admin`){
      window.location==`${process.env.NEXT_PUBLIC_HOST}/admin`
      toast('Hello Admin !!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart',()=>{setProgress(40)})
    router.events.on('routeChangeComplete',()=>{setProgress(100)})
    try {
      
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
      if(localStorage.getItem("wishlist")){
        setwishlist(JSON.parse(localStorage.getItem("wishlist")))
        savewishlist(JSON.parse(localStorage.getItem("wishlist")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }
    const myuser=JSON.parse(localStorage.getItem('myuser'))
    if(myuser){
      setUser({value:myuser.token, email:myuser.email})
    }
    setKey(Math.random())
  }, [router.query])
  
const Logout=()=>{
  localStorage.removeItem("myuser")
  setUser({value:null})
  setKey(Math.random())
  router.push('/')
  toast('Logged Out Successfully', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
  const saveCart=(myCart)=>{
    localStorage.setItem("cart",JSON.stringify(myCart))
    let subt=0
    let keys=Object.keys(myCart)
    for(let i=0;i<keys.length;i++){
      subt+=(myCart[keys[i]].price * myCart[keys[i]].qty)+myCart[keys[i]].del_ch
    }
    setsubTotal(subt)

  }
  const savewishlist=(mywishlist)=>{
    localStorage.setItem("wishlist",JSON.stringify(mywishlist))
    let subtt=0
    let keys=Object.keys(mywishlist)
    for(let i=0;i<keys.length;i++){
      subtt+=(mywishlist[keys[i]].price * mywishlist[keys[i]].qty)+mywishlist[keys[i]].del_ch
    }
    setsubTotalwishlist(subtt)

  }

  const addToCart=(itemCode, qty, price, name, size, variant,del_ch,img)=>{
    let newCart=cart;
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty + qty
    }else{
      newCart[itemCode]={qty: 1,price,name,size,variant,del_ch,img}
    }
    setCart(newCart)
    toast.success('Added To Cart Successfully', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    saveCart(newCart)
  }
  const addTowishlist=(itemCode, qty, price, name, size, variant,del_ch,img)=>{
    let newwishlist=wishlist;
    if(itemCode in wishlist){
      newwishlist[itemCode].qty=wishlist[itemCode].qty + qty
    }else{
      newwishlist[itemCode]={qty: 1,price,name,size,variant,del_ch,img}
    }
    setwishlist(newwishlist)
    toast.success('Added To Wishlist Successfully', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    savewishlist(newwishlist)
  }
  const buyNow = (itemCode, qty, price, name, size, variant,del_ch,img) => {
    let newCart={}
    newCart[itemCode]={ qty: 1, price, name, size, variant ,del_ch,img};
    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };
  const clearCart=()=>{
    setCart({})
    saveCart({})
  }
  const clearwishlist=()=>{
    setwishlist({})
    savewishlist({})
  }
  const removeFromCart=(itemCode, qty, price, name, size, variant,del_ch,img)=>{
    let newCart=cart;
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty - qty
    }
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    toast.success('Removed From Cart Successfully', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    saveCart(newCart)
  }
  const removeFromwishlist=(itemCode, qty, price, name, size, variant,del_ch,img)=>{
    let newwishlist=wishlist;
    if(itemCode in wishlist){
      newwishlist[itemCode].qty=wishlist[itemCode].qty - qty
    }
    if(newwishlist[itemCode]["qty"]<=0){
      delete newwishlist[itemCode]
    }
    setwishlist(newwishlist)
    toast.success('Removed From Wishlist Successfully', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    savewishlist(newwishlist)
  }
  return <>
        <ToastContainer
        position="top-center"
        autoClose={2000}
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
         <meta name ="description" content ="Instashopee" />
         <link rel= "icon" href ="/logo_icon.ico" />
       </Head>
  <LoadingBar
        color='white'
        progress={progress}
        waitingTimew={400}
        height={3}
        shadow={true}
        onLoaderFinished={() => setProgress(0)}
      />
  {key&&<Navbar Logout={Logout} user={user} key={key} cart={cart} wishlist={wishlist} addToCart={addToCart} addTowishlist={addTowishlist} removeFromCart={removeFromCart} removeFromwishlist={removeFromwishlist} clearCart={clearCart} clearwishlist={clearwishlist} subTotal={subTotal} subTotalwishlist={subTotalwishlist}/>}
  <Component buyNow={buyNow} wishlist={wishlist} cart={cart} addTowishlist={addTowishlist} addToCart={addToCart} removeFromCart={removeFromCart} removeFromwishlist={removeFromwishlist} clearCart={clearCart} clearwishlist={clearwishlist} subTotal={subTotal} subTotalwishlist={subTotalwishlist} {...pageProps} />
  <hr/>
  <Footer/>
  </>
}

export default MyApp