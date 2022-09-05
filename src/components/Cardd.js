import React from 'react'
import { Avatar, Card, CardMedia, IconButton, styled, Tooltip, Typography } from '@mui/material' 
import { Favorite, Star } from '@mui/icons-material'
const Typp = styled('div')({
  display:'flex',
  margin:'7px'
})
const DownTypo = styled('div')({
  display:'flex',
  margin:'2px',
  borderBottom:'1px solid black',
  padding:'10px'
})
const DownTypo2 = styled('div')({
  display:'flex',
  justifyContent:'space-between',
  margin:'2px',
  padding:'2px'
})
const Cardd = () => {
  return (
     <Card sx={{height:'450px',width:{lg:'290px',xs:'400px',sm:'300px'},margin:'auto'}}>
              <CardMedia
              component='img'
              height='224'
              image='https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228366463/original/1310f636fd9ddd7cd2d5b85e250ffe69d9889671.png'
              />
              <Typp>
                  <Avatar sx={{border:'2px solid blue'}}/>
                  <Typography sx={{color:'blue',fontWeight:'bolder',margin:'9px'}}>fisto</Typography>
              </Typp>
              <Typography sx={{color:'green',margin:'3px'}}>I will build responsive websites with wordpress</Typography>
              <DownTypo>
                   <Star sx={{color:'gold'}}/>
                   <Typography sx={{fontSize:'0.9rem',marginTop:'3px'}}>5.0</Typography>
                   <Typography sx={{fontSize:'0.9rem',marginTop:'3px'}}>(22)</Typography>
              </DownTypo>
              <DownTypo2>
                <Tooltip title="Delete">
                   <IconButton>
                  <Favorite sx={{color:'red'}} />
                  </IconButton>
                </Tooltip>
                <Typography sx={{marginTop:'7px'}} >Starting at 20$</Typography>
              </DownTypo2>
     </Card>
  )
}

export default Cardd