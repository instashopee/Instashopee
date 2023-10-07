import Admin_sidebar from '@/components/Admin_sidebar'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const deleted = () => {
  const [_id, set_id] = useState("")
  const handleChange = (e) => {
 if (e.target.name == "_id") {
        set_id(e.target.value);}}
  const handleUserSubmit = async () => {
    let data = {
      _id,
    
      
   
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/delete`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let res = await a.json();
    if (res.success) {
      toast.success("Successfully Deleted Product", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
        window.location=`${process.env.NEXT_PUBLIC_HOST}/admin/edit`
    } else {
      toast.error("Error Deleting Product", {
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
    window.location=`${process.env.NEXT_PUBLIC_HOST}/admin/delete`

  };
  return (
    <div className='min-h-screen'>
      <Admin_sidebar/>
      <div className="flex">

<div className="px-2 w-1/2 ">
<div class=" mb-4">
<label for="_id" class="leading-7 text-sm text-gray-600">
  _id
</label>


<input
required
  onChange={handleChange}
  value={_id}
  type="_id"
  id="_id"
  name="_id"
  class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
/>
</div>
</div>


 </div>
      <button className='bg-red-300 p-2 rounded-xl ml-5' onClick={handleUserSubmit}>SUBMIT</button>
    </div>
  )
}

export default deleted