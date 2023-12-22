import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box>
        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{
            bgcolor:'#000',
            color:'#fff',
            width:'90%',
            marginX:'auto',
            paddingY:'20px'   
        }}>
            <Typography>AI TOOLS</Typography>
            <Grid container direction='row' justifyContent='center'  sx={{
                width:'70%',
                marginX:'auto',
            }}>
                <Button variant='text' size='large' sx={{color:'#fff'}}>Home</Button>
                <Button variant='text' size='large' sx={{color:'#fff'}}>Pricing</Button>
                <Button variant='text' size='large' sx={{color:'#fff'}}>Contact</Button>
                <Button variant='text' size='large' sx={{color:'#fff'}}>About</Button>
            </Grid>

            <Grid container direction='row' justifyContent='space-around'  sx={{
                width:'50%',
                marginX:'auto',
            }}>
                <Typography>Pune,India</Typography>
                <Typography>mail@gmail.com</Typography>
                <Typography>Instagram</Typography>
            </Grid>

            <Grid></Grid>

        </Grid>
    </Box>
  )
}

export default Footer