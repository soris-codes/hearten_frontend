import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import logo from '../../static/mediumHeartenLogo.png'

const styles = theme => ({

  heroUnit: {
    // backgroundColor: theme.palette.background.paper,
    backgroundImage: 'url(\'https://images.unsplash.com/photo-1517127204681-d4b7b829b05c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9\')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100%'
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    color: 'white',
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },

})

const Hero = props => {
  const { classes } = props

  return (
    <React.Fragment>
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          
          <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
            Hearten
          </Typography>
          <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
            <img src={logo} />
          </Typography>
          <Typography variant="h5" align="center" color="inherit" paragraph>
            Creative journaling to inspire confidence in your writing 
          </Typography>
          <Typography variant="h5" align="center" color="inherit" paragraph>
            Use stunning photography as your visual prompt and hearten your creativity as you compose a journal entry, story, poem, or song
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Button 
                  variant="contained" 
                  color="primary"
                  href="/login">
                  Log In
                </Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="contained" 
                  color="secondary"
                  href="/register">
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default withStyles(styles)(Hero)