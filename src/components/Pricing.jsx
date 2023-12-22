import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Pricing = () => {
  return (
    <Box>
        <Grid container direction='column' justifyContent='center' alignItems='center' paddingY={10} sx={{width:'90%',margin:'auto'}}>
            <Typography variant='h3'>Pricing</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, fugit eligendi rerum mollitia ut culpa inventore accusamus alias hic quidem?</Typography>
            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ padding:'10px',border:'1px solid #f4f4f6',width:'20%',marginX:'auto',marginY:'5px',borderRadius:'20px 20px 20px 20px'}} >
                <Button variant='contained' 
                sx={{marginX:'10px',
                    borderRadius:'10px 50px 10px 50px',
                    bgcolor:'#fc552f',
                    color:'#fff'
                    }}>Monthly</Button>
                <Button variant='text' sx={{marginX:'10px'}}>Yearly</Button>
            </Grid>
            <Grid container direction='row' justifyContent='space-around' alignItems='center' sx={{ width:'90%'}} >
                <Grid xs={3} container direction='column' justifyContent='center' sx={{
                    bgcolor:'#fc552f',
                    color:'#fff',
                    paddingX:'20px',
                    paddingY:'20px',
                    borderRadius:'20px',
                }}>
                    <Typography variant='h6'>Reguler</Typography>
                    <Typography variant='h6'>$9/ Month</Typography>
                    <Typography variant='body2'>Access All Products</Typography>
                    <Typography variant='body2'>Access Future Products</Typography>
                    <Typography variant='body2'>Access to VIP Products</Typography>
                    <Typography variant='body2'>Access Basic Data</Typography>
                    <Button variant='contained' sx={{bgcolor:'#fff',color:'#000',
                        borderRadius:'10px 40px 10px 40px',
                        width:'80%',
                        marginY:'10px'
                    }}>Browse Products</Button>
                </Grid>

                <Grid xs={3} container direction='column' justifyContent='center' sx={{
                    bgcolor:'#fc552f',
                    color:'#fff',
                    paddingX:'20px',
                    paddingY:'20px',
                    borderRadius:'20px',
                }}>
                    <Typography variant='h6'>Basic</Typography>
                    <Typography variant='h6'>$99/ Month</Typography>
                    <Typography variant='body2'>Access All Products</Typography>
                    <Typography variant='body2'>Access Future Products</Typography>
                    <Typography variant='body2'>Access to VIP Products</Typography>
                    <Typography variant='body2'>Access Basic Data</Typography>
                    <Button variant='contained' sx={{bgcolor:'#fff',color:'#000',
                        borderRadius:'10px 40px 10px 40px',
                        width:'80%',
                        marginY:'10px'
                    }}>Browse Products</Button>
                </Grid>

                <Grid xs={3} container direction='column' justifyContent='center' sx={{
                    bgcolor:'#fc552f',
                    color:'#fff',
                    paddingX:'20px',
                    paddingY:'20px',
                    borderRadius:'20px',
                }}>
                    <Typography variant='h6'>Basic Premium</Typography>
                    <Typography variant='h6'>$999/ Month</Typography>
                    <Typography variant='body2'>Access All Products</Typography>
                    <Typography variant='body2'>Access Future Products</Typography>
                    <Typography variant='body2'>Access to VIP Products</Typography>
                    <Typography variant='body2'>Access Basic Data</Typography>
                    <Button variant='contained' sx={{bgcolor:'#fff',color:'#000',
                        borderRadius:'10px 40px 10px 40px', 
                        width:'80%',
                        marginY:'10px'                     
                    }}>Browse Products</Button>
                </Grid>
                
            </Grid>
        </Grid>
    </Box>
  )
}

export default Pricing