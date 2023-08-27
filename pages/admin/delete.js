import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const deleted = () => {
  const [slug, setSlug] = useState("");

  const router = useRouter();
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }
  }, []);

  const handleUserSubmit = async () => {
    let data = {
        slug,}
    let b = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/delete`, {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let res= await b.json();
    setSlug("");
  

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
  };
  // console.log(txnRes)
  const handleChange = (e) => {
     if (e.target.name == "slug") {
      setSlug(e.target.value);
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
      <h1 className="text-3xl text-center font-bold">DELETE PRODUCT</h1>
      <div className="mx-auto flex my-2">
        <div className="px-12 w-full">
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
      </div>
      <div className="px-10">

        <button
        onClick={handleUserSubmit}
        className="m-3 disabled:bg-red-200 flex mb-5 text-white bg-red-500 border-0 py-2 px-12 focus:outline-none hover:bg-red-600 rounded text-sm"
        >
        SUBMIT
      </button>
      </div>
    </div>
  );
};

export default deleted;
