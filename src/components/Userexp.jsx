import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import img from '../assettes/img.jpg'
import icon4 from '../assettes/icon4.jpg'
import icon5 from '../assettes/icon5.jpg'
import icon6 from '../assettes/icon6.jpg'

const Userexp = () => {
  return (
    <Box>
        <Grid container direction='row' justifyContent='center' alignItems='center' sx={{width:'90%',margin:'auto',paddingY:'40px'}}>
            <Grid xs={4}>
                <img src={img} alt="oth" />
            </Grid>
            <Grid xs={8} container direction='column' justifyContent='center' paddingX={5}>
                <Typography variant='h3'>Delightful User Experience</Typography>
                <Grid container direction='row'  paddingY={2}>
                    <Grid xs={2}>
                        <img src={icon4} alt='icon' />
                    </Grid>
                    <Grid xs={10} >
                        <Typography variant='h6'>Premium Access</Typography>
                        <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi harum perferendis illo dolore. Quisquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, provident!</Typography>
                    </Grid>
                </Grid>

                <Grid container direction='row' paddingY={2}>
                    <Grid xs={2}>
                        <img src={icon5} alt='icon' />
                    </Grid>
                    <Grid xs={10}>
                        <Typography variant='h6'>Professional</Typography>
                        <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi harum perferendis illo dolore. Quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, placeat.</Typography>
                    </Grid>
                </Grid>

                <Grid container direction='row' paddingY={2}>
                    <Grid xs={2}>
                        <img src={icon6} alt='icon' />
                    </Grid>
                    <Grid xs={10}>
                        <Typography variant='h6'>Grow Trends</Typography>
                        <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi harum perferendis illo dolore. Quisquam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, aliquid?</Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='space-between' sx={{width:'90%',margin:'auto'}}>
            <Grid xs={8} container direction='column' justifyContent='center' paddingX={5}>
                <Typography variant='h3'>Customization Theme</Typography>
                <Grid container direction='row' paddingY={2}>
                    <Grid xs={2}>
                        <img src={icon4} alt='icon' />
                    </Grid>
                    <Grid xs={10}>
                        <Typography variant='h6'>Premium Access</Typography>
                        <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi harum perferendis illo dolore. Quisquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, provident!</Typography>
                    </Grid>
                </Grid>

                <Grid container direction='row' paddingY={2}>
                    <Grid xs={2}>
                        <img src={icon5} alt='icon' />
                    </Grid>
                    <Grid xs={10}>
                        <Typography variant='h6'>Professional</Typography>
                        <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi harum perferendis illo dolore. Quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, placeat.</Typography>
                    </Grid>
                </Grid>

                <Grid container direction='row' paddingY={2}>
                    <Grid xs={2}>
                        <img src={icon6} alt='icon' />
                    </Grid>
                    <Grid xs={10}>
                        <Typography variant='h6'>Grow Trends</Typography>
                        <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi harum perferendis illo dolore. Quisquam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, aliquid?</Typography>
                    </Grid>
                </Grid>

            </Grid>
            <Grid xs={4} >
                <img src={img} alt="oth" />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Userexp