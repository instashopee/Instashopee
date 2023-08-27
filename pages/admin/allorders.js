import React from 'react'

import DashboardCard from './BaseCard'
import { Grid, Paper } from "@mui/material"
import { createTheme, styled } from "@mui/material"
import All_Order from './All_Order'
import mongoose from 'mongoose'
import Order from '@/models/Product'
const allorders = ({orders}) => {
 
  
    return (
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <All_Order orders={orders}/>
          </Grid>
        </Grid>
      )
}

export default allorders
export async function getServerSideProps(context) {
  let error=null;
  if (!mongoose.connections[0].readystate) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let orders = await Order.find();
  return {
    props: {orders:JSON.parse(JSON.stringify(orders))}}
}