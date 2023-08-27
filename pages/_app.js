import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  const [cart,setCart]=useState({})
  const [subTotal, setsubTotal] = useState(0)
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({value:null})
  const [key, setKey] = useState()
  const router=useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart',()=>{setProgress(40)})
    router.events.on('routeChangeComplete',()=>{setProgress(100)})
    try {
      
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
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
    autoClose: 3000,
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
      subt+=myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setsubTotal(subt)

  }

  const addToCart=(itemCode, qty, price, name, size, variant)=>{
    let newCart=cart;
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty + qty
    }else{
      newCart[itemCode]={qty: 1,price,name,size,variant}
    }
    setCart(newCart)
    toast.success('Added To Cart Successfully', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    saveCart(newCart)
  }
  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart={}
    newCart[itemCode]={ qty: 1, price, name, size, variant };
    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };
  const clearCart=()=>{
    setCart({})
    saveCart({})
  }
  const removeFromCart=(itemCode, qty, price, name, size, variant)=>{
    let newCart=cart;
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty - qty
    }
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }
  return <>
        <ToastContainer
        position="top-center"
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
  <LoadingBar
        color='white'
        progress={progress}
        waitingTimew={400}
        height={3}
        shadow={true}
        onLoaderFinished={() => setProgress(0)}
      />
  {key&&<Navbar Logout={Logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>}
  <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <hr/>
  <Footer/>
  </>
}

export default MyApp