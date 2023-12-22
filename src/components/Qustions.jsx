import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Qustions = () => {
  return (
    <Box>
        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{
            width:'90%',
            margin:'auto',
            borderRadius:'10px 10px 10px 10px',
            border:'2px solid red',
            paddingY:'20px'
            }}>
            <Grid container direction='column' justifyContent='center' alignItems='center' paddingY={10} sx={{
                borderRadius:'10px 10px 10px 10px',
                border:'2px solid #b3b3ba',
                width:'90%',
                marginX:'auto',
                marginY:'40px'
                }}>
                <Typography variant='h3' paddingY={2}>
                FAQs Frequently Asked Questions!
                </Typography>
                <Typography variant='h6' sx={{color:'#b3b3ba',width:'50%',textAlign:'center'}}>
                Need  Any Help? Send us a message using the form below and we'll get back to you promptly!
                </Typography>
            </Grid>
            
            
            <Grid container direction='row' justifyContent='center' sx={{
                borderRadius:'10px 10px 10px 10px',
                border:'2px solid #b3b3ba',
                width:'90%',
                marginX:'auto',  
                paddingY:'20px'
            }}>
                <Grid xs={6}>
                    <Typography sx={{width:'90%',
                    marginX:'auto',
                    paddingY:'10px',
                    textAlign:'center',
                    border:'1px solid black',
                    borderRadius:'10px 10px 10px 10px'
                    }}>How easy is it to setup AITool?</Typography>
                </Grid>
                <Grid xs={6} >
                    <Typography sx={{width:'90%',
                    marginX:'auto',
                    paddingY:'10px',
                    textAlign:'center',
                    border:'1px solid black',
                    borderRadius:'10px 10px 10px 10px'
                    }}>
                    What your refund policy?
                    </Typography>
                </Grid>
                <Grid xs={6} >
                    <Typography sx={{width:'90%',
                    marginX:'auto',
                    paddingY:'10px',
                    textAlign:'center',
                    border:'1px solid black',
                    borderRadius:'10px 10px 10px 10px'
                    }}>
                    Can I integrate AITool with other platforms?
                    </Typography>
                </Grid>
                <Grid xs={6} >
                    <Typography sx={{width:'90%',
                    marginX:'auto',
                    paddingY:'10px',
                    textAlign:'center',
                    border:'1px solid black',
                    borderRadius:'10px 10px 10px 10px'
                    }}>
                    Do you have corporate plans?
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography sx={{width:'90%',
                    marginX:'auto',
                    paddingY:'10px',
                    textAlign:'center',
                    border:'1px solid black',
                    borderRadius:'10px 10px 10px 10px'
                    }}>
                        How often do you add new content?
                    </Typography>
                </Grid>
                <Grid xs={6} >
                    <Grid sx={{
                    width:'90%',
                    marginX:'auto',
                    border:'1px solid black',
                    borderRadius:'10px 10px 10px 10px',
                    justifyContent:'center',
                    paddingX:'20px'
                }} >
                    <Typography sx={{textAlign:'center'}}>
                    Can I cancel my subscription at any time?
                    </Typography>
                    <Typography sx={{textAlign:'center'}}>
                    We accept various payment methods, including major credit cards (Visa, Mastercard, American Express), PayPal, and direct bank transfers. You can choose the most convenient option during the checkout process.
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container direction='row' sx={{width:'90%',
                marginX:'auto',
                paddingY:'40px',
                bgcolor:'#fc552f',
                borderRadius:'10px 10px 10px 10px',
                border:'1px solid inherit',
                marginTop:'40px'
                }}>
                <Grid xs={8} container direction='column' justifyContent='' alignItems='center'>
                    <Typography>Still Need Help ?</Typography>
                    <Typography>Can't find the answer here?  Message us for help!</Typography>
                </Grid>
                <Grid xs={4}>
                    <Button variant='contained' sx={{
                        borderRadius:'10px 40px 10px 40px'
                    }}> Shoot Us A Messege</Button>
                </Grid>
            </Grid>


        
        </Grid>
    </Box>
  )
}

export default Qustions