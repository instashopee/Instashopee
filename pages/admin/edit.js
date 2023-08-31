import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const edit = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [sub_category, setSub_Category] = useState("");
  const [price, setPrice] = useState("");
  const [mrp, setMrp] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [availableQty, setAvailableQty] = useState("");
  const [img, setImg] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  // const [img3, setImg3] = useState("");
  // const [img4, setImg4] = useState("");

  const router = useRouter();
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }
    // setImg("/images/");
    // setImg1("/images/");
    // setImg2("/images/");
    // setImg3("/images/");
    // setImg4("/images/");
  
  }, []);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [createObjectURL2, setCreateObjectURL2] = useState(null);
  const [createObjectURL3, setCreateObjectURL3] = useState(null);

  // const myFunction= () => {
  //   // var x = document.getElementById("image").src;
  //   // document.getElementById("cancel").innerHTML = x;
    
  //   // document.getElementById('fileInput').onchange = function () {
  //   //   alert('Selected file: ' + this.value);
  //   // };
  // }
  const refresh= () => {
    window.location=`${process.env.NEXT_PUBLIC_HOST}/admin/add`
    // var x = document.getElementById("image").src;
    // document.getElementById("cancel").innerHTML = x;
    
    // document.getElementById('fileInput').onchange = function () {
    //   alert('Selected file: ' + this.value);
    // };
  }
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
    var name = document.getElementById('fileInput'); 
    setImg("/images/"+name.files.item(0).name);
      
    };
    const uploadToClient2 = (event) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];
        
        setImage2(i);
        setCreateObjectURL2(URL.createObjectURL(i));
      }
      var name = document.getElementById('fileInput2'); 
      setImg1("/images/"+name.files.item(0).name);
        
      };
      const uploadToClient3 = (event) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
          
          setImage3(i);
          setCreateObjectURL3(URL.createObjectURL(i));
        }
        var name = document.getElementById('fileInput3'); 
        setImg2("/images/"+name.files.item(0).name);
        
  };
  const succes = () => {
    toast.success("Successfully Added Image", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    //jquery already added
  };
  const uploadToServer = async (event) => {
    const body = new FormData();
    // console.log("file", image)
    body.append("file", image);
    body.append("file", image2);
    body.append("file", image3);
    const response = await fetch("/api/image", {
      method: "POST",
      body,
      
    });
    succes()
  };


  const handleUserSubmit = async () => {
    let data = {
      title,
      slug,
      desc,
      category,
      sub_category,
      price,
      mrp,
      availableQty,
      size,
      color,
      img,
      img1,
      img2,
      
   
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateproduct`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    let res = await a.json();



    setTitle("");
    setSlug("");
    setDesc("");
    setCategory("");
    setSub_Category("");
    setPrice("");
    setSize("");
    setMrp("");
    setColor("");
    setAvailableQty("");
    // setImg("");
    // setImg("");
    // setImg("");
    // setImg("");
    // setImg("");

    if (res.success) {
      toast.success("Successfully Updated Product", {
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
      toast.error("Error Updating Product", {
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
  const handleSizeSubmit = async () => {
    let data = {
      title,
      slug,
      desc,
      category,
      sub_category,
      price,
      mrp,
      availableQty,
      size,
      color,
      img,
      img1,
      img2,
      
   
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateproduct`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    let res = await a.json();



    // setTitle("");
    setSlug("");
    // setDesc("");
    // setCategory("");
    // setSub_Category("");
    setPrice("");
    setSize("");
    setMrp("");
    setColor("");
    setAvailableQty("");
    // setImg("");
    // setImg("");
    // setImg("");
    // setImg("");
    // setImg("");

    if (res.success) {
      toast.success("Successfully Added Size & Other Details", {
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
      toast.error("Error Adding Size & Other Details", {
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
    if (e.target.name == "title") {
      setTitle(e.target.value);
    } else if (e.target.name == "slug") {
      setSlug(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    } else if (e.target.name == "category") {
      setCategory(e.target.value);
    } else if (e.target.name == "sub_category") {
      setSub_Category(e.target.value);
    } else if (e.target.name == "price") {
      setPrice(e.target.value);
    } else if (e.target.name == "mrp") {
      setMrp(e.target.value);
    // } else if (e.target.name == "discount") {
    //   setDiscount(e.target.value);
    } else if (e.target.name == "size") {
      setSize(e.target.value);
    } else if (e.target.name == "color") {
      setColor(e.target.value);
    } else if (e.target.name == "availableQty") {
      setAvailableQty(e.target.value);
    } else if (e.target.name == "img") {
      setImg(e.target.value);
    } else if (e.target.name == "img1") {
      setImg1(e.target.value);
    } else if (e.target.name == "img2") {
      setImg2(e.target.value);}
    // } else if (e.target.name == "img3") {
    //   setImg3(e.target.value);
    // } else if (e.target.name == "img4") {
    //   setImg4(e.target.value);
    // } 
  };
  return (
    <div className="fixed top-0 left-0 bg-white w-full h-screen z-40 overflow-y-auto">

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


    <div>

    <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-70 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
               <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <a href="/admin/add"><span class="ml-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group text-blue-500 rounded-md">ADD</span></a>
               <span className="ml-3 font-semibold ">PRODUCTS</span>
               <a href="/admin/add"><span class="ml-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group text-blue-500 rounded-md">EDIT</span></a>
            </div>
         </li>
       
         <li>
            <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <a href="/admin/add"><span class="ml-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group text-blue-500 rounded-md">ADD</span></a>
               <span className="ml-3 font-semibold ">CATEGORIES</span>
               <a href="/admin/add"><span class="ml-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group text-blue-500 rounded-md">EDIT</span></a>
               
            </div>
         </li>
         <li>
            <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               
               <a href="/admin/add"><span class="ml-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group text-blue-500 rounded-md">ADD</span></a>
               <span className="ml-3 font-semibold ">SUB CATEGORIES</span>
               <a href="/admin/add"><span class="ml-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group text-blue-500 rounded-md">EDIT</span></a>
               
            </div>
         </li>
         <li>
            <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <a href="/admin/add"><span class="ml-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group text-blue-500 rounded-md">ADD</span></a>
               <span className="ml-3 font-semibold ">BANNERS</span>
               <a href="/admin/add"><span class="ml-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group text-blue-500 rounded-md">EDIT</span></a>
               
            </div>
         </li>
         <li>
            <a href="/admin/allproducts" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">VIEW PRODUCTS</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">VIEW ORDERS</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">VIEW USERS</span>
            </a>
         </li>
         <li>
            <a href="/admin" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">DASHBOARD</span>
            </a>
         </li>
      </ul>
   </div>
</aside>



    </div>
    <h1 className="text-2xl text-center font-bold">EDIT PRODUCTS</h1>
    <br />
    <div class="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 float-right p-5 shadow-2xl">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Update Product Details</h2>
      <div className="flex">
      <div className="px-2 w-1/2 ">
           <div class=" mb-4">
             <label for="_id" class="leading-7 text-sm text-gray-600">
               Given Id
             </label>
             <input
               onChange={handleChange}
               value={title}
               type="_id"
               id="_id"
               name="_id"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
      <div className="px-2 w-1/2 ">
           <div class=" mb-4">
             <label for="title" class="leading-7 text-sm text-gray-600">
               Title
             </label>
             <input
               onChange={handleChange}
               value={title}
               type="name"
               id="title"
               name="title"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
      <div className="px-2 w-1/2">
           <div class=" mb-4">
             <label for="slug" class="leading-7 text-sm text-gray-600">
               Unique Id
             </label>
             <input
               onChange={handleChange}
               // placeholder="Title_SizeNumber"
               value={slug}
               type="slug"
               id="slug"
               name="slug"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         </div>
      <div className="flex">
         <div className="px-2 w-full">
         <div class=" mb-4">
           <label for="desc" class="leading-7 text-sm text-gray-600">
             Dscription
           </label>
           <textarea
             onChange={handleChange}
             value={desc}
             cols="30"
             rows="1"
             id="desc"
             name="desc"
             class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
           ></textarea>
         </div>
       </div>
    
         </div>
      <div className="flex">
      <div className="px-2 w-1/2 ">
           <div class=" mb-4">
             <label for="category" class="leading-7 text-sm text-gray-600">
               Category
             </label>
             <input
               onChange={handleChange}
               value={category}
               type="category"
               id="category"
               name="category"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
      <div className="px-2 w-1/2 ">
           <div class=" mb-4">
             <label for="sub_category" class="leading-7 text-sm text-gray-600">
               Sub Category
             </label>
             <input
               onChange={handleChange}
               value={sub_category}
               type="sub_category"
               id="sub_category"
               name="sub_category"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
     
         </div>
      <div className="flex">
      <div className="mt-8 w-8 cursor-pointer">
      <svg onClick={handleSizeSubmit} xmlns="http://www.w3.org/2000/svg"  width="30" height="30" viewBox="0 0 50 50">
<path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
</svg></div>
      <div className="px-2 w-1/2">
           <div class=" mb-4">

             <label for="mrp" class="leading-7 text-sm text-gray-600">
               Mrp
             </label>
             <input
               onChange={handleChange}
               value={mrp}
               type="mrp"
               id="mrp"
               name="mrp"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
       <div className="px-2 w-1/2">
           <div class=" mb-4">
             <label for="price" class="leading-7 text-sm text-gray-600">
               Price
             </label>
             <input
               onChange={handleChange}
               value={price}
               type="price"
               id="price"
               name="price"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
           <div class=" mb-4">
             <label for="size" class="leading-7 text-sm text-gray-600">
               Size
             </label>
             <input
               onChange={handleChange}
               value={size}
               type="size"
               id="size"
               name="size"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         <div className="px-2 w-1/2">
           <div class=" mb-4">
             <label for="color" class="leading-7 text-sm text-gray-600">
               Color
             </label>
             <input
               onChange={handleChange}
               value={color}
               type="colors"
               id="color"
               name="color"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
       
         <div className="px-2 w-1/2">
           <div class=" mb-4">
             <label for="availableQty" class="leading-7 text-sm text-gray-600">
               Qty
             </label>
             <input
               onChange={handleChange}
               value={availableQty}
               type="availableQty"
               id="availableQty"
               name="availableQty"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         </div>
         <div className="hidden">
         <div className="px-2 w-1/2">
           <div class=" mb-4">
             <label for="img" class="leading-7 text-sm text-gray-600">
               Main Image
             </label>
             <input
              
               placeholder="/images/filename.extension"
               onChange={handleChange}
               value={img}
               type="img"
               id="img"
               name="img"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         <div className="px-2 w-1/2">
         <div class=" mb-4">
             <label for="img1" class="leading-7 text-sm text-gray-600">
               Image1
             </label>
             <input
              
               placeholder="/images/filename.extension"
               onChange={handleChange}
               value={img1}
               type="img"
               id="img1"
               name="img1"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         <div className="px-2 w-1/2">
           <div class=" mb-4">
             <label for="img2" class="leading-7 text-sm text-gray-600">
               Image2
             </label>
             <input
              
               placeholder="/images/filename.extension"
               onChange={handleChange}
               value={img2}
               type="img"
               id="img2"
               name="img2"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div></div>

      <button onClick={handleUserSubmit} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">FINAL SUBMIT</button>
      
    </div>

    {/* <div className="float-right flex p-5">

   
    <div className="px-2 w-1/2 ">
           <div class=" mb-4">
             <label for="title" class="leading-7 text-sm text-gray-600">
               Title
             </label>
             <input
               onChange={handleChange}
               value={title}
               type="name"
               id="title"
               name="title"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         <div className="px-2 w-1/2">
           <div class=" mb-4">
             <label for="slug" class="leading-7 text-sm text-gray-600">
               Unique Id
             </label>
             <input
               onChange={handleChange}
               // placeholder="Title_SizeNumber"
               value={slug}
               type="slug"
               id="slug"
               name="slug"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>


         </div>
    <div className="float-right">



    <div className="px-2 w-1/2 ">
           <div class=" mb-4">
           <label for="desc" class="leading-7 text-sm text-gray-600">
               Description
             </label>
             <input
               onChange={handleChange}
               value={title}
               type="name"
               id="title"
               name="title"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>    </div>

   */}

   
      <div className="mx-72">
        <div className="border-2 mx-14 w-[25rem] mt-5">
        <main class="container w-[25rem]">
       
        <article aria-label="File Upload Modal" class="relative h-full flex flex-col bg-white shadow-xl rounded-md" ondrop="dropHandler(event);" ondragover="dragOverHandler(event);" ondragleave="dragLeaveHandler(event);" ondragenter="dragEnterHandler(event);">
        
     

  
          <section class="p-2 w-full h-full flex flex-wrap">
            <header class="border-dashed border-2 border-gray-400 ">
             
       
              <input id="fileInput" type="file" name="myImage" onChange={uploadToClient} style={{margin:"1.5rem"}}/>
              <input id="fileInput2" type="file" name="myImage" onChange={uploadToClient2} style={{margin:"1.5rem"}}/>
              <input id="fileInput3" type="file" name="myImage" onChange={uploadToClient3} style={{margin:"1.5rem"}}/>
       
            </header>

          </section>
     

          <div className="flex m-2 ">
            <img src={createObjectURL} style={{ height: "100px",width: "100px",margin:"auto"}} class="imgview" id="image"/>
            <img src={createObjectURL2} style={{ height: "100px",width: "100px",margin:"auto" }}class="imgview" />
            <img src={createObjectURL3} style={{ height: "100px",width: "100px",margin:"auto" }}class="imgview" />

            </div>
          <footer class="flex justify-end px-8 pb-8 pt-4 space-x-2">
            <button onClick={refresh} id="submit" class="rounded-sm px-3 py-1 bg-gray-500 hover:bg-gray-400 text-white focus:shadow-outline focus:outline-none">
              Refresh
            </button>
            <button onClick={uploadToServer} id="submit" class="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none">
              Upload now
            </button>
            {/* <button onClick={myFunction} id="cancel" class="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
              Cancel
            </button> */}
          </footer>
        </article>
      </main>
    </div>
    
        </div>
    
      </div>
 
    // <div className="container mx-auto my-10">
    //   <ToastContainer
    //     position="top-left"
    //     autoClose={3000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="light"
    //   />
    //   <h1 className="text-3xl text-center font-bold">ADD PRODUCT</h1>
    //   <div>
    //     <div className="mx-3">
    //       <img src={createObjectURL} style={{ height: "150px" }} />
    //       <h4>Select Image</h4>
    //       <input type="file" name="myImage" onChange={uploadToClient} />
    //       <button
    //         className="btn btn-primary border-2 p-2"
    //         type="submit"
    //         onClick={uploadToServer}
    //       >
    //         Upload Image
    //       </button>
    //     </div>
    //   </div>
    //   <div className="mx-auto flex my-2">
    //     <div className="px-2 w-1/2">
    //       <div class=" mb-4">
    //         <label for="title" class="leading-7 text-sm text-gray-600">
    //           Title
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={title}
    //           type="name"
    //           id="title"
    //           name="title"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //     <div className="px-2 w-1/2">
    //       <div class=" mb-4">
    //         <label for="slug" class="leading-7 text-sm text-gray-600">
    //           Unique Id
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           // placeholder="Title_SizeNumber"
    //           value={slug}
    //           type="slug"
    //           id="slug"
    //           name="slug"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="px-2 w-full">
    //     <div class=" mb-4">
    //       <label for="desc" class="leading-7 text-sm text-gray-600">
    //         Dscription
    //       </label>
    //       <textarea
    //         onChange={handleChange}
    //         value={desc}
    //         cols="30"
    //         rows="2"
    //         id="desc"
    //         name="desc"
    //         class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //       ></textarea>
    //     </div>
    //   </div>
    //   <div className="mx-auto flex my-2">
    //   <div className="px-2 w-1/2">
    //       <div class=" mb-4">
    //          <label for="category" class="leading-7 text-sm text-gray-600">
    //           Category
    //         </label>

    //         <input
    //           onChange={handleChange}
    //           value={category}
    //           type="category"
    //           id="category"
    //           name="category"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>

    //   </div>
    //   <div className="mx-auto flex my-2">
    //     <div className="px-2 w-1/2">
    //       <div class=" mb-4">
    //         <label for="mrp" class="leading-7 text-sm text-gray-600">
    //           MRP
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={mrp}
    //           type="mrp"
    //           id="mrp"
    //           name="mrp"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   <div className="px-2 w-1/2">
    //       <div class=" mb-4">
    //         <label for="price" class="leading-7 text-sm text-gray-600">
    //           Price
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={price}
    //           type="price"
    //           id="price"
    //           name="price"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mx-auto flex my-2">
    //     <div className="px-2 w-1/2">
    //       <div class=" mb-4">
    //         <label for="size" class="leading-7 text-sm text-gray-600">
    //           Size
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={size}
    //           type="size"
    //           id="size"
    //           name="size"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //     <div className="px-2 w-1/2">
    //       <div class=" mb-4">
    //         <label for="color" class="leading-7 text-sm text-gray-600">
    //           Color
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={color}
    //           type="colors"
    //           id="color"
    //           name="color"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mx-auto flex my-2">
    //     <div className="px-2 w-1/2">
    //       <div class=" mb-4">
    //         <label for="availableQty" class="leading-7 text-sm text-gray-600">
    //           Available Qty
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={availableQty}
    //           type="availableQty"
    //           id="availableQty"
    //           name="availableQty"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //     <div className="px-2 w-1/2">
    //       <div class=" mb-4">
    //         <label for="img" class="leading-7 text-sm text-gray-600">
    //           Main Image
    //         </label>
    //         <input
                
    //           placeholder="/images/filename.extension"
    //           onChange={handleChange}
    //           value={img}
    //           type="img"
    //           id="img"
    //           name="img"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mx-auto flex my-2">
    //     <div className="px-2 w-1/2">
    //     <div class=" mb-4">
    //         <label for="img1" class="leading-7 text-sm text-gray-600">
    //           Image1
    //         </label>
    //         <input
                
    //           placeholder="/images/filename.extension"
    //           onChange={handleChange}
    //           value={img1}
    //           type="img"
    //           id="img1"
    //           name="img1"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //     <div className="px-2 w-1/2">
    //       <div class=" mb-4">
    //         <label for="img2" class="leading-7 text-sm text-gray-600">
    //           Image2
    //         </label>
    //         <input
                
    //           placeholder="/images/filename.extension"
    //           onChange={handleChange}
    //           value={img2}
    //           type="img"
    //           id="img2"
    //           name="img2"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mx-auto flex my-2">
    //     <div className="px-2 w-1/2">
    //     <div class=" mb-4">
    //         <label for="img3" class="leading-7 text-sm text-gray-600">
    //           Image3
    //         </label>
    //         <input
                
    //           placeholder="/images/filename.extension"
    //           onChange={handleChange}
    //           value={img3}
    //           type="img"
    //           id="img3"
    //           name="img3"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //     <div className="px-2 w-1/2">
    //       <div class=" mb-4">
    //         <label for="img4" class="leading-7 text-sm text-gray-600">
    //           Image4
    //         </label>
    //         <input
                
    //           placeholder="/images/filename.extension"
    //           onChange={handleChange}
    //           value={img4}
    //           type="img"
    //           id="img4"
    //           name="img4"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
        
    //   </div>
    //   <div className="flex">

    //   <button
    //     onClick={handleUserSubmit}
    //     className="m-3 disabled:bg-red-200 flex mb-5 text-white bg-red-500 border-0 py-3 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
    //     >
    //     SUBMIT
    //   </button>
    //   {/* <button
    //     onClick={handleUserSubmit2}
    //     className="m-3 disabled:bg-red-200 flex mb-5 text-white bg-red-500 border-0 py-3 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
    //     >
    //     ADD MORE SIZES OR COLORS
    //   </button> */}
    //   {/* <button
    //     onClick={handleUserSubmit}
    //     className="m-3 disabled:bg-red-200 flex mb-5 text-white bg-red-500 border-0 py-2 px-1 focus:outline-none hover:bg-red-600 rounded text-sm"
    //     >
    //     ADD MORE COLORS
    //   </button> */}
    //     </div>
    // </div>
  );
};

export default edit;
