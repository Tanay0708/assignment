import { Box, Container, IconButton, InputBase, ListItem, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { arrow, reslinkLogo } from '../images'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
   
    <Box sx={{display: 'flex',height:{lg: '300px', xs:'auto'},backgroundColor:'#22242C', flexDirection : {lg: 'row',md:'row' , xs: "column"}, justifyContent:"center"}}>
        <Box sx={{width:{lg: '25%', xs: '100%'},mt:5,textAlign: { lg: 'left' , xs: 'center'}}}>
             <img src={reslinkLogo} width='50%' alt="" />
             <Typography color='#D9DBE1' variant='body1' mt={3}>
                copyright 2023 reslink
             </Typography>
             <Typography color='#D9DBE1' variant='body2' mt={1} mb={3}>
                All rights reserved
             </Typography>
             <Box sx={{color:"white",display:'flex',gap:5,width:{lg:"100%",xs:'40%',margin:'auto'}}} >
             <InstagramIcon />
             <TwitterIcon />
             <LinkedInIcon />
             </Box>
        </Box>
        <Box sx={{width:{lg: '40%', xs: '100%'},mt:5,textAlign: { lg: 'left' , xs: 'center'},display: 'flex', flexDirection: {lg: 'row', md: 'row', xs: 'column'}, justifyContent: 'space-between'}}>
             <Stack sx={{textAlign:'center',width:{lg: '30%',md: '30%', xs: '100%'}}}>
             <Typography color='#FFFF' variant='h6' mt={3}>
               Company
             </Typography>
             <Typography color='#D9DBE1' variant='body1' mt={3}>
                About us
             </Typography>
             <Typography color='#D9DBE1' variant='body1' mt={2}>
                Features
             </Typography>
             <Typography color='#D9DBE1' variant='body1' mt={1}>
                Contact us
             </Typography>
             </Stack>
             
             <Stack sx={{textAlign:'center',width:{lg: '30%',md: '30%', xs: '100%'}}}>
             <Typography color='#FFFF' variant='h6' mt={3}>
                Support
             </Typography>
             <Typography color='#D9DBE1' variant='body1' mt={2}>
               Terms of Sevices
             </Typography>
             <Typography color='#D9DBE1' variant='body1' mt={1}>
                Pivacy Policy
             </Typography>
             </Stack>
             <Stack sx={{textAlign:'center',width:{lg: '30%',md: '30%', xs: '100%'}}}>
             <Typography color='#FFFF' variant='h6' mt={3}>
                Stay up to date
             </Typography>
            
             <Box sx={{height:{lg:'45px',xs:'auto'},textAlign:'center',width:{lg:'100%',xs:'50%',margin:'auto'}}}>
                    <InputBase  sx={{backgroundColor:'#4E5056',width:'100%',margin:'auto',borderRadius:'5px',mt:2,fontSize:'12px',color:'white',height:'40px'}} placeholder='Your Email Address' />
                   
             </Box>
              
             </Stack>
        </Box>
    </Box>
    
  )
}

export default Footer