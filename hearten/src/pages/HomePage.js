import React from 'react'
import Typography from '@material-ui/core/Typography'
import Hero from '../components/Hero/Hero'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
})

const HomePage = props => {

  const { classes } = props

  return (
    <React.Fragment>
      <main>
        <Hero />
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Hearten by Soris Cox - April 2019
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          <a href = "https://github.com/soris-codes/hearten_frontend">Source Code</a>
        </Typography>
      </footer>
    </React.Fragment>
  )
}

export default withStyles(styles)(HomePage)