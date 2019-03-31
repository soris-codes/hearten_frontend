import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import UsersAPI from '../../api/UsersAPI'

import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', 
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
})


class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: false
    }
  }
  
  updateState() {
    console.log('LOGIN: isLoggedIn')
    this.setState({
      isLoggedIn: true
    })
  }

  // componentDidMount() {
  //   const user = localStorage.getItem('userName')
  //   if(user !== null) {
  //     this.updateState()
  //   }
  // }

  handleSubmit(event) {
    event.preventDefault()
    console.log('LOGIN SUBMITTED BY >>', event.target.elements[0].value)

    const credObject = {
      username: event.target.elements[0].value,
      password: event.target.elements[1].value
    }

    UsersAPI.login(credObject)
      .then((response) => response.json())
      .then((user) => this.props.handleLogin(user))
      .catch(err => {
        console.error(err)
        alert('Error logging in please try again')
        this.props.history.push('/')
      })

    //Set isLoggedIn to true to be redirected to the user posts
    this.updateState()  
  }


  render() {
    const loggedIn  = this.state.isLoggedIn
    const { classes } = this.props

    if(loggedIn === true) {
      return(
        <Redirect to={{pathname: '/posts',
          state: { from: this.props.location}}} />
      )
    }

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form 
            className={classes.form}
            onSubmit={this.handleSubmit.bind(this)}
          >
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" name="username" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
          </form>
        </Paper>
      </main>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)