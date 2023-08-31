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

import DashboardCard from "./BaseCard"
import { useRouter } from "next/router"
import Link from "next/link"

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
    <DashboardCard title={'All Products'}>
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
            {Object.values(products).map(item => (
              <TableRow key={item.slug}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {item.title}
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
  )
}

export default All_Products
