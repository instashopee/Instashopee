import React, { useEffect, useRef } from "react"
import Glide from "@glidejs/glide"
import ReactPlayer from "react-player"

export default function SliderIndicatorsControlsInside() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 5000,
      animationDuration: 1000,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])
  const vidRef=useRef();

  // useEffect(() => { vidRef.current.play(); },[]);
  return (
   
   
    <>
      {/*<!-- Component: Slider with indicators & controls inside --> */}
      <div className="relative w-full glide-03">
        <img className="sm:hidden w-full h-[5rem]" src="/banners/static_banner.jpg" alt="" />
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li >
              
            <img className="2xl:hidden w-full h-[5rem]" src="/banners/st_b1.png" alt="" />

            {/* <video ref={vidRef} className="w-full h-full" muted  autoPlay={true} loop src="/banners/banner3.mp4" ></video> */}

            {/* <ReactPlayer url='/banners/banner_vid.mp4' /> */}

              {/* <img
                src='/banners/banner1.gif'
                className="hover:scale-105 transition-all duration-500 cursor-pointer w-full m-auto"
              /> */}
            </li>
            <li>
            <img className="2xl:hidden w-full h-[5rem]" src="/banners/st_b2.png" alt="" />

            {/* <video ref={vidRef} className="w-full h-full" muted  autoPlay={true} loop src="/banners/banner2.mp4" ></video> */}

              {/* <img
                src="/banners/banner2.jpg"
                className="hover:scale-105 transition-all duration-500 cursor-pointer w-full max-w-full max-h-full m-auto"
              /> */}
            </li>
            <li>
            <img className="2xl:hidden w-full h-[5rem]" src="/banners/st_b3.png" alt="" />

            {/* <video ref={vidRef} className="w-full h-full" muted  autoPlay={true} loop src="/banners/banner1.mp4" ></video> */}

              {/* <img
                src="/banners/banner1.gif"
                className="hover:scale-105 transition-all duration-500 cursor-pointer w-full max-w-full max-h-full m-auto"
              /> */}
            </li>
            <li>
            {/* <video className="w-full h-full" muted  autoPlay={true} loop src="/banners/banner3.mp4" ></video> */}
              {/* <img
                src='/banners/banner4.jpg'
                className="hover:scale-105 transition-all duration-500 cursor-pointer w-full max-w-full max-h-full m-auto"
              /> */}
                          <img className="2xl:hidden w-full h-[5rem]" src="/banners/st_b4.png" alt="" />

            {/* <video ref={vidRef} className="w-full h-full" muted  autoPlay={true} loop src="/banners/banner4.mp4" ></video> */}

            </li>
            {/* <li>
              <img
                src="/Hardware.png"
                className="w-full max-w-full max-h-full m-auto"
              />
            </li> */}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Slider with indicators & controls inside --> */}
    </>
  )
}

//  export async function getServerSideProps(context) {
//    if (!mongoose.connections[0].readystate) {
//      await mongoose.connect(process.env.MONGO_URI);
//    }
//    let banner = await Banner.find({type:'normal'});
//    return {
//      props: {
//  banner:JSON.parse(JSON.stringify(banner)),
       
//      }, //
//    };
//  }


// export async function getServerSideProps(context) {
//   if(!mongoose.connections[0].readystate){
//     await mongoose.connect(process.env.MONGO_URI)
// }

//   let products = await Product.find({type:'top selling'})
//   let hinges = {}
//   for(let item of products){
//     if(item.title in hinges){
//         if(!hinges[item.title].color.includes(item.color) && item.availableQty > 0){
//           hinges[item.title].color.push(item.color)
//         }
//         if(!hinges[item.title].size.includes(item.size) && item.availableQty > 0){
//           hinges[item.title].size.push(item.size)
//         }
//     }

//     else{
//       hinges[item.title] = JSON.parse(JSON.stringify(item))
//       if(item.availableQty >0){
//             hinges[item.title].color = [item.color]
//             hinges[item.title].size = [item.size]
//           }else{
//             hinges[item.title].color = []
//             hinges[item.title].size = []
//           }
//     }
//   }

//   return{
//     props:{products:JSON.parse(JSON.stringify(hinges))},
//   }
//   }