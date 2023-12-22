import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import hero from '../assettes/Image.jpg'

const Hero = () => {
  return (
    <Box marginTop='20px'>
        <Grid container direction='column' justifyContent='center' alignItems='center'
            paddingTop='50px'
            style={{backgroundColor:'black',
            color:'white',
            width:'90%',
            margin:'auto',
            borderRadius:'20px 20px 20px 20px'    
        }}>
            <Typography variant='h3' style={{width:'40%',textAlign:'center'}}>Simplify your work with AI tool</Typography>
            <Typography paddingTop='10px'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</Typography>
            
            <Grid container direction='row' justifyContent='space-around' alignItems='center' paddingTop='30px' 
                marginBottom='20px' style={{ width:'40%'}}>
                    <Button variant='contained' sx={{color:'#fff',bgcolor:'#fc552f',fontSize:'16px'}}
                        style={{borderRadius:'10px 25px 10px 25px'}}
                    >Get started</Button>
                    <Button variant='contained' sx={{bgcolor:'#000',color:'#fc552f',fontSize:'16px'}}
                        style={{borderRadius:'10px 25px 10px 25px',
                                border:'1px solid #fc552f'
                    }}
                    >Explore Features</Button>
            </Grid>
            <img src={hero} alt='kkk' marginTop='20px'
                style={{ borderRadius:'30px 205px 30px 205px'}}
            />
        </Grid>
    </Box>
  )
}

export default Hero