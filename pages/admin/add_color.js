import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin_sidebar from "@/components/Admin_sidebar";


const add_color = () => {
  const [color, setColor] = useState("");
  

  const router = useRouter();
  let email='abhishekjain4548@gmail.com'

  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }
   
  
  }, []);


  const handleUserSubmit = async () => {
    let data = {
      color,
   
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/color`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    let res = await a.json();

    setColor("");

    if (res.success) {
      toast.success("Successfully Added", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Error Adding", {
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


  const handleChange = (e) => {
     if (e.target.name == "color") {
      setColor(e.target.value);}

  };
  return (
    <div className=" top-0 left-0 bg-white w-full min-h-screen z-40  mt-8 mb-24 overflow-y-auto">

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


    <Admin_sidebar/>
    <h1 className="text-2xl text-center font-bold">ADD COLOR</h1>
    <br />
    <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 float-right p-5 shadow-2xl mr-16">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Add Color Details</h2>
      
      <div className="flex">
   


      <div className="px-2 w-1/2">

         <div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="color" className="leading-7 text-sm text-gray-600">
               Color
             </label>
         
        
            <input
               onChange={handleChange}
               value={color}
               type="colors"
               id="color"
               name="color"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             /> 
           </div>
         </div>
       


      <button onClick={handleUserSubmit} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">FINAL SUBMIT</button>
      
    </div>


      </div>
 </div>
 </div>

  );
};

export default add_color;
