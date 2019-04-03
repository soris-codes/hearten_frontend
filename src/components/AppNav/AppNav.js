import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button/'
import HomeOutlined from '@material-ui/icons/HomeOutlined'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
}

const AppNav = (props) => {
  const { classes } = props
  const user = localStorage.getItem('userName')

  const renderAuthLinks = () => {
    if(user !== null) {
      return (
      <>
      <Button
        label="Home"
        color="inherit"
        href='/posts'>
        MY HOME
      </Button>
      <Button
        label="Create a Journal Entry"
        color="inherit"
        href='/posts/new'>
        ADD AN ENTRY
      </Button>
      <Button
        label="Logout"
        color="inherit"
        onClick={props.handleLogout}
        href='/logout'>
        LOGOUT
      </Button>
    </>
      )
    }
   
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button 
            href='/' 
            color="inherit" 
            label="Home">
            <HomeOutlined />
          </Button>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.grow}>
                Hearten
          </Typography>
          { renderAuthLinks() }
        </Toolbar>
      </AppBar>
    </div>
  )
}

AppNav.propTypes = {
  classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(AppNav)
