import React from 'react'

import DashboardCard from './BaseCard'
import { Grid, Paper } from "@mui/material"
import { createTheme, styled } from "@mui/material"
import All_Products from './All_Products'
import mongoose from 'mongoose'
import Product from '@/models/Product'
const allproducts = ({products}) => {
 
  
    return (
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <All_Products products={products}/>
          </Grid>
        </Grid>
      )
}

export default allproducts
export async function getServerSideProps(context) {
  let error=null;
  if (!mongoose.connections[0].readystate) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Product.find();
  return {
    props: {products:JSON.parse(JSON.stringify(products))}}
}