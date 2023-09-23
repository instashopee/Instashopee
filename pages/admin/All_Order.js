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


const All_Order = () => {
  const router=useRouter()
  const [orders, setOrders] = useState({})
  
  useEffect(() => {
    const fetchOrders=async()=>{
      let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token:JSON.parse(localStorage.getItem('myuser')).token}),
      });
    
      let res=await a.json()
      setOrders(res.orders)
    }
    if(!localStorage.getItem("myuser")){
      router.push('/')
    }else{
      fetchOrders()
  }

     
}, [])
  return (
    <div className="fixed top-0 left-0 bg-white w-full h-screen z-40 overflow-y-auto mt-16">
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
  
  <div className="shadow-none">
    <DashboardCard title={'All Orders'}>
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
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Email
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Name
                </Typography>
              </TableCell>
             
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Phone
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Address
                </Typography>
              </TableCell>
              
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Amount
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  View All Details
                </Typography>
              </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(orders).map(item => (
              <TableRow key={item.OrderId}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {item.email}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {item.phone}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {item.address}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        Rs.{item.amount}/-
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        <Link legacyBehavior href={'/admin/admin_all_orders'}><a><button className="text-rose-500">More Details</button></a></Link>
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                
               

              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardCard>
    </div>
    </div>
  )
}

export default All_Order
