import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ToolbarGroup from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
// import HomeIcon from '@material-ui/icons/Home'
// import IconButton from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button/'
import { Link } from 'react-router-dom'; 

const AppNav = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography 
                variant="h6" 
                color="inherit"
                  >
                Hearten
                </Typography>
                <Button 
                label="Create a Journal Entry"
                color="inherit" 
                href='/new'  
                >
                Create a Journal Entry
                </Button>
            </Toolbar>  
        </AppBar>
        </div>
    )
}
export default AppNav;