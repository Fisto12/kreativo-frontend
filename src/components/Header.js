import {  ExpandLess, ExpandMore, Menu, Search } from '@mui/icons-material'
import { AppBar, Box, Button, InputBase, Toolbar, Modal, Typography, ListItemButton, ListItemText, List, Collapse, ListSubheader } from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../theme'

  const style = {
  position: 'absolute',
  top: '50%',
  left: {xs:'24%',sm:'15%'},
  transform: 'translate(-50%, -50%)',
  width: 200,
  height: '100vh',
  background: '#fff',
  border:'1px solid none',
  boxShadow: 24,
  p: 4,
 overflowY: 'auto'
};
const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openedItemId, setOpenedItemId] = useState(true);

    const handleClick = orgEvent => {
       let clickedItemId = orgEvent.currentTarget.id;
         if (openedItemId === clickedItemId) {
               setOpenedItemId("");
            } else {
          setOpenedItemId(clickedItemId);
          }
            //setOpen(!open);
         };

    const NavItems = ['Kreativo business','Explore','Become a seller']
  return (
    <div style={{width:'100%',marginLeft:'-7px',padding:0,marginTop:"-7px"}}>
       <AppBar sx={{backgroundColor:'#fff',color:'black'}} position='fixed'>
    <Toolbar sx={{alignItems:'center',display:'flex'}}>
        <Menu onClick={handleOpen} sx={{color:'black',fontSize:'1.6rem',display:{xs:"flex",md:'none',sm:'flex',lg:'none'}}}/>
        <Typography 
        sx={{
            fontFamily:theme.typography.fontFamily,
            fontWeight:'bolder',
            cursor:'pointer',
            marginLeft:{xs:'120px',sm:'80px'}
            }} variant='h5'>
            KREATIVO
        </Typography>
        <InputBase 
        sx={{
            border:'1px solid black',
            marginLeft:'18px',
            width:{lg:'340px',md:'400px'},
            height:"40px", 
            borderRadius:'4px',
            padding:'3px',
            display:{xs:'none',md:'flex'}
        }}
        placeholder='What service are you looking for ......'
        endAdornment={<Search 
             sx={{
                background:'black', 
                marginRight:'-2.5px',
                marginTop:'1px',
                color:'white',
                padding: '7px',
                fontSize:'25px',
                cursor:'pointer'
            }}/>}
        />
        <Box 
           sx={{
             display:'flex',
             marginLeft:'55px',
             padding:'20px',
             justifyContent:'space-betwwen'
             }}>
          {
            NavItems.map(items=>(
                <Typography  
                   sx={{
                    display:{xs:'none',sm:'none',md:'flex',lg:"flex"},
                   cursor:'pointer',
                   fontSize:{lg:'1.2rem',md:'0.79rem',fontWeight:'200'},
                   padding:'10px',
                   justifyContent:'space-between',
                   fontFamily:theme.typography.fontFamily,
                   "&:hover":{
                            color: "green"}}}>
                    {items}
                </Typography>
            ))
          }
          <Typography sx={{alignItems:'center',padding:'10px',display:{md:'flex',lg:'flex',sm:'flex',xs:"none"}}}>Signin</Typography>
          <Button size='medium' variant="outlined" sx={{border:'1px solid green',color:'green',marginLeft:'10px'}}>Join</Button>      
        </Box>
    </Toolbar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <Button variant='contained' sx={{background:'green',margin:'10px'}}>Join Creativo</Button>
          <List>
             <ListItemButton>
        <ListItemText primary="Sign in" />
      </ListItemButton>
             <ListItemButton id='item-cat' onClick={handleClick}>
        <ListItemText primary="Browse Categories" sx={{color:'black'}} />
        {openedItemId === "item-cat" ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
      </ListItemButton>
      <Collapse in={openedItemId === "item-cat"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Graphics and Design" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Digital Marketing" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Writing & Translation" />
          </ListItemButton>
           <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Video & Animation" />
          </ListItemButton>
           <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Music & Audio" />
          </ListItemButton>
           <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Programming & Tech" />
          </ListItemButton>
           <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Data" />
          </ListItemButton>
           <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Business" />
          </ListItemButton>
           <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Lifestyle" />
          </ListItemButton>
        </List>
        </Collapse>
          </List>
          <List>
             <ListItemButton id='item-explore' onClick={handleClick}>
        <ListItemText primary="Explore" sx={{color:'black'}} />
        {openedItemId === "item-explore" ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
      </ListItemButton>
      <Collapse in={openedItemId === "item-explore"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Discover" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Guides" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Podcast" />
          </ListItemButton>
           <ListItemButton sx={{ pl: 4 ,color:'black'}} >
            <ListItemText primary="Blog" />
          </ListItemButton>
        </List>
        </Collapse>
          </List>
          <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{fontSize:'1.3rem',fontWeight:'bolder',borderBottom:'1px solid black'}}>
          General
          </ListSubheader>
          }
          >
             <ListItemButton sx={{ pl: 2 ,color:'black'}} >
            <ListItemText primary="Home" sx={{marginTop:'10px'}}/>
          </ListItemButton>
          </List>
           
        </Box>
      </Modal>
   </AppBar>
    </div>
  
  )
}

export default Header