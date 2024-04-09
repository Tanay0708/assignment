import { Box, Typography } from '@mui/material'
import React from 'react'
import { part1, part2, part3 } from '../images'

const Partners = () => {
  return (
    <>
   <Box sx={{width:'80%', margin:'auto',mt:10,textAlign:'center'}}>
        <Typography color='white'>
            OUR PARTNERS
        </Typography>
        <Box sx={{height:'auto',display:'flex',width:'100%'}}>
                <Box sx={{width:'20%'}}>
                 <img src={part1} width='100%' alt="" />   
                </Box>
                <Box sx={{width:'20%'}}>
                 <img src={part2} width='100%' alt="" />   
                </Box>
               
                <Box sx={{width:'20%'}}>
                 <img src={part3} width='100%' alt="" />   
                </Box>  
                <Box sx={{width:'20%'}}>
                 <img src={part1} width='100%' alt="" />   
                </Box>
                <Box sx={{width:'20%'}}>
                 <img src={part2} width='100%' alt="" />   
                </Box>
        </Box>
   </Box>


   <Box sx={{width:{lg:'80%', xs: '90%'},p:2,borderRadius:'25px',alignItems:'center',margin:'auto',mt:5,height:{lg:'200px', xs: 'auto'},display:'flex',flexDirection:{lg: 'row',xs:'column'},justifyContent:'space-between'}}>
            <Box sx={{width:{lg: '30%', xs: '100%'}}}>
                <Typography sx={{fontSize:'0.9rem',color:'#3FA268'}}>
                    TESTIMONIALS
                </Typography>
                <Typography sx={{fontSize:'2.25rem',color:'#FEFEFE'}}>
                Check what our clients are saying
                </Typography>
            </Box>
            <Box sx={{width:{lg: '60%', xs: '100%'}}}>
            <Typography sx={{fontSize:'1rem',color:'#FEFEFE'}}>
            Since using this platform, our research has completely transformed. we would highly recommend this platform to any business looking to simplify their research process and drive more innovation.
                </Typography>
                <Typography color='#FEFEFE' mt={2}>
                    Adrian Cal
                </Typography>
                <Typography color='#FEFEFE'>
                    CEO GetNextDesign
                </Typography>
            </Box>
    </Box>

   </>
  )
}

export default Partners