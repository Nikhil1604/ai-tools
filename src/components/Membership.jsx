import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Membership = () => {
  return (
    <Box>
        <Grid container direction='column' justifyContent='center' alignItems='center'
            sx={{ 
                bgcolor:'#fc552f',
                width:'90%',
                marginX:'auto',
                marginY:'40px',
                borderRadius:'10px 10px 10px 10px',
                color:'#fff',
                paddingY:'40px'

        }}
        >
            <Typography variant='h3'>Join Membership Today and Gain Access to All Products!</Typography>
            <Typography variant='body'>Join Our Membership Today at a Discounted Price and get access to all Our Amazing Products and even gain access to Future Products For Free!</Typography>
            <Button variant='contained' sx={{
                color:'#ff552f',
                bgcolor:'#fff',
                marginY:'20px',
                paddingX:'60px',
                paddingY:'15px',
                borderRadius:'10px 40px 10px 40px'
            }}>Join Us</Button>
        </Grid>
    </Box>
  )
}

export default Membership