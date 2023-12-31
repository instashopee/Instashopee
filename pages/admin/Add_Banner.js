import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin_sidebar from "@/components/Admin_sidebar";


const Add_Banner = () => {


  const [banner1, setbanner1] = useState("");
  const [banner2, setbanner2] = useState("");
  const [banner3, setbanner3] = useState("");
  const [banner4, setbanner4] = useState("");
  const [static_banner1, setstatic_banner1] = useState("");
  const [static_banner2, setstatic_banner2] = useState("");
  const [static_banner3, setstatic_banner3] = useState("");
  const [static_banner4, setstatic_banner4] = useState("");
  const [static_banner5, setstatic_banner5] = useState("");
  const [static_banner6, setstatic_banner6] = useState("");
  const [static_banner7, setstatic_banner7] = useState("");
  const [static_banner8, setstatic_banner8] = useState("");
  const [static_banner9, setstatic_banner9] = useState("");
  const [static_banner10, setstatic_banner10] = useState("");
  const handleUserSubmit = async () => {
          let data = {
  
              banner1,
              banner2,
              banner3,
              banner4,
              static_banner1,
              static_banner2,
              static_banner3,
              static_banner4,
              static_banner5,
              static_banner6,
              static_banner7,
              static_banner8,
              static_banner9,
              static_banner10,
            
         
          };
          let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/banners`, {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          
          let res = await a.json();
      
      
      
          // setbanner1("");
          // setbanner2("");
          // setbanner3("");
          // setbanner4("");
  
  
  
      
          if (res.success) {
            toast.success("Successfully Changed Banner", {
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
            toast.error("Error Adding Banner", {
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


  const router = useRouter();
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }

  
  }, []);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  const [image8, setImage8] = useState(null);
  const [image9, setImage9] = useState(null);
  const [image10, setImage10] = useState(null);
  const [image11, setImage11] = useState(null);
  const [image12, setImage12] = useState(null);
  const [image13, setImage13] = useState(null);
  const [image14, setImage14] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [createObjectURL2, setCreateObjectURL2] = useState(null);
  const [createObjectURL3, setCreateObjectURL3] = useState(null);
  const [createObjectURL4, setCreateObjectURL4] = useState(null);


  const refresh= () => {
    window.location=`${process.env.NEXT_PUBLIC_HOST}/admin/Add_Banner`

  }
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
    var name = document.getElementById('fileInput'); 
    setbanner1("/images/"+name.files.item(0).name);
      
    };
    const uploadToClient2 = (event) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];
        
        setImage2(i);
        setCreateObjectURL2(URL.createObjectURL(i));
      }
      var name = document.getElementById('fileInput2'); 
      setbanner2("/images/"+name.files.item(0).name);
        
      };
      const uploadToClient3 = (event) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
          
          setImage3(i);
          setCreateObjectURL3(URL.createObjectURL(i));
        }
        var name = document.getElementById('fileInput3'); 
        setbanner3("/images/"+name.files.item(0).name);
        
  };
      const uploadToClient4 = (event) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
          
          setImage4(i);
          setCreateObjectURL4(URL.createObjectURL(i));
        }
        var name = document.getElementById('fileInput4'); 
        setbanner4("/images/"+name.files.item(0).name);
        
  };
  const succes = () => {
    toast.success("Successfully Uploaded All Banners", {
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
    body.append("file", image4);
    const response = await fetch("/api/image", {
      method: "POST",
      body,
      
    });
    succes()
  };
  const handleChange = (e) => {
    if (e.target.name == "banner1") {
      setbanner1(e.target.value);
    } else if (e.target.name == "banner2") {
        setbanner2(e.target.value);
    } else if (e.target.name == "banner3") {
        setbanner3(e.target.value);
    } else if (e.target.name == "banner4") {
        setbanner4(e.target.value);
    } 

  };
 
  return (
    <div className="top-0 left-0 bg-white w-full min-h-screen z-40  mt-8 mb-24 overflow-y-auto">

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
    <h1 className="text-2xl text-center font-bold">ADD BANNERS</h1>

   
      <div className="mx-80">
        <div className="border-2 mx-14 w-full mt-5 p-5">
        <main className="container w-full">
       
        <article aria-label="File Upload Modal" className="relative h-full flex flex-col bg-white shadow-xl rounded-md" ondrop="dropHandler(event);" ondragover="dragOverHandler(event);" ondragleave="dragLeaveHandler(event);" ondragenter="dragEnterHandler(event);">
        
     

  
          <section className="p-2 w-full h-full flex flex-wrap">
            <div className="border-dashed border-2 border-gray-400">
             
       
             <input id="fileInput" type="file" name="myImage" onChange={uploadToClient} style={{margin:"1.5rem"}}/>
              <input id="fileInput2" type="file" name="myImage" onChange={uploadToClient2} style={{margin:"1.5rem"}}/>
              <input id="fileInput3" type="file" name="myImage" onChange={uploadToClient3} style={{margin:"1.5rem"}}/>
              <input id="fileInput4" type="file" name="myImage" onChange={uploadToClient4} style={{margin:"1.5rem"}}/>
       
            </div>

          </section>
     

          <div className="flex m-2 ">
            <img src={createObjectURL} style={{ height: "200px",width: "200px",margin:"auto"}} className="imgview"/>
            <img src={createObjectURL2} style={{ height: "200px",width: "200px",margin:"auto" }}className="imgview" />
            <img src={createObjectURL3} style={{ height: "200px",width: "200px",margin:"auto" }}className="imgview" />
            <img src={createObjectURL4} style={{ height: "200px",width: "200px",margin:"auto" }}className="imgview" />

            </div>
          <footer className="flex justify-end px-8 pb-8 pt-4 space-x-2">
          <p className="float-left mx-12 text-gray-500 text-center font-bold">!! Make sure image format is .mp4 and rename your 
          banner name as banner1, banner 2, banner3, banner4 ... !!</p>
        
            <button onClick={refresh} id="submit" className="rounded-sm px-3 py-1 bg-gray-500 hover:bg-gray-400 text-white focus:shadow-outline focus:outline-none">
              Refresh
            </button>
            <button onClick={uploadToServer} id="submit" className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none">
              Upload now
            </button>
            <button onClick={handleUserSubmit} id="submit" className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none">
              Change Banners
            </button>
            {/* <button onClick={myFunction} id="cancel" className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
              Cancel
            </button> */}
          </footer>
        </article>
      </main>
    </div>
    
        </div>

        
        <div className="hidden float-right">
         <div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="banner1" className="leading-7 text-sm text-gray-600">
             banner1
             </label>
             <input
              
               placeholder="/images/filename.extension"
               onChange={handleChange}
               value={banner1}
               type="banner1"
               id="banner1"
               name="banner1"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         <div className="px-2 w-1/2">
         <div className=" mb-4">
             <label for="banner2" className="leading-7 text-sm text-gray-600">
             banner2
             </label>
             <input
              
               placeholder="/images/filename.extension"
               onChange={handleChange}
               value={banner2}
               type="banner2"
               id="banner2"
               name="banner2"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         <div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="banner3" className="leading-7 text-sm text-gray-600">
             banner3
             </label>
             <input
              
               placeholder="/images/filename.extension"
               onChange={handleChange}
               value={banner3}
               type="banner3"
               id="banner3"
               name="banner3"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         <div className="px-2 w-1/2">
           <div className=" mb-4">
             <label for="banner4" className="leading-7 text-sm text-gray-600">
             banner4
             </label>
             <input
              
               placeholder="/images/filename.extension"
               onChange={handleChange}
               value={banner4}
               type="banner4"
               id="banner4"
               name="banner4"
               className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             />
           </div>
         </div>
         </div>
    
      </div>
 

  );
};

export default Add_Banner;
