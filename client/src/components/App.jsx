import React, { useState } from "react";
import axios from 'axios'; 
import ImageList from "./ImageList";
import Header from "./Header";
import { CssBaseline, Grid, Button, Typography } from '@mui/material'

export default function App(props) {
  const [convertedText, setConvertedText] = useState('upload an image to convert...');

  function flipPage(e) {
    e.preventDefault();
    axios
    .get('http://127.0.0.1:5000/turnpage')
    .then(resp => {
        console.log(resp.data);
    });
  }
  return (
  <>
  <CssBaseline />
  <Grid container sx={{
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '0'
  }}>
    <Grid item>
      <Header />
    </Grid>
    <Grid item container sx={{
      flexGrow: '1',
      overflow: 'auto',
      minHeight: '100%',
      backgroundColor: '#f0f8ff'
    }}>
      <ImageList setConvertedText={setConvertedText}/>
    </Grid>
    <Grid item container>
      <Grid item sm={0} xl={3} md={1}/>
      <Grid item container sm={12} md={10} xl={6}>
        <Grid item container>
          <Grid item container sm={12} md={6} sx={{
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '0',
            justifyContent: 'center'
          }}>
            <Grid item sx={{margin:'20px 40px'}}>
             <Button variant="contained" sx={{ width: '100%'}} onClick={flipPage}>Flip Page</Button>
            </Grid>
            <Grid item sx={{margin:'0px 40px'}}>
             <Button variant="contained" sx={{ width: '100%'}}>Take Photo</Button>
            </Grid>
            <Grid item sx={{margin:'20px 40px'}}>
             <Button variant="outlined" sx={{ width: '100%'}}>Auto</Button>
            </Grid>
            <Grid item sx={{margin:'0px 40px'}}>
             <Button variant="contained" sx={{ width: '100%'}}>Convert</Button>
            </Grid>
            
          </Grid>
          <Grid item sm={12} md={6} sx={{padding: "20px 40px"}}>
            <Typography variant="h6" >Text Preview</Typography>
            <Typography variant="p">{convertedText}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={0} xl={3} md={1}/>
    </Grid>
  </Grid>
  </>

)}
