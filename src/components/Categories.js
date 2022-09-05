import { Box, Grid } from '@mui/material'
import React from 'react'
import Cardd from './Cardd'

const Categories = () => {
  return (
    <Box sx={{height:'100vh',marginTop:'10px'}}>
        <Grid container spacing={{ xs: 2, md: 3,lg:3 }}  >
        <Grid item xs={12} sm={6} md={4} lg={3} >
             <Cardd/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
             <Cardd/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
             <Cardd/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
             <Cardd/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
             <Cardd/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
             <Cardd/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
             <Cardd/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
             <Cardd/>
        </Grid>
        </Grid>
    </Box>
  )
}

export default Categories