import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button/'

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
  const user = props.user
  console.log('APPNAV', user)

  const authLinks = () => {
    return (
      <>
      <Button
        label="Create a Journal Entry"
        color="inherit"
        href='/posts/new'>
        Create a Journal Entry
      </Button>
      <Button
        label="LOGOUT"
        color="inherit"
        href='/logout'>
        LOGOUT
      </Button>
    </>
    )
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.grow}
          >
                Hearten
          </Typography>
          <Button
            label="Home"
            color="inherit"
            href='/'
          >
                HOME
          </Button>
          {/* <Button
            label="Create a Journal Entry"
            color="inherit"
            href='/posts/new'
          >
                Create a Journal Entry
          </Button> */}
          { user ? authLinks(): null}
        </Toolbar>
      </AppBar>
    </div>
  )
}

AppNav.propTypes = {
  classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(AppNav)
