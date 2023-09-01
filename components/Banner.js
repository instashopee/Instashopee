import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
// import Banner from "@/models/Banner";
import mongoose from "mongoose";

export default function Banner1({banner}) {
  return(
    <div>
        <img src="Hardware_banner.png" alt="" />
    </div>
  )
}


// export async function getServerSideProps(context) {
//   if (!mongoose.connections[0].readystate) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }

//   let banner = await Banner.findById(context.query.id);

//   return {
//     props: {
//         banner: JSON.parse(JSON.stringify(banner)),
//     }, //
//   };
// }


