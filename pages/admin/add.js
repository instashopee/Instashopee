import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin_sidebar from "@/components/Admin_sidebar";


const add = () => {
  const [title, setTitle] = useState("");
  const [del_ch, setdel_ch] = useState("");
  const [edt, setedt] = useState("");
  const [type, settype] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [sub_category, setSub_Category] = useState("");
  const [price, setPrice] = useState("");
  const [mrp, setMrp] = useState("");
  const [unit, setUnit] = useState("");
  const [size, setSize] = useState("");
  const [mqty, setmqty] = useState("");
  const [mqty2, setmqty2] = useState("");
  const [color, setColor] = useState("");
  const [availableQty, setAvailableQty] = useState("");
  const [img, setImg] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  // const [img3, setImg3] = useState("");
  // const [img4, setImg4] = useState("");

  const router = useRouter();
  let email='abhishekjain4548@gmail.com'

  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }
    // settype("normal");
    // setmqty(1)
    // setmqty2(1)

  
  }, []);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [createObjectURL2, setCreateObjectURL2] = useState(null);
  const [createObjectURL3, setCreateObjectURL3] = useState(null);

  const refresh= () => {
    window.location=`${process.env.NEXT_PUBLIC_HOST}/admin/add`

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
      del_ch,
      slug,
      desc,
      category,
      sub_category,
      price,
      edt,
      mrp,
      availableQty,
      size,
      mqty2,
      unit,
      mqty,
      color,
      img,
      img1,
      img2,
      type,
      
   
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    let res = await a.json();



    setTitle("");
    settype("");
    setmqty('');
    setmqty2('');
    setSlug("");
    setDesc("");
    setCategory("");
    setSub_Category("");
    setedt("");
    setPrice("");
    setSize("");
    setUnit("");
    setMrp("");
    setdel_ch("");
    setColor("");
    setAvailableQty("");
    // setImg("");
    // setImg("");
    // setImg("");
    // setImg("");
    // setImg("");

    if (res.success) {
      toast.success("Successfully Added Product", {
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
      toast.error("Error Adding Product", {
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
      mqty,
      desc,
      category,
      sub_category,
      del_ch,
      price,
      mrp,
      edt,
      availableQty,
      size,
      mqty2,
      unit,
      color,
      img,
      img1,
      img2,
      type,
      
   
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
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
    // settype("");
    // setmqty("1");
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
    } else if (e.target.name == "type") {
      settype(e.target.value);
    } else if (e.target.name == "del_ch") {
      setdel_ch(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    } else if (e.target.name == "mqty") {
      setmqty2(e.target.value);
      setmqty(e.target.value)
    } else if (e.target.name == "mqty2") {
      setmqty2(e.target.value);
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
    } else if (e.target.name == "unit") {
      setUnit(e.target.value);
    } else if (e.target.name == "color") {
      setColor(e.target.value);
    } else if (e.target.name == "edt") {
      setedt(e.target.value);
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
    <div className="fixed top-0 left-0 bg-white w-full h-screen z-40  mt-24">

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
    <h1 className="text-2xl text-center font-bold">ADD PRODUCTS</h1>
    <br />
    <div class="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 float-right p-5 shadow-2xl mr-16">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Add Product Details</h2>
      <div className="flex">
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
             
               value={slug}
               type="slug"
               id="slug"
               name="slug"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
      <div className="px-2 w-1/2">
           <div class=" mb-4">
             <label for="type" class="leading-7 text-sm text-gray-600">
             Type
             </label>
             <input
               onChange={handleChange}
               placeholder="normal/top selling/economy"
               value={type}
               type="type"
               id="type"
               name="type"
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
             <label for="mqty" class="leading-7 text-sm text-gray-600">
             Min Qty
             </label>
             <input
               onChange={handleChange}
               value={mqty}
               type="mqty"
               placeholder="Min Order Qty"
               id="mqty"
               name="mqty"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         <div className="px-2 w-1/2 hidden">
           <div class=" mb-4">
             <label for="mqty2" class="leading-7 text-sm text-gray-600">
             Min Qty2
             </label>
             <input
               onChange={handleChange}
               value={mqty2}
               type="mqty2"
               placeholder="Min Order Qty"
               id="mqty2"
               name="mqty2"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
<div className="px-2 w-1/2">
           <div class=" mb-4">
             <label for="unit" class="leading-7 text-sm text-gray-600">
               Unit
             </label>
             <input
               onChange={handleChange}
               value={unit}
               type="unit"
               id="unit"
               name="unit"
               class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
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
         </div>

         </div>
<div className="flex">
         <div className="px-2 w-1/2">
         <div class="mb-4">
           <label for="edt" class="leading-7 text-sm text-gray-600">
             Estimated Delivery Time For This Product
           </label>
           <input
             onChange={handleChange}
             value={edt}
             id="edt"
             name="edt"
             class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
           ></input>
         </div>
       </div>
         <div className="px-2 w-1/2">
         <div class="mb-4">
           <label for="del_ch" class="leading-7 text-sm text-gray-600">
             Delivery Charge For This Product
           </label>
           <input
             onChange={handleChange}
             value={del_ch}
             id="del_ch"
             name="del_ch"
             class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
           ></input>
         </div>
       </div>
    
         </div>
      <button onClick={handleUserSubmit} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">FINAL SUBMIT</button>
      
    </div>



   
      <div className="ml-16">
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

export default add;
