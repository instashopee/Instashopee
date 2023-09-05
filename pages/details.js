
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {MdAccountCircle} from "react-icons/md"
import { useRouter } from 'next/router'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const details = () => {
    const [user, setUser] = useState({value:null})
    const [key, setKey] = useState()
    const router=useRouter()
    useEffect(() => {

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
  return (
    <div className=' min-h-screen'><span>
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
    <div className=" bg-white  p-5  mt-3">
      <ul>
  <Link legacyBehavior href={'/myaccount'}><a><li className="py-1 font-semibold hover:text-red-500  text-2xl">Account Page</li></a></Link>
  <Link legacyBehavior href={'/orders'}><a><li className="py-1 font-semibold hover:text-red-500  text-2xl">Orders</li></a></Link>
  {user.email=="abhishekjain4548@gmail.com" &&<Link legacyBehavior href={'/admin'}><a><li className="py-1 font-semibold hover:text-red-500  text-2xl">Admin</li></a></Link>}
  <li onClick={Logout} className="py-1 font-semibold hover:text-red-500  text-2xl">Logout</li></ul>
</div>
</span></div>
  )
}

export default details