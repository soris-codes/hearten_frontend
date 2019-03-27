import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import PostList from '../components/PostList/PostList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const HomePage = props => {
  const { classes } = props

    return (
      <React.Fragment>
      <main>
        {/* Login Splash Screen */}
      <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Hearten
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Creative journaling to inspire confidence in your writing 
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Button 
              variant="contained" 
              color="primary"
              href="/login"
              >
                Log In
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>

    {/* Featured Posts */}
      <PostList />
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
    );
  }


export default withStyles(styles)(HomePage);