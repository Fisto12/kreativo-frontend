import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Explore = () => {
  return (
    <Box sx={{height:'100%', marginTop:'20px',padding:'70px'}}>
        <Typography variant='h4'sx={{fontWeight:'bolder',color:'orange'}}>Explore the marketplace</Typography>
         <Grid sx={{padding:'20px'}} container rowSpacing={3} columnSpacing={{ xs: 8, sm: 2, md: 3,lg:8 }}>
  <Grid item lg={2} md={4} xs={6}>
    <img style={{height:'60px',marginLeft:'20px'}} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
    <Typography sx={{marginLeft:'9px'}} >Graphics and design </Typography>
  </Grid>
   <Grid item lg={2} md={4} xs={6}>
    <img style={{height:'60px',marginLeft:'20px'}} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg" alt="" />
    <Typography sx={{marginLeft:'9px'}} >Digital Marketing </Typography>
  </Grid>
   <Grid item lg={2} md={4} xs={6}>
    <img style={{height:'60px',marginLeft:'20px'}} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg" alt="" />
    <Typography sx={{marginLeft:'9px'}} >Writing and Translation </Typography>
  </Grid>
   <Grid item lg={2} md={4} xs={6}>
    <img style={{height:'60px',marginLeft:'20px'}} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg" alt="" />
    <Typography sx={{marginLeft:'9px'}} >Video and animation </Typography>
  </Grid>
    <Grid item lg={2} md={4} xs={6}>
    <img style={{height:'60px',marginLeft:'20px'}} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg" alt="" />
    <Typography sx={{marginLeft:'9px'}} >Music and Audio </Typography>
  </Grid>
    <Grid item lg={2} md={4} xs={6}>
    <img style={{height:'60px',marginLeft:'20px'}} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg" alt="" />
    <Typography sx={{marginLeft:'9px'}} >Programming and Tech</Typography>
  </Grid>
   <Grid item lg={2} md={4} xs={6}>
    <img style={{height:'60px',marginLeft:'20px'}} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg" alt="" />
    <Typography sx={{marginLeft:'20px'}} > Business </Typography>
  </Grid>
    <Grid item lg={2} md={4} xs={6}>
    <img style={{height:'60px',marginLeft:'20px'}} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg" alt="" />
    <Typography sx={{marginLeft:'20px'}} >Lifestyle </Typography>
  </Grid>
    <Grid item lg={2} md={4} xs={6}>
    <img style={{height:'60px',marginLeft:'20px'}} src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg" alt="" />
    <Typography sx={{marginLeft:'45px'}} >Data </Typography>
  </Grid>
</Grid>

    </Box>
  )
}

export default Explore