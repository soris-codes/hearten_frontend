import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const AppNav = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar  align="center">
                <Typography 
                variant="title" 
                color="inherit"
                  >
                Hearten
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default AppNav;