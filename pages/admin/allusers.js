import React, { useEffect } from 'react'

import DashboardCard from './BaseCard'
import { Grid, Paper } from "@mui/material"
import { createTheme, styled } from "@mui/material"
import All_Users from './All_Users'
import mongoose from 'mongoose'
import User from '@/models/User'
import { useRouter } from 'next/router'
const all_users = ({users}) => {
 
  let email='abhishekjain4548@gmail.com'
  const router = useRouter();
  useEffect(() => {
    if(email=="abhishekjain4548@gmail.com"){
      router.push('/admin/allusers')
    }
    else{
      router.push(`${process.env.NEXT_PUBLIC_HOST}`)
    }
  }, [])
    return (
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <All_Users orders={users}/>
          </Grid>
        </Grid>
      )
}

export default all_users
export async function getServerSideProps(context) {
  let error=null;
  if (!mongoose.connections[0].readystate) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let users = await User.find();
  return {
    props: {users:JSON.parse(JSON.stringify(users))}}
}