import React, { Component } from 'react'
import UsersAPI from '../../api/UsersAPI'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

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

export class Register extends Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //     username: '',
  //     email: '',
  //     password: '',
  //     password2: ''
  //   }
  // }

  handleSubmit(event) {
    event.preventDefault()

    const credObject = {
      username: event.target.elements[0].value,
      email: event.target.elements[1].value,
      password: event.target.elements[2].value,
      password2: event.target.elements[3].value,
    }
    console.log('CREDENTIALS >>', credObject)
    
    UsersAPI.register(credObject)
      .then((response) => response.json())
      .then((user) => this.props.handleLogin(user))
      .catch(err => {
        console.error(err)
        alert('Error logging in please try again')
      })

    //Provide the user a confirmation??
      
    //Once a user has registered, a token is returned
    //so we can redirect to their posts
    this.props.history.push('/posts')
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
     
  render() {

    const { classes } = this.props
  
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
                New Account:
          </Typography>
          <form 
            className={classes.form}
            onSubmit={this.handleSubmit.bind(this)}>
            <FormControl margin="normal" required fullWidth
              onChange={this.handleChange.bind(this)}>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" name="username" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth
              onChange={this.handleChange.bind(this)}>
              <InputLabel htmlFor="email">E-Mail</InputLabel>
              <Input id="email" name="email"/>
            </FormControl>
            <FormControl margin="normal" required fullWidth
              onChange={this.handleChange.bind(this)}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" />
            </FormControl>
            <FormControl margin="normal" required fullWidth
              onChange={this.handleChange.bind(this)}>
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <Input name="password2" type="password" id="password2" />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
                  Sign Up
            </Button>
            <br /><br />
            <Typography paragraph>
            Already have an account? <Link to={'/login'}>Log In</Link>
            </Typography>
          </form>
        </Paper>
      </main>
    )
  }
}
    
Register.propTypes = {
  classes: PropTypes.object.isRequired,
}
    
export default withStyles(styles)(Register)