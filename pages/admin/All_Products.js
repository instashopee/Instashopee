import React, { useEffect, useState } from "react"
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer
} from "@mui/material"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DashboardCard from "./BaseCard"
import { useRouter } from "next/router"
import Link from "next/link"
import Admin_sidebar from "@/components/Admin_sidebar";


const All_Products = () => {
  const router=useRouter()
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


      <Admin_sidebar/>
    
    <div className="ml-80 w-[80rem] shadow-none">
    <DashboardCard  title={'All Products'}>
      <TableContainer className="min-h-screen"
        sx={{
          width: {
            xs: "274px",
            sm: "100%"
          }
        }}
      >
        <Table 
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2
          }}
        >
          <TableHead>
            <TableRow >
              <TableCell >
                <Typography color="textSecondary" variant="h6">
                 Given Id
                </Typography>
              </TableCell>
              <TableCell >
                <Typography color="textSecondary" variant="h6">
                  Title
                </Typography>
              </TableCell>
              <TableCell >
                <Typography color="textSecondary" variant="h6">
                  Type
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  UniqueId
                </Typography>
              </TableCell>
             
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Image
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Size/Color
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Price
                </Typography>
              </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody >
            {Object.values(products).map(item => (
              <TableRow className="cursor-pointer" key={item.slug}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                  {item._id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {item.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {item.type}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography  fontWeight={500}>
                        {item.slug}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell className="flex items-center">

                  <img style={{height:'50px'}} src={item.img} alt="" />
                  <img style={{height:'50px'}} src={item.img1} alt="" />
                  <img style={{height:'50px'}} src={item.img2} alt="" />
                  </TableCell>
                  <TableCell>
                  <Typography color="textSecondary" variant="h6">
                  {item.size}/{item.color}
                  </Typography>
                  </TableCell>
                  <TableCell>
                  <Typography color="textSecondary" variant="h6">
                  Rs.{item.price}/-
                  </Typography>
                  </TableCell>
                                  
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardCard></div>
    </div>
  )
}

export default All_Products
