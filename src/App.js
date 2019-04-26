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

import UsersAPI from './api/UsersAPI'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      loggedIn: false
    }
  }
  
  //This function is passed as a prop in both
  //the Login and Register components.
  //When a user has successfully been authenticated and has a 
  //token, save token and user in localStorage
  handleLogin(user) {
    localStorage.setItem('userName', user.user.username)
    localStorage.setItem('userToken', user.token)
    this.setState({
      loggedIn: true
    })
  }

  //Logs off from API server so token is destroyed/invalidated
  //and removes token/user from localStorage
  handleLogout () {
    const token = localStorage.getItem('userToken')
    UsersAPI.logout(token)
    localStorage.removeItem('userToken')
    localStorage.removeItem('userName')
    this.setState({
      loggedIn: false
    })
  }

  render() {

    const renderPageNotFound = () => {
      return(<h1>Sorry: Page Not Found!</h1>)
    }

    const renderRegister = (props) => {
      return(
        <Register 
          history={props.history} 
          handleLogin={this.handleLogin.bind(this)} />
      )
    }
    const renderLogin = (props) => {
      return(
        <Login 
          history={props.history} 
          handleLogin={this.handleLogin.bind(this)} />
      )
    }

    const renderLogout = () => {
      return(<Redirect to={'/'}/>)
    }

    const renderPostList = () => {
      return(<PostList />)
    }
  
    return (
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <AppNav handleLogout={this.handleLogout.bind(this)}/>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/posts/new' component={AddPostPage} />
              <Route exact path='/posts' render={renderPostList} />
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