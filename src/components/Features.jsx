import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import icon from '../assettes/icon1.jpg'
import icon2 from '../assettes/icon2.jpg'
import icon3 from '../assettes/icon3.jpg'

const Features = () => {
  return (
    <Box>
        <Grid container direction='column' justifyContent='center' alignItems='center' margin='auto' paddingY='40px'
            sx={{width:'90%',margin:'auto'}}
        >
            <Typography variant='h3'>More Features</Typography>
            <Typography variant='h6' paddingTop='20px' sx={{color:'#b3b3ba'}}>These are a few of the key features of AITool that distinguish
             it from other AI platforms</Typography>
             <Grid container direction='row' justifyContent='space-around' paddingTop='20px'>
                <Grid xs={3}>
                    <img src={icon} alt='icon'/>
                    <Typography variant='h5' paddingY='10px'>Create Command</Typography>
                    <Typography sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos aliquid nulla obcaecati. Magnam nostrum sed ducimus nam optio reprehenderit.</Typography>
                </Grid>

                <Grid xs={3}>
                    <img src={icon2} alt='icon'/>
                    <Typography variant='h5' paddingY='10px'>Improve Everyday</Typography>
                    <Typography sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos aliquid nulla obcaecati. Magnam nostrum sed ducimus nam optio reprehenderit.</Typography>
                </Grid>

                <Grid xs={3}>
                    <img src={icon3} alt='icon'/>
                    <Typography variant='h5' paddingY='10px'>Connect Everywhere</Typography>
                    <Typography sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos aliquid nulla obcaecati. Magnam nostrum sed ducimus nam optio reprehenderit.</Typography>
                </Grid>

             </Grid>

             <Grid container direction='row' justifyContent='space-around' paddingTop='20px'>
                <Grid xs={3}>
                    <img src={icon} alt='icon'/>
                    <Typography variant='h5' paddingY='10px'>Create Command</Typography>
                    <Typography sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos aliquid nulla obcaecati. Magnam nostrum sed ducimus nam optio reprehenderit.</Typography>
                </Grid>

                <Grid xs={3}>
                    <img src={icon2} alt='icon'/>
                    <Typography variant='h5' paddingY='10px'>Improve Everyday</Typography>
                    <Typography sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos aliquid nulla obcaecati. Magnam nostrum sed ducimus nam optio reprehenderit.</Typography>
                </Grid>

                <Grid xs={3}>
                    <img src={icon3} alt='icon'/>
                    <Typography variant='h5' paddingY='10px'>Connect Everywhere</Typography>
                    <Typography sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos aliquid nulla obcaecati. Magnam nostrum sed ducimus nam optio reprehenderit.</Typography>
                </Grid>

             </Grid>

        </Grid>
    </Box>
  )
}

export default Features