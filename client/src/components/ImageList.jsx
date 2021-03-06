import React from "react";
import {Grid, Box, Typography} from '@mui/material'
import FileInput from "./FileInput";

const ImageList = (props) => {
    return (
        <Box sx={{
            height: 200,
            width: '100%'
        }}>
            <Typography variant="h5" sx={{ margin:'20px 25px'}}>Image Upload</Typography>
            <Grid item sx={{margin:'20px 25px'}}>
                <FileInput setConvertedText={props.setConvertedText}></FileInput>
            </Grid>
            {/* map the images scanned/uploaded */}
        </Box>
    )
}

export default ImageList;