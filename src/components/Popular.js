import { Box,Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
const breakPoints = [
  { width: 1,  itemsToShow: 2 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200,  itemsToShow: 4 },
];
const Popular = () => {
 
  return (
    <Box sx={{background:"#fff",height:'100vh',marginTop:'20px'}}>
      <Typography variant='h4'sx={{fontWeight:'bolder',marginLeft:'120px'}}>Popular professional services</Typography>
     <Carousel breakPoints={breakPoints}   >
          <Item  >
            <Box sx={{marginRight:{xs:'20px'}}}>
                  <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" alt="" />
                   <Typography align='center' sx={{color:'black'}}>Build your brand</Typography>
                   <Typography align='center' sx={{fontSize:'1.4rem',fontWeight:'bolder',color:'blue'}}>Logo Design</Typography>
            </Box>
          </Item>
            <Item>
            <Box sx={{marginRight:{xs:'20px'}}}> 
                 <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png" alt="" />
                   <Typography align='center' sx={{color:'black'}}>Customize your site</Typography>
                   <Typography align='center' sx={{fontSize:'1.4rem',fontWeight:'bolder',color:'blue'}}>Word press</Typography>
            </Box>
          </Item>
             <Item>
            <Box sx={{marginRight:{xs:'20px'}}}>
                 <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png" alt="" />
                   <Typography align='center' sx={{color:'black'}}>Share your message</Typography>
                   <Typography align='center' sx={{fontSize:'1.4rem',fontWeight:'bolder',color:'blue'}}>Voice over</Typography>
            </Box>
          </Item>
               <Item>
            <Box sx={{marginRight:{xs:'20px'}}}>
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" alt="" />
                   <Typography align='center' sx={{color:'black'}}>Engage your audience</Typography>
                   <Typography align='center' sx={{fontSize:'1.4rem',fontWeight:'bolder',color:'blue'}}>Video explainer</Typography>
            </Box>
          </Item>
                <Item>
            <Box sx={{marginRight:{xs:'20px'}}}>
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png" alt="" />
                   <Typography align='center' sx={{color:'black'}}>Learn your business</Typography>
                   <Typography align='center' sx={{fontSize:'1.4rem',fontWeight:'bolder',color:'blue'}}>Data entry</Typography>
            </Box>
          </Item>
           <Item>
            <Box sx={{marginRight:{xs:'20px'}}}>
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png" alt="" />
                   <Typography align='center' sx={{color:'black'}}>Reach more customers</Typography>
                   <Typography align='center' sx={{fontSize:'1.4rem',fontWeight:'bolder',color:'blue'}}>Social media</Typography>
            </Box>
          </Item>
              <Item>
            <Box sx={{marginRight:{xs:'20px'}}}>
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png" alt="" />
                   <Typography align='center' sx={{color:'black'}}>Color your dreams</Typography>
                   <Typography align='center' sx={{fontSize:'1.4rem',fontWeight:'bolder',color:'blue'}}>Illustration</Typography>
            </Box>
          </Item>
        </Carousel>
    </Box>
  )
}

export default Popular