import { Search } from '@mui/icons-material'
import { Box, Button, InputBase, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { createTheme } from "@mui/material";

 export const theme = createTheme({
  typography: {
    fontFamily: [
      'Rubik',
      'sans-serif',
    ].join(','),
  },});
  const StyledButton = styled('div')({
    margin:'20px'
  })
   const Image = styled('img')({
    border: '0px'
  })
const Banner = () => {
  return (
   <Box sx={{background:' #3379FF',height:'100vh',marginTop:'100px'}}>
     <Stack direction='row' sx={{margin:'30px'}}>
        <Box sx={{flex:4,margin:'auto',height:'80vh'}}>
            <Typography variant='h3' sx={{fontWeight:'bolder',position:'absolute',top:{lg:'50%',md:'50%',sm:'50%',xs:"40%"},width:'100%',fontSize:{lg:'40px',xs:'30px'},color:'#fff',fontFamily:theme.typography.fontFamily}}>Find the perfect freelance services </Typography>
            <Typography variant='body2' sx={{fontWeight:'bolder',position:'absolute',top:{lg:'50%',xs:'50%'},width:'100%',fontSize:{lg:'40px',xs:'30px'},color:'#fff',marginTop:'40px',fontFamily:theme.typography.fontFamily}}>  for your business</Typography>
             <InputBase sx={{fontWeight:'bolder',position:'absolute',top:{xs:'70%'},width:{xs:'80%',lg:'50%'},height:'50px',background:'white',borderRadius:"8px",padding:'10px'}}
             placeholder='Try "building mobile app"'
             startAdornment={<Search/>}
             endAdornment={<Button variant='contained'sx={{padding:'14px',marginRight:'-10px'}}>Search</Button>}
             />
             <StyledButton sx={{marginLeft:'-10px',color:'white',position:'absolute',top:{xs:'80%'},display:{xs:'none',md:'none',sm:'none',lg:'flex'}}} >
                 <Typography variant='h6' sx={{marginRight:'5px'}}>Popular:</Typography>
                <Button sx={{marginRight:'10px',border:'1px solid white',width:'130px',borderRadius:'10px'}} variant='contained'>Web design</Button>
                 <Button sx={{marginRight:'10px',border:'1px solid white',width:'140px',borderRadius:'10px'}}  variant='contained'>Word press</Button>
                <Button variant='contained' sx={{border:'1px solid white',width:'140px',borderRadius:'10px',marginRight:'10px'}} >Logo design</Button>
                 <Button variant='contained' sx={{border:'1px solid white',width:'150px',borderRadius:'10px'}} >Video editing</Button>
            </StyledButton>      
             </Box>
        <Box sx={{flex:2,display:{xs:'none',md:'none',sm:'none',lg:'block'}}}>
               <Box sx={{marginTop:'40px',height:'60vh',background:'none'}} >
                <Image sx={{border:'0px'}}  width='500vw'height='390vh' src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />

               </Box>
        </Box>
     </Stack>
      
   </Box>
  )
}

export default Banner
