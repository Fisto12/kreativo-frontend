import { Verified } from '@mui/icons-material'
import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
const DownTypo = styled('div')({
  display:'flex'
})
const About = () => {
  return (
     <Box sx={{background:' #90EE90',height:{lg:'80vh',md:'110vh',sm:'140vh',xs:'100%'},marginTop:'20px'}}>
     <Stack direction={{lg:'row',xs:'column',md:'row'}} sx={{margin:'20px'}}>
        <Box sx={{flex:2,margin:'auto',height:'90vh',marginTop:'80px'}}>
             <Typography variant='h5' sx={{fontSize:'1.8rem',fontWeight:'bolder'}}>A whole world of freelance talent at your fingertips</Typography>
             <DownTypo>
              <Verified sx={{marginTop:'5px'}}/><Typography gutterBottom sx={{fontWeight:'bolder',fontSize:'1.4rem'}}>The best for every budget</Typography>
             </DownTypo>
             <Typography variant='body2' sx={{fontSize:'1.3rem'}} gutterBottom>Find high-quality services at every price point. No hourly rates, just project-based pricing.</Typography>
             <DownTypo>
              <Verified sx={{marginTop:'5px'}}/><Typography gutterBottom sx={{fontWeight:'bolder',fontSize:'1.4rem'}}>Quality work done quickly</Typography>
             </DownTypo>
             <Typography variant='body2' sx={{fontSize:'1.3rem'}} gutterBottom>Find the right freelancer to begin working on your project within minutes.</Typography>
             <DownTypo>
              <Verified sx={{marginTop:'5px'}}/><Typography gutterBottom sx={{fontWeight:'bolder',fontSize:'1.4rem'}}>Protected payments, every time</Typography>
             </DownTypo>
             <Typography variant='body2' sx={{fontSize:'1.3rem'}} gutterBottom>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</Typography>
             </Box>
        <Box sx={{flex:2,marginTop:'50px'}}>
                <iframe 
                            width="520"
                            height="350"
                            src="https://www.youtube.com/embed/eSIJddEieLI? 
                            autoplay=1"
                            title="YouTube video player"
                            frameborder="0"
                          ></iframe>
        </Box>
     </Stack>
   </Box>
  )
}

export default About


// #90EE90