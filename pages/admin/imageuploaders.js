import React from 'react'
import { Grid, ImageList, ImageListItem } from "@mui/material"
import DashboardCard from './BaseCard'
import Image from "next/image"

import img1 from "public/logo.png"
import img2 from "public/logo.png"
import img3 from "public/logo.png"
import img4 from "public/logo.png"
import img5 from "public/logo.png"
import img6 from "public/logo.png"
import img7 from "public/logo.png"
const itemData = [
  {
    img: img1,
    rows: 4,
    cols: 2
  },
  {
    img: img2,
    rows: 4,
    cols: 2
  },
  {
    img: img3,
    rows: 4,
    cols: 2
  },
  {
    img: img2,
    rows: 4,
    cols: 2
  },
  {
    img: img4,
    cols: 2,
    rows: 2
  },
  {
    img: img3,
    cols: 2,
    rows: 2
  },

  {
    img: img6,
    rows: 4,
    cols: 2
  },
  {
    img: img5,
    rows: 4,
    cols: 2
  },
  {
    img: img7,
    rows: 4,
    cols: 2
  },
  {
    img: img2,
    rows: 4,
    cols: 2
  }
]
const imageuploaders = () => {
  return (
    <Grid container spacing={0}>
    <Grid item xs={12} lg={12}>
      <DashboardCard title="My Images">
        <ImageList variant="quilted" cols={4} rowHeight={121}>
          {itemData.map((itemimg, index) => (
            <ImageListItem
              key={index}
              cols={itemimg.cols || 1}
              rows={itemimg.rows || 1}
            >
              <Image
                src={itemimg.img}
                alt="img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top"
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </DashboardCard>
    </Grid>
  </Grid>
  )
}

export default imageuploaders