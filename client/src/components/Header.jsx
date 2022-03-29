import React from "react";
import {AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => {
    return(
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Note Transcriber 1.0
            </Typography>
            </Toolbar>
      </AppBar>
    )
}

export default Header;