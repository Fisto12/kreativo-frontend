import { Verified } from '@mui/icons-material'
import { Box, Button, Stack, styled, Typography } from '@mui/material'
import React from 'react'
const IntroTypo=styled(Box)({
    display:'flex',
    padding:'7px'
})
const Business = () => {
  return (
    <Box sx={{background:'#072A6C',height:'100%'}}>
         <Stack direction={{xs:'column',lg:'row',md:'row'}}>
            <Box sx={{flex:2,padding:'50px'}}>
                <IntroTypo>
                    <Typography variant='h5' sx={{color:'white',fontWeight:'bolder',marginRight:'12px'}}>Kreativo Business.</Typography>
                    <Button sx={{borderRadius:'17px'}} variant='contained'>New</Button>
                </IntroTypo>
                <Typography gutterBottom sx={{color:'white',fontWeight:'bolder'}} variant='h4'>A business solution designed for teams</Typography>
                <Typography gutterBottom variant='h6' sx={{color:'white',fontWeight:'bolder'}}>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</Typography>
                <IntroTypo><Verified sx={{color:'white'}}/> <Typography  sx={{color:'white',marginLeft:'6px',fontWeight:'bolder',fontSize:'1.1rem'}} variant='h4'>Connect to freelancers with proven business experience</Typography></IntroTypo>
                <IntroTypo><Verified sx={{color:'white'}}/> <Typography  sx={{color:'white',marginLeft:'6px',fontWeight:'bolder',fontSize:'1.1rem'}} variant='h4'>Get matched with the perfect talent by a customer success manager</Typography></IntroTypo>
                <IntroTypo><Verified sx={{color:'white'}}/> <Typography  sx={{color:'white',marginLeft:'6px',fontWeight:'bolder',fontSize:'1.1rem'}} variant='h4'>Manage teamwork and boost productivity with one powerful workspace</Typography></IntroTypo>
                <Button sx={{borderRadius:'10px',background:'green',padding:'10px',marginTop:'15px'}} variant='contained'>Explore Kreativo business</Button>
            </Box>
            <Box sx={{flex:2}}>
                <img width='500px' height='400px' style={{margin:'30px'}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
            </Box>
         </Stack>
    </Box>
  )
}

export default Business