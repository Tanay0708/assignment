import React from 'react'
import { Box, Button,  Typography }from '@mui/material';
import { reslinkLogo } from '../images';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <Box width='full' height='97px' sx={{ p: '20px 47px 20px 47px',display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{width: {lg: '30%' ,xs: '50%'} , height:{ lg: '100%',xs:'50%'}}}>
           <img src={reslinkLogo} height={'100%'}  alt="" />
        </Box>
        <Box sx={{display:{lg:'flex',xs:'none'},justifyContent:'space-evenly',width:'50%',alignItems:'center'}}>
           <Typography color='white'>
            Home
           </Typography>
           <Typography color='white'>
            Features
           </Typography>
           <Typography color='white'>
            About
           </Typography>
           <Typography color='white'>
            Contact
           </Typography>
           <Typography color='white'>
            Pricing
           </Typography>
        </Box>
        <Box sx={{display:{lg:'flex',md:"flex",xs:"none"},justifyContent:'space-evenly',width:'30%',alignItems:'center' }}>
            <Button sx={{color:'white'}}>
              Login
            </Button>
            <Button sx={{backgroundColor:'#3FA268',color:'white' , height:'40%',width:'200px'}}>
              Get Started
            </Button>
        </Box>
        <Box sx={{color:'white',display:{lg:'none',md:'none',xs:'block'},alignItems:'center'}}>
          <MenuIcon />
        </Box>
    </Box>

    // <AppBar position='static' sx={{backgroundColor:"#1F2129", boxShadow:'none'}}>
    //     <Container maxWidth='xl'>
    //         <img src={reslinkLogo} alt="" />
    //     </Container>
    // </AppBar>
  )
}

export default Nav