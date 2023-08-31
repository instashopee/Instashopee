import React from "react"
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

const All_Products = ({products}) => {
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
                  Title
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
          <TableBody>
            {Object.values({products}).map(product => (
              <TableRow key={product.slug}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {product.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography  fontWeight={500}>
                        {product.slug}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                    <TableCell>

                        <img style={{height:'50px'}} src={product.img} alt="" />
                    </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.size}/{product.color}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    Rs.{product.price}/-
                  </Typography>
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
