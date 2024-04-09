import {  Box, Button, Chip, Hidden, List, ListItem, Switch, Typography } from '@mui/material'
import React, { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Hero = () => {

    const [bill,setBill] = useState(false);

    const handleClick = () => {
        setBill(prev => !prev);
        console.log(bill)
    }

  return (
    <>
    <Box sx={{width: {lg: "40%" , xs: '90%'},margin:'auto',textAlign:'center',mt:'50px' }} >
        <Typography variant='body1' color='#3FA268' fontFamily={'inherit'}>
            PRICING
        </Typography>
        <Typography sx={{fontSize: {lg: '3rem', xs: '2rem'}}} color='#ffff' mt={2} fontFamily={'inherit'} >
            Our pricing plans
        </Typography>
        <Typography variant='body1' color='grey' mt={2} fontFamily={'inherit'}>
        Choose the pricing plan that best meets your needs and budget, and start accelerating your R&D today.
        </Typography>

        <Box sx={{width:{lg: '50%', xs: '80%'},margin:'auto',mt:6,color:'#fff',display:'flex',justifyContent:'center'}} >
    
    <Typography fontFamily={'inherit'} fontSize={'1.2rem'} > 
    monthly  
    </Typography>
    <Switch  defaultChecked  onClick={() => handleClick()}  />
    <Typography fontFamily={'inherit'} fontSize={'1.2rem'} fontWeight={300}> 
    Annually 
    </Typography>
        </Box>
    </Box>

    {/* 
    
    Price cards
    
    
    */}
    
    <Box sx={{border:'1px solid grey',borderRadius:'25px' , width:'70%',height:{lg:'480px', xs: 'auto'}, margin:'auto',backgroundColor:'#2C2E36',mt:4,display:'flex',flexDirection:{lg:'row',md:'row',xs:'column'},justifyContent:'space-evenly',p:2,position:'relative'}}>
        <Box sx= {{height:'100%',width: { lg: '30%', md: '30%', xs: '100%'},p:1}}>
            <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography fontSize={'3rem'} fontFamily={'Poppins'} fontWeight={700} color='#FEFEFE' ml={2}>
               {
               bill == true ? '$499' : '$4999'
               }
                </Typography>
                 <Typography color='#FEFEFE' >
                 {
                 bill === true ? '/month' : '/year'
                 }
                </Typography>

            </Box>
            <Typography fontSize={'1.75rem'} color='#FEFEFE' ml={2}>
                Startup
            </Typography>
            <List >
                <ListItem sx={{gap:1}}>
                    <Typography color='#3FA268'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                       All Startup features
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#3FA268'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                       Upto 10 successfull R&D collaborations
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#3FA268'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                       1-5% success Fee
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#3FA268'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                        Upto 20 research hirings
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#3FA268'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                        Custom reporting and analytics
                    </Typography>
                </ListItem>
            </List>
            <Box sx={{width:'80%',margin:'auto'}}>
            <Button sx={{width:'100%',height:'45px',margin:'auto',backgroundColor:'#3FA268',color:'#FEFEFE',borderRadius:'20px'}} >
    choose plan
            </Button>
            </Box>
        </Box>
        <Box sx= {{height:'100%',width: { lg: '30%', md: '30%', xs: '100%'},p:1, mt:{lg:0 ,xs: 5}}}>
            <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography fontSize={'3rem'} fontFamily={'Poppins'} fontWeight={700} color='#FEFEFE' ml={2}>
                {
               bill == true ? '$999' : '$8999'
               }
                </Typography>
                 <Typography color='#FEFEFE' >
                 {
               bill == true ? '/month' : '/year'
               }
                </Typography>

            </Box>
            <Typography fontSize={'1.75rem'} color='#FEFEFE' ml={2}>
                Enterprise
            </Typography>
            <List >
                <ListItem sx={{gap:1}}>
                    <Typography color='#3FA268'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                       All Startup features
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#3FA268'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                       Upto 10 successfull R&D collaborations
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#3FA268'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                       1-5% success Fee
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#3FA268'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                        Upto 20 research hirings
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#3FA268'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                        Custom reporting and analytics
                    </Typography>
                </ListItem>
            </List>
            <Box sx={{width:'80%',margin:'auto'}}>
            <Button sx={{width:'100%',height:'45px',margin:'auto',backgroundColor:'#3FA268',color:'#FEFEFE',borderRadius:'20px'}} >
    choose plan
            </Button>
            </Box>
        </Box>
        <Box sx= {{height:'500px',width: { lg: '28%', md: '30%', xs: '100%'},mt:{lg:0 ,xs: 5},p:{lg:1, xs :0},backgroundColor:'#3FA268',position:{lg:'absolute'},top:-30,right:35,borderRadius:'25px'}}>
            <Box sx={{display:'flex',alignItems:'center',position:'relative',ml:2}}>
            <Chip sx={{position:'absolute',top:1,right:5,color:'white',fontSize:'10px',width:'120px'}} label="MOST POPULAR" />
                <Typography fontSize={'3rem'} fontFamily={'Poppins'} fontWeight={700} color='#FEFEFE' mt={5}>
                {
               bill == true ? '$1999' : '$16999'
               }
                </Typography>
                 <Typography color='#FEFEFE' >
                 {
               bill == true ? '/month' : '/year'
               }
                </Typography>

            </Box>
            <Typography fontSize={'1.75rem'} color='#FEFEFE' ml={2}>
               Corporation
            </Typography>
            <List  >
                <ListItem sx={{gap:1}}>
                    <Typography color='#FEFEFE'>
                    <CheckCircleOutlineIcon color='#FEFEFE' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                        All Enterprise features
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#FEFEFE'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                       0-3% Success Fee
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#FEFEFE'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                        Unlimited successfull R&D collaboration
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#FEFEFE'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                        Unlimited Research hirings
                    </Typography>
                </ListItem>
                <ListItem sx={{gap:1}}>
                    <Typography color='#FEFEFE'>
                    <CheckCircleOutlineIcon color='#3FA268' />
                    </Typography>
                    <Typography color='#FEFEFE'>
                        Access to groundbreaking patents
                    </Typography>
                </ListItem>
            </List>
            <Box sx={{width:'80%',margin:'auto'}}>
            <Button sx={{height:'45px',width:'100%',margin:'auto',backgroundColor:'white',color:'#3FA268',borderRadius:'20px'}} >
    choose plan
            </Button>
            </Box>
        </Box>
        <Box sx= {{height:'100%',display:{lg: 'block',xs: 'none'},width: { lg: '30%', md: '30%', xs: '100%'},p:1}} >
        </Box>
    </Box>





    <Box sx={{border:'1px solid grey',width:{lg:'70%', xs: '90%'},p:2,borderRadius:'25px',alignItems:'center',backgroundColor:'#2C2E36',margin:'auto',mt:5,height:{lg:'200px', xs: 'auto'},display:'flex',flexDirection:{lg: 'row',xs:'column'},justifyContent:'space-around'}}>
            <Box sx={{width:{lg: '50%', xs: '100%'}}}>
                <Typography sx={{fontSize:'2.1rem',color:'#FEFEFE'}}>
                    Custom Plan
                </Typography>
                <Typography sx={{fontSize:'1.25rem',color:'#BBBBBB'}}>
                Contact us today to create a custom plan that meets your specific needs. 
                </Typography>
            </Box>
            <Box sx={{width:{lg: '30%', xs: '100%'}}}>
            <Button sx={{height:'45px',width:'100%',margin:'auto',backgroundColor:'#3FA268',color:'#FEFEFE',borderRadius:'20px',mt:5}} >
    CONTACT US
            </Button>
            </Box>
    </Box>
    </>


  )
}

export default Hero