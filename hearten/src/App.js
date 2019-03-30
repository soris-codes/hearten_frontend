import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import AppNav from './components/AppNav/AppNav'
import HomePage from './pages/HomePage'
import AddPostPage from './pages/AddPostPage'
import Login from './components/Login/Login'
import PostDetailPage from './pages/PostDetailPage'
import PostList from './components/PostList/PostList'
import Register from './components/Register/Register'

import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import UsersAPI from './api/UsersAPI'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: null
    }
  }

  //This function is passed as a prop in both
  //the Login and Register components.
  //When a user has successfully been authenticated and has a 
  //token, set state, save token and user in localStorage
  handleLogin(user) {
    this.setState({
      user: user
    })
    localStorage.setItem('userName', user.user.username)
    localStorage.setItem('userToken', user.token)
    // console.log('LOCAL USER >> ', localStorage.getItem('userName'))
    // const token = this.state.user.token
    // console.log('TOKEN!', token)
  }

  //Logs off from API server so token is destroyed/invalidated,
  //updates state, and removes token/user from localStorage
  handleLogout () {
    const token = localStorage.getItem('userToken')
    console.log('LOGOUT >>', token)
    UsersAPI.logout(token)
      .then((response) => {
        console.log(response)
        this.setState({user: null})
      })
      .catch(error => console.error(error))
    localStorage.removeItem('userToken')
    localStorage.removeItem('userName')
  }

  render() {

    const renderPageNotFound = () => {
      return(<h1>Sorry: Page Not Found!</h1>)
    }

    const renderRegister = (props) => {
      return(
        <Register 
          history={props.history} 
          handleLogin={(user) => this.handleLogin(user)} />
      )
    }
    const renderLogin = (props) => {
      return(
        <Login 
          history={props.history} 
          handleLogin={(user) => this.handleLogin(user)} />
      )
    }

    const renderUserPosts = () => {
      return(
        <PostList user={localStorage.getItem('userToken')} />
      )
    }

    const renderLogout = () => {
      this.handleLogout()
      return(
        <Redirect to={'/'}/>
      )
    }
  
    return (

      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <AppNav user={localStorage.getItem('userToken')}/>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/posts/new' component={AddPostPage} />
              <Route exact path='/posts' render={renderUserPosts} />
              <Route exact path='/posts/:postID' component={PostDetailPage} />
              <Route exact path='/login' render={renderLogin} />
              <Route exact path='/logout' render={renderLogout} />
              <Route exact path='/register' render={renderRegister} />
              <Route render={renderPageNotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
  
    )
  }
}

export default App