import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
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

            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{
                width:'80%',
                marginX:'auto',
                padding:'40px',
                bgcolor:'#222333',
                borderRadius:'20px 20px 20px 20px',
                marginY:'20px'
            }}>
                <Typography variant='h4' sx={{
                    width:'50%'
                }}>Join to get free updates every week.</Typography>

                <TextField placeholder='Search' sx={{
                    bgcolor:'#ffffff',
                    borderRadius:'10px 40px 10px 40px',
                }} 
                InputProps={{
                    endAdornment:(
                        <InputAdornment position="start">
                            <Button variant='contained' sx={{
                                borderRadius:'10px 40px 10px 40px',
                                bgcolor:'#ff552f',
                                paddingX:'40px'
                            }}>Subscibe</Button>
                        </InputAdornment>
                    )
                }}
                />

            </Grid>

            <Grid container direction='row' justifyContent='space-around' sx={{
                width:'90%',
                marginX:'auto',
                paddingTop:'20px'
            }}>
                <Typography>@2023 AI TOOLS</Typography>
                <Typography>All Rights Reserved</Typography>
                <Typography>Privacy policy & Terms And Condition</Typography>
            </Grid>

        </Grid>
    </Box>
  )
}

export default Footer