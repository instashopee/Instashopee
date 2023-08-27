import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import path from "path"

const add = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [mrp, setMrp] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [availableQty, setAvailableQty] = useState("");
  const [img, setImg] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");

  const router = useRouter();
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }
    setImg("/images/");
    setImg1("/images/");
    setImg2("/images/");
    setImg3("/images/");
    setImg4("/images/");
  
  }, []);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
    
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
    const response = await fetch("/api/image", {
      method: "POST",
      body,
      
    });
    succes()
    //jquery already added
  };

  
  // const handleUserSubmit2 = async () => {
  //   // toast.success("You Can Now Add More Sizes", {
  //   //   position: "top-left",
  //   //   autoClose: 3000,
  //   //   hideProgressBar: false,
  //   //   closeOnClick: true,
  //   //   pauseOnHover: true,
  //   //   draggable: true,
  //   //   progress: undefined,
  //   //   theme: "light",
  //   // });
  //   let data = {
  //     title,
  //     slug,
  //     desc,
  //     category,
  //     price,
  //     mrp,
  //     availableQty,
  //     size,
  //     color,
  //     img,
  //     img1,
  //     img2,
  //     img3,
  //     img4,
   
  //   };
  //   let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
    
  //   let res = await a.json();
  //   console.log(data)

  //   // let b = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
  //   //   method: "POST", // or 'PUT'
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   body: JSON.stringify(data),
  //   // });
  //   // let resp = await b.json();
  //   // setTitle("");
  //   setSlug("");
  //   // setDesc("");
  //   // setCategory("");
  //   setPrice("");
  //   setSize("");
  //   setMrp("");
  //   setColor("");
  //   setAvailableQty("");
  //   // setImg("/images/");
  //   // setImg("");
  //   // setImg("");
  //   // setImg("");
  //   // setImg("");
  //   // setImg("");

  //   if (res.success) {
  //     toast.success("Successfully Added Product", {
  //       position: "top-left",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   } else {
  //     toast.error("Error Adding Product", {
  //       position: "top-left",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };
  const handleUserSubmit = async () => {
    let data = {
      title,
      slug,
      desc,
      category,
      price,
      mrp,
      availableQty,
      size,
      color,
      img,
      img1,
      img2,
      img3,
      img4,
   
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    let res = await a.json();
    console.log(data)

    // let b = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // let resp = await b.json();
    // setTitle("");
    setSlug("");
    // setDesc("");
    // setCategory("");
    setPrice("");
    setSize("");
    setMrp("");
    setColor("");
    setAvailableQty("");
    // setImg("/images/");
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
  // console.log(txnRes)
  const handleChange = (e) => {
    if (e.target.name == "title") {
      setTitle(e.target.value);
    } else if (e.target.name == "slug") {
      setSlug(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    } else if (e.target.name == "category") {
      setCategory(e.target.value);
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
      setImg2(e.target.value);
    } else if (e.target.name == "img3") {
      setImg3(e.target.value);
    } else if (e.target.name == "img4") {
      setImg4(e.target.value);
    } 
  };
  return (
    <div className="container mx-auto my-10">
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
      <h1 className="text-3xl text-center font-bold">ADD PRODUCT</h1>
      {/* <h2 className="font-semibold text-xl">Update Your Account Details</h2> */}
      <div>
        <div className="mx-3">
          <img src={createObjectURL} style={{ height: "150px" }} />
          <h4>Select Image</h4>
          <input type="file" name="myImage" onChange={uploadToClient} />
          <button
            className="btn btn-primary border-2 p-2"
            type="submit"
            onClick={uploadToServer}
          >
            Upload Image
          </button>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
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
      <div className="px-2 w-full">
        <div class=" mb-4">
          <label for="desc" class="leading-7 text-sm text-gray-600">
            Dscription
          </label>
          <textarea
            onChange={handleChange}
            value={desc}
            cols="30"
            rows="2"
            id="desc"
            name="desc"
            class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-2">
      <div className="px-2 w-1/2">
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

      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="mrp" class="leading-7 text-sm text-gray-600">
              MRP
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
      </div>
      <div className="mx-auto flex my-2">
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
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="availableQty" class="leading-7 text-sm text-gray-600">
              Available Qty
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
      </div>
      <div className="mx-auto flex my-2">
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
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
        <div class=" mb-4">
            <label for="img3" class="leading-7 text-sm text-gray-600">
              Image3
            </label>
            <input
                
              placeholder="/images/filename.extension"
              onChange={handleChange}
              value={img3}
              type="img"
              id="img3"
              name="img3"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="img4" class="leading-7 text-sm text-gray-600">
              Image4
            </label>
            <input
                
              placeholder="/images/filename.extension"
              onChange={handleChange}
              value={img4}
              type="img"
              id="img4"
              name="img4"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        
      </div>
      <div className="flex">

      <button
        onClick={handleUserSubmit}
        className="m-3 disabled:bg-red-200 flex mb-5 text-white bg-red-500 border-0 py-3 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
        >
        SUBMIT
      </button>
      {/* <button
        onClick={handleUserSubmit2}
        className="m-3 disabled:bg-red-200 flex mb-5 text-white bg-red-500 border-0 py-3 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
        >
        ADD MORE SIZES OR COLORS
      </button> */}
      {/* <button
        onClick={handleUserSubmit}
        className="m-3 disabled:bg-red-200 flex mb-5 text-white bg-red-500 border-0 py-2 px-1 focus:outline-none hover:bg-red-600 rounded text-sm"
        >
        ADD MORE COLORS
      </button> */}
        </div>
    </div>
  );
};

export default add;
