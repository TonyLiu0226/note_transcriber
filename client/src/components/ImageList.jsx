import React from "react";
import {Container, Grid, Paper, Card, CardMedia, CssBaseline, Box} from '@mui/material'
import { styled } from '@mui/material/styles';
import testImage from '../images/thc212nt.png'

const ImageList = () => {
    return (
        <>
            <CssBaseline />
            <Box sx={{
                backgroundColor: 'blue'
            }}>
            <Container maxWidth='xl' sx={{ backgroundColor:'red'}}>
                <Grid container spacing={2} justify="left">
                    <Grid item xs={1}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={testImage}
                                alt="test">
                            </CardMedia>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            </Box>
            
        </>
    )
}

export default ImageList;