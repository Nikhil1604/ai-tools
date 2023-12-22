import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Review = () => {
  return (
    <Box>
        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{width:'90%', marginX:'auto',paddingY:'20px'}}>
            <Grid container direction='row' justifyContent='center'>
                <Typography variant='h4' paddingY={2}>Why Customer </Typography>
                <Typography variant='h4' paddingX={1} paddingY={2} sx={{color:'#fc552f'}}> Loves Us</Typography>
            </Grid>
            <Grid container direction='row' justifyContent='space-around' >
                <Grid xs={3} padding={5} sx={{border:'1px solid #b3b3ba',
                    borderRadius:'10px 10px 10px 10px',
                    margin:'10px',
                    width:'90%'
                    }}>
                    <Typography variant='h6'>Musideri</Typography>
                    <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus, tenetur debitis nobis molestiae omnis voluptates nihil, obcaecati cum ea alias voluptas voluptatum? Numquam in nostrum a, facilis tempora eum.</Typography>
                </Grid>
                <Grid xs={3} padding={5} sx={{border:'1px solid #b3b3ba',
                    borderRadius:'10px 10px 10px 10px',
                    margin:'10px',
                    width:'90%'
                    }}>
                    <Typography variant='h6'>Musideri</Typography>
                    <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus, tenetur debitis nobis molestiae omnis voluptates nihil, obcaecati cum ea alias voluptas voluptatum? Numquam in nostrum a, facilis tempora eum.</Typography>
                </Grid>
                <Grid xs={3} padding={5} sx={{border:'1px solid #b3b3ba',
                    borderRadius:'10px 10px 10px 10px',
                    margin:'10px',
                    width:'90%'
                    }}>
                    <Typography variant='h6'>Musideri</Typography>
                    <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus, tenetur debitis nobis molestiae omnis voluptates nihil, obcaecati cum ea alias voluptas voluptatum? Numquam in nostrum a, facilis tempora eum.</Typography>
                </Grid>
                <Grid xs={3} padding={5} sx={{border:'1px solid #b3b3ba',
                    borderRadius:'10px 10px 10px 10px',
                    margin:'10px',
                    width:'90%'
                    }}>
                    <Typography variant='h6'>Musideri</Typography>
                    <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus, tenetur debitis nobis molestiae omnis voluptates nihil, obcaecati cum ea alias voluptas voluptatum? Numquam in nostrum a, facilis tempora eum.</Typography>
                </Grid>
                <Grid xs={3} padding={5} sx={{border:'1px solid #b3b3ba',
                    borderRadius:'10px 10px 10px 10px',
                    margin:'10px',
                    width:'90%'
                    }}>
                    <Typography variant='h6'>Musideri</Typography>
                    <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus, tenetur debitis nobis molestiae omnis voluptates nihil, obcaecati cum ea alias voluptas voluptatum? Numquam in nostrum a, facilis tempora eum.</Typography>
                </Grid>
                <Grid xs={3} padding={5} sx={{border:'1px solid #b3b3ba',
                    borderRadius:'10px 10px 10px 10px',
                    margin:'10px',
                    width:'90%'
                    }}>
                    <Typography variant='h6'>Musideri</Typography>
                    <Typography variant='body' sx={{color:'#b3b3ba'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus, tenetur debitis nobis molestiae omnis voluptates nihil, obcaecati cum ea alias voluptas voluptatum? Numquam in nostrum a, facilis tempora eum.</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Review