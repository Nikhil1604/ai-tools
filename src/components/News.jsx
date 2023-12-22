import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import image2 from '../assettes/Image2.jpg'
import image3 from '../assettes/img3.jpg'
import image4 from '../assettes/img4.jpg'

const News = () => {
  return (
    <Box>
        <Grid container direction='column' justifyContent='center' paddingY={10} alignItems='center' sx={{width:'90%',margin:'auto'}}>
            <Button variant='contained' sx={{
                borderRadius:'10px 40px 10px 40px',
                width:'10%',
                margin:'auto',
                backgroundColor:'#ffc7b7',
                color:'#f6643c'
            }}>News</Button>
            <Typography variant='h3' paddingY={2}>Discover the Latest News</Typography>
            <Typography variant='body' sx={{color:'#b3b3ba'}}>Stay informed and inspired with valuable insights for business growth.</Typography>
            <Grid container direction='row' justifyContent='space-between' >
                <Grid xs={3} padding={5}>
                    <img src={image2} alt='im'/>
                    <Typography sx={{color:'#f6643c'}}>New</Typography>
                    <Typography>Unleash The Power Of Advance Analytics</Typography>
                    <Typography sx={{color:'#b3b3ba'}}>Modern a Minimal and Clean Personal Portfolio Template for Framer.</Typography>
                    <Grid container direction='row' justifyContent='space-between' paddingY={2}>
                    <Typography sx={{color:'#b3b3ba'}}>2 Minutes Ago</Typography>
                    <Button variant='contained' sx={{
                        borderRadius:'10px 40px 10px 40px',
                        bgcolor:'#fc552f',
                        color:'#fff'
                    }}>Read Now</Button>
                    </Grid>
                </Grid>

                <Grid xs={3} padding={5}>
                    <img src={image3} alt='im'/>
                    <Typography sx={{color:'#f6643c'}}>New</Typography>
                    <Typography>Unleash The Power Of Advance Analytics</Typography>
                    <Typography sx={{color:'#b3b3ba'}}>Modern a Minimal and Clean Personal Portfolio Template for Framer.</Typography>
                    <Grid container direction='row' justifyContent='space-between' paddingY={2}>
                    <Typography sx={{color:'#b3b3ba'}}>2 Minutes Ago</Typography>
                    <Button variant='contained' sx={{
                        borderRadius:'10px 40px 10px 40px',
                        bgcolor:'#fc552f',
                        color:'#fff'
                    }}>Read Now</Button>
                    </Grid>
                </Grid>

                <Grid xs={3} padding={5}>
                    <img src={image4} alt='im'/>
                    <Typography sx={{color:'#f6643c'}}>New</Typography>
                    <Typography>Unleash The Power Of Advance Analytics</Typography>
                    <Typography sx={{color:'#b3b3ba'}}>Modern a Minimal and Clean Personal Portfolio Template for Framer.</Typography>
                    <Grid container direction='row' justifyContent='space-between' paddingY={2}>
                    <Typography sx={{color:'#b3b3ba'}}>2 Minutes Ago</Typography>
                    <Button variant='contained' sx={{
                        borderRadius:'10px 40px 10px 40px',
                        bgcolor:'#fc552f',
                        color:'#fff'
                    }}>Read Now</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default News