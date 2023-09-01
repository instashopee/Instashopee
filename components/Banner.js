import React, { useEffect } from "react"

export default function Banner1({banner}) {
  return(
    <div>
        <img className="w-full" src={banner} alt="" />
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


