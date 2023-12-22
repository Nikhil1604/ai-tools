import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <Box>
        
            <Grid container direction='row' justifyContent='space-between' alignItems='center' style={{color:'red'}} >
                <Grid container justifyContent='center' md={2} paddingTop={5} 
                sx={{
                    display:{xs:'none',md:'flex'},
                }}>
                    <Typography variant='h5' sx={{color:'#fc552f'}}
                        style={{ borderRadius:'15px 50px'}}
                    >AI Tools</Typography>
                </Grid>
                <Grid container  justifyContent='space-around' sm={12} md={8} paddingTop={5} 
                    sx={{ display:{xs:'flex',md:'flex'},
                        flexDirection:{xs:'column',md:'row'},
                        justifyContent:{xs:'center',md:'space-around'},
                        alignItems:{xs:'center',md:'center'}
                    }}>
                    <Button variant='text' style={{color:'#000'}}>Home</Button>
                    <Button variant='text' style={{color:'#000'}}>Pricing</Button>
                    <Button variant='text' style={{color:'#000'}}>About</Button>
                    <Button variant='text' style={{color:'#000'}}>Contact</Button>
                </Grid>
                <Grid container justifyContent='center' md={2} paddingTop={5} sx={{
                    display:{xs:'none',md:'flex'},
                }}>
                    <Button variant='contained' sx={{color:'#fff',bgcolor:'#fc552f',fontSize:'16px'}}
                        style={{borderRadius:'10px 25px 10px 25px'}}
                    >Get started</Button>
                </Grid>
            </Grid>
        
    </Box>
  )
}

export default Navbar