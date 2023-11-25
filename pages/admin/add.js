import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin_sidebar from "@/components/Admin_sidebar";


const add = () => {
  const [_id, set_id] = useState("");
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
  const b=()=>{
    window.open(`${process.env.NEXT_PUBLIC_HOST}/admin/allproducts`, '_blank')
  }
  const ba=()=>{
    window.location=(`${process.env.NEXT_PUBLIC_HOST}/admin/edit`)
  }
  const a=()=>{

    // let _id="6516b9f18917db9044ee0013"
    let data = {
      _id
   
    };
    const fetchUsers=async()=>{
      let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/get_one_product`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let res=await a.json()

      setTitle(res.products.title)
      setdel_ch(res.products.del_ch)
      setedt(res.products.edt)
      settype(res.products.type)
      setSlug(res.products.slug)
      setDesc(res.products.desc)
      setCategory(res.products.category)
      setSub_Category(res.products.sub_category)
      setPrice(res.products.price)
      setMrp(res.products.mrp)
      setUnit(res.products.unit)
      setSize(res.products.size)
      setmqty(res.products.mqty)
      setmqty2(res.products.mqty2)
      setColor(res.products.color)
      setAvailableQty(res.products.availableQty)
      setImg(res.products.img)
      setImg1(res.products.img1)
      setImg2(res.products.img2)
   
    }
    if(!localStorage.getItem("myuser")){
      router.push('/')
    }else{
      fetchUsers()
  }
     

  }
     

  // const [img4, setImg4] = useState("");
  const [sizes, setsizes] = useState({})
  
  useEffect(() => {

    const fetch_size=async()=>{
      let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/get_size`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({sizes}),
      });
    
      let res=await a.json()
      setsizes(res.sizes)
    }
    if(!localStorage.getItem("myuser")){
      router.push('/')
    }else{
        fetch_size()
  }

     
}, [])
const [colors, setcolors] = useState({})
  
useEffect(() => {

  const fetch_color=async()=>{
    let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/get_color`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({color}),
    });
  
    let res=await a.json()
    setcolors(res.colors)
  }
  if(!localStorage.getItem("myuser")){
    router.push('/')
  }else{
      fetch_color()
}

   
}, [])
  const [products, setProducts] = useState({})
  
  useEffect(() => {
    
    const fetchProducts=async()=>{
      let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({products}),
      });
    
      let res=await a.json()
      setProducts(res.products)
    }
    if(!localStorage.getItem("myuser")){
      router.push('/')
    }else{
      fetchProducts()
  }

     
}, [])
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
      setSize(e.target.value);}
      else if (e.target.name == "_id") {
        set_id(e.target.value);
    
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
    <h1 className="text-2xl text-center font-bold">ADD PRODUCTS</h1>
    <br />
    <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 float-right p-5 shadow-2xl mr-16">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Add Product Details  (Make Sure To Change Unique Id in Every Entry)</h2>
      <div className="flex">

<div className="px-2 w-1/2 ">
<div className=" mb-4">
<label for="_id" className="leading-7 text-sm text-gray-600">
  _id
</label>
<select

 value={_id}
 type="_id"
 id="_id"
 name="_id"
 className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
 onChange={handleChange}>
   
{Object.values(products).map(item => (

<option value={item._id}>{item.title}</option>))}
</select>

{/* <input
required
  onChange={handleChange}
  value={_id}
  type="_id"
  id="_id"
  name="_id"
  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
/> */}
</div>
</div>
<div className="px-2 w-1/2 mt-6 space-x-2 space-y-2">
<button className='bg-blue-300 p-2 rounded-lg' onClick={a}>CHECK _id</button>

<button className='bg-blue-300 p-2 rounded-lg' onClick={b}>VIEW PRODUCTS</button>

<button className='bg-blue-300 p-2 rounded-lg' onClick={ba}>REFRESH</button>

</div> </div>
      <div className="flex">
     
      <div className="px-2 w-1/2 ">
           <div className=" mb-4">
             <label for="title" className="leading-7 text-sm text-gray-600">
               Title
             </label>
             <input
               onChange={handleChange}
               value={title}
               type="name"
               id="title"
               name="title"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
      <div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="slug" className="leading-7 text-sm text-gray-600">
               Unique Id
             </label>
             <input
               onChange={handleChange}
             
               value={slug}
               type="slug"
               id="slug"
               name="slug"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
      <div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="type" className="leading-7 text-sm text-gray-600">
             Type
             </label>
             <select
             
             value={type}
             type="type"
             id="type"
             name="type"
             className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             onChange={handleChange}>
               
            {/* {Object.values(products).map(item => ( */}

   <option selected value='Choose Type'>Choose Type</option>
   <option value='normal'>normal</option>
   <option value='top selling'>top selling</option>
   <option value='deals'>deals</option>
   <option value='economy'>economy</option>
   <option value='decorative'>decorative</option>
   <option value='chimney'>chimney</option>

 </select>
             {/* <input
               onChange={handleChange}
               placeholder="normal/top selling/economy"
               value={type}
               type="type"
               id="type"
               name="type"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             /> */}
           </div>
         </div>
         </div>
      <div className="flex">
         <div className="px-2 w-full">
         <div className=" mb-4">
           <label for="desc" className="leading-7 text-sm text-gray-600">
             Dscription
           </label>
           <textarea
             onChange={handleChange}
             value={desc}
             cols="30"
             rows="1"
             id="desc"
             name="desc"
             className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
           ></textarea>
         </div>
       </div>
    
         </div>
      <div className="flex">
      <div className="px-2 w-1/2 ">
           <div className=" mb-4">
             <label for="category" className="leading-7 text-sm text-gray-600">
               Category
             </label>
             <input
               onChange={handleChange}
               value={category}
               type="category"
               id="category"
               name="category"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
      <div className="px-2 w-1/2 ">
           <div className=" mb-4">
             <label for="sub_category" className="leading-7 text-sm text-gray-600">
               Sub Category
             </label>
             <select
             
             onChange={handleChange}
             value={sub_category}
             type="sub_category"
             id="sub_category"
             name="sub_category"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                            <option selected value='Choose Sub Category'>Choose Sub Category</option>

             {/* {Object.values(products).map(item => (

    <option selected value={item.sub_category}>{item.sub_category}</option>))} */}
    {/* <option selected value="acp baskets">acp baskets</option> */}
    {/* <option selected value="auto hinges">auto hinges</option> */}
    {/* <option selected value="piano slides">piano slides</option> */}
    {/* <option selected value="pulldown">pulldown</option> */}
    {/* <option selected value="rolling shutters">rolling shutters</option> */}
    <option selected value="acrylic sheets">acrylic sheets</option>
    <option selected value="butt hinges">butt hinges</option>
    <option selected value="cabinet handles">cabinet handles</option>
    <option selected value="chimney">chimney</option>
    <option selected value="cooktop">cooktop</option>
    <option selected value="corner units">corner units</option>
    <option selected value="door closer">door closer</option>
    <option selected value="door stopper">door stopper</option>
    <option selected value="frame profile">frame profile</option>
    <option selected value="frame with handle profile">frame with handle profile</option>
    <option selected value="glass door handles">glass door handles</option>
    <option selected value="general hardware">general hardware</option>
    <option selected value="handle profile">handle profile</option>
    <option selected value="hydraulic hinges">hydraulic hinges</option>
    <option selected value="knobs">knobs</option>
    <option selected value="laminates">laminates</option>
    <option selected value="louvers">louvers</option>
    <option selected value="main door handles">main door handles</option>
    <option selected value="microwave">microwave</option>
    <option selected value="mortice handles">mortice handles</option>
    <option selected value="mouldings">mouldings</option>
    <option selected value="ms drawer channel">ms drawer channel</option>
    <option selected value="other appliances">other appliances</option>
    <option selected value="other hinges">other hinges</option>
    <option selected value="oven">oven</option>
    <option selected value="shirt pullout">shirt pullout</option>
    <option selected value="shoe rack">shoe rack</option>
    <option selected value="sliding fittings">sliding fittings</option>
    <option selected value="ss drawer channel">ss drawer channel</option>
    <option selected value="tall units">tall units</option>
    <option selected value="tandem box">tandem box</option>
    <option selected value="trouser pullout">trouser pullout</option>
    <option selected value="uplifts">uplifts</option>
    <option selected value="wire baskets">wire baskets</option>
  </select>
             {/* <input
               onChange={handleChange}
               value={sub_category}
               type="sub_category"
               id="sub_category"
               name="sub_category"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             /> */}
           </div>
         </div>
     
         </div>
      <div className="flex">
      <div className="mt-8 w-8 cursor-pointer">
      <svg onClick={handleSizeSubmit} xmlns="http://www.w3.org/2000/svg"  width="30" height="30" viewBox="0 0 50 50">
<path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
</svg></div>
<div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="size" className="leading-7 text-sm text-gray-600">
               Size
             </label>
             {/* <select
             
            
             onChange={handleChange}
             value={size}
             type="size"
             id="size"
             name="size"
             className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
               
            <option selected value='Size'>Size</option>
            {Object.values(sizes).map(item => (
   <option selected value={item.size}>{item.size}</option>))}
 

 </select> */}
             <input
               onChange={handleChange}
               value={size}
               type="size"
               id="size"
               name="size"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
<div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="mqty" className="leading-7 text-sm text-gray-600">
             Min Qty
             </label>
             <input
               onChange={handleChange}
               value={mqty}
               type="mqty"
               placeholder="Min Qty"
               id="mqty"
               name="mqty"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         <div className="px-2 w-1/2 hidden">
           <div className=" mb-4">
             <label for="mqty2" className="leading-7 text-sm text-gray-600">
             Min Qty2
             </label>
             <input
               onChange={handleChange}
               value={mqty2}
               type="mqty2"
               placeholder="Min Qty"
               id="mqty2"
               name="mqty2"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
<div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="unit" className="leading-7 text-sm text-gray-600">
               Unit
             </label>
             <input
               onChange={handleChange}
               value={unit}
               type="unit"
               id="unit"
               name="unit"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
      <div className="px-2 w-1/2">
           <div className=" mb-4">

             <label for="mrp" className="leading-7 text-sm text-gray-600">
               Mrp
             </label>
             <input
               onChange={handleChange}
               value={mrp}
               type="mrp"
               id="mrp"
               name="mrp"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
       <div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="price" className="leading-7 text-sm text-gray-600">
               Price
             </label>
             <input
               onChange={handleChange}
               value={price}
               type="price"
               id="price"
               name="price"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        
         <div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="color" className="leading-7 text-sm text-gray-600">
               Color
             </label>
             <select
             
            
             value={color}
             type="colors"
             id="color"
             name="color"
             className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             onChange={handleChange}>
               
            <option selected value='Color'>Color</option>
            {/* {Object.values(colors).map(item => (
   <option selected value={item.color}>{item.color}</option>))} */}
   <option value='RoseGold/Black'>RoseGold/Black</option>
   {/* <option value='Black/RoseGold'>Black/RoseGold</option> */}
   <option value='Black/Gold'>Black/Gold</option>
   <option value='Wood/RoseGold'>Wood/RoseGold</option>
   <option value='Wood/Gold'>Wood/Gold</option>
   <option value='White/RoseGold'>White/RoseGold</option>
   <option value='White/Gold'>White/Gold</option>
   <option value='Grey/Gold'>Grey/Gold</option>
   <option value='Grey/RoseGold'>Grey/RoseGold</option>
   <option value='zinc'>zinc</option>
   <option value='RoseGold'>RoseGold</option>
   <option value='black'>black</option>
   <option value='antique'>antique</option>
   <option value='white'>white</option>
   <option value='gold'>gold</option>
   <option value='aluminium'>aluminium</option>
   <option value='wenge'>wenge</option>
   <option value='ss'>ss</option>
   <option value='mocha brown'>mocha brown</option>
   <option value='brown'>brown</option>
   <option value='grey'>grey</option>
   <option value='wood'>wood</option>

 </select>
             {/* <input
               onChange={handleChange}
               value={color}
               type="colors"
               id="color"
               name="color"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             /> */}
           </div>
         </div>
       
         <div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="availableQty" className="leading-7 text-sm text-gray-600">
               Qty
             </label>
             <input
               onChange={handleChange}
               value={availableQty}
               type="availableQty"
               id="availableQty"
               name="availableQty"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         </div>
         <div className="hidden">
         <div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="img" className="leading-7 text-sm text-gray-600">
               Main Image
             </label>
             <input
              
               placeholder="/images/filename.extension"
               onChange={handleChange}
               value={img}
               type="img"
               id="img"
               name="img"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         <div className="px-2 w-1/2">
         <div className=" mb-4">
             <label for="img1" className="leading-7 text-sm text-gray-600">
               Image1
             </label>
             <input
              
               placeholder="/images/filename.extension"
               onChange={handleChange}
               value={img1}
               type="img"
               id="img1"
               name="img1"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         <div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="img2" className="leading-7 text-sm text-gray-600">
               Image2
             </label>
             <input
              
               placeholder="/images/filename.extension"
               onChange={handleChange}
               value={img2}
               type="img"
               id="img2"
               name="img2"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>

         </div>
<div className="flex">
         <div className="px-2 w-1/2">
         <div className="mb-4">
           <label for="edt" className="leading-7 text-sm text-gray-600">
             Estimated Delivery Time For This Product
           </label>
           <input
             onChange={handleChange}
             value={edt}
             id="edt"
             name="edt"
             className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
           ></input>
         </div>
       </div>
         <div className="px-2 w-1/2">
         <div className="mb-4">
           <label for="del_ch" className="leading-7 text-sm text-gray-600">
             Delivery Charge For This Product
           </label>
           <input
             onChange={handleChange}
             value={del_ch}
             id="del_ch"
             name="del_ch"
             className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
           ></input>
         </div>
       </div>
    
         </div>
      <button onClick={handleUserSubmit} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">FINAL SUBMIT</button>
      
    </div>



   
      <div className="ml-16">
        <div className="border-2 mx-14 w-[25rem] mt-5">
        <main className="container w-[25rem]">
       
        <article aria-label="File Upload Modal" className="relative h-full flex flex-col bg-white shadow-xl rounded-md" ondrop="dropHandler(event);" ondragover="dragOverHandler(event);" ondragleave="dragLeaveHandler(event);" ondragenter="dragEnterHandler(event);">
        
     

  
          <section className="p-2 w-full h-full flex flex-wrap">
            <header className="border-dashed border-2 border-gray-400 ">
             
       
              <input id="fileInput" type="file" name="myImage" onChange={uploadToClient} style={{margin:"1.5rem"}}/>
              <input id="fileInput2" type="file" name="myImage" onChange={uploadToClient2} style={{margin:"1.5rem"}}/>
              <input id="fileInput3" type="file" name="myImage" onChange={uploadToClient3} style={{margin:"1.5rem"}}/>
       
            </header>

          </section>
     

          <div className="flex m-2 ">
            <img src={createObjectURL} style={{ height: "100px",width: "100px",margin:"auto"}} className="imgview" id="image"/>
            <img src={createObjectURL2} style={{ height: "100px",width: "100px",margin:"auto" }}className="imgview" />
            <img src={createObjectURL3} style={{ height: "100px",width: "100px",margin:"auto" }}className="imgview" />

            </div>
          <footer className="flex justify-end px-8 pb-8 pt-4 space-x-2">
            <button onClick={refresh} id="submit" className="rounded-sm px-3 py-1 bg-gray-500 hover:bg-gray-400 text-white focus:shadow-outline focus:outline-none">
              Refresh
            </button>
            {/* <button onClick={uploadToServer} id="submit" className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none">
              Upload now
            </button> */}
            {/* <button onClick={myFunction} id="cancel" className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
              Cancel
            </button> */}
          </footer>
        </article>
      </main>
    </div>
    
        </div>
    <br /><br /><br /><br />
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
    //       <div className=" mb-4">
    //         <label for="title" className="leading-7 text-sm text-gray-600">
    //           Title
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={title}
    //           type="name"
    //           id="title"
    //           name="title"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //     <div className="px-2 w-1/2">
    //       <div className=" mb-4">
    //         <label for="slug" className="leading-7 text-sm text-gray-600">
    //           Unique Id
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           // placeholder="Title_SizeNumber"
    //           value={slug}
    //           type="slug"
    //           id="slug"
    //           name="slug"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="px-2 w-full">
    //     <div className=" mb-4">
    //       <label for="desc" className="leading-7 text-sm text-gray-600">
    //         Dscription
    //       </label>
    //       <textarea
    //         onChange={handleChange}
    //         value={desc}
    //         cols="30"
    //         rows="2"
    //         id="desc"
    //         name="desc"
    //         className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //       ></textarea>
    //     </div>
    //   </div>
    //   <div className="mx-auto flex my-2">
    //   <div className="px-2 w-1/2">
    //       <div className=" mb-4">
    //          <label for="category" className="leading-7 text-sm text-gray-600">
    //           Category
    //         </label>

    //         <input
    //           onChange={handleChange}
    //           value={category}
    //           type="category"
    //           id="category"
    //           name="category"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>

    //   </div>
    //   <div className="mx-auto flex my-2">
    //     <div className="px-2 w-1/2">
    //       <div className=" mb-4">
    //         <label for="mrp" className="leading-7 text-sm text-gray-600">
    //           MRP
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={mrp}
    //           type="mrp"
    //           id="mrp"
    //           name="mrp"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   <div className="px-2 w-1/2">
    //       <div className=" mb-4">
    //         <label for="price" className="leading-7 text-sm text-gray-600">
    //           Price
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={price}
    //           type="price"
    //           id="price"
    //           name="price"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mx-auto flex my-2">
    //     <div className="px-2 w-1/2">
    //       <div className=" mb-4">
    //         <label for="size" className="leading-7 text-sm text-gray-600">
    //           Size
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={size}
    //           type="size"
    //           id="size"
    //           name="size"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //     <div className="px-2 w-1/2">
    //       <div className=" mb-4">
    //         <label for="color" className="leading-7 text-sm text-gray-600">
    //           Color
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={color}
    //           type="colors"
    //           id="color"
    //           name="color"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mx-auto flex my-2">
    //     <div className="px-2 w-1/2">
    //       <div className=" mb-4">
    //         <label for="availableQty" className="leading-7 text-sm text-gray-600">
    //           Available Qty
    //         </label>
    //         <input
    //           onChange={handleChange}
    //           value={availableQty}
    //           type="availableQty"
    //           id="availableQty"
    //           name="availableQty"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //     <div className="px-2 w-1/2">
    //       <div className=" mb-4">
    //         <label for="img" className="leading-7 text-sm text-gray-600">
    //           Main Image
    //         </label>
    //         <input
                
    //           placeholder="/images/filename.extension"
    //           onChange={handleChange}
    //           value={img}
    //           type="img"
    //           id="img"
    //           name="img"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mx-auto flex my-2">
    //     <div className="px-2 w-1/2">
    //     <div className=" mb-4">
    //         <label for="img1" className="leading-7 text-sm text-gray-600">
    //           Image1
    //         </label>
    //         <input
                
    //           placeholder="/images/filename.extension"
    //           onChange={handleChange}
    //           value={img1}
    //           type="img"
    //           id="img1"
    //           name="img1"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //     <div className="px-2 w-1/2">
    //       <div className=" mb-4">
    //         <label for="img2" className="leading-7 text-sm text-gray-600">
    //           Image2
    //         </label>
    //         <input
                
    //           placeholder="/images/filename.extension"
    //           onChange={handleChange}
    //           value={img2}
    //           type="img"
    //           id="img2"
    //           name="img2"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mx-auto flex my-2">
    //     <div className="px-2 w-1/2">
    //     <div className=" mb-4">
    //         <label for="img3" className="leading-7 text-sm text-gray-600">
    //           Image3
    //         </label>
    //         <input
                
    //           placeholder="/images/filename.extension"
    //           onChange={handleChange}
    //           value={img3}
    //           type="img"
    //           id="img3"
    //           name="img3"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //     </div>
    //     <div className="px-2 w-1/2">
    //       <div className=" mb-4">
    //         <label for="img4" className="leading-7 text-sm text-gray-600">
    //           Image4
    //         </label>
    //         <input
                
    //           placeholder="/images/filename.extension"
    //           onChange={handleChange}
    //           value={img4}
    //           type="img"
    //           id="img4"
    //           name="img4"
    //           className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
