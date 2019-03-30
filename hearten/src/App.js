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
import UsersAPI from './api/UsersAPI'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: null
    }
  }

  handleLogin(user) {
    this.setState({
      user: user
    })
    console.log('USER >> ', user)
  }

  userLogout () {
    //Need function call here to return token to API for true logout
    UsersAPI.logout(this.state.user['token'])
    this.setState({user: null})
  }

  render() {

    const renderPageNotFound = () => {
      return(<h1>Sorry: Page Not Found!</h1>)
    }
    const renderLogin = (props) => {
      return(
        <Login 
          history={props.history} 
          handleLogin={(user) => this.handleLogin(user)} />
      )
    }

    const renderUserPosts = (props) => {
      return(
        <Grid container 
          direction = "column"
          justify = "center"
          alignItems = "center"> 
          <PostList user={this.state.user} />
        </Grid>
      )
    }

    const renderLogout = (props) => {
      this.userLogout()
      return(
        <Redirect to={'/'}/>
      )
    }
  
    return (

      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <AppNav user={this.state.user}/>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/posts/new' component={AddPostPage} />
              <Route exact path='/posts' render={renderUserPosts} />
              <Route exact path='/posts/:postID' component={PostDetailPage} />
              <Route exact path='/login' render={renderLogin} />
              <Route exact path='/logout' render={renderLogout} />
              <Route exact path='/register' component={Register} />
              <Route render={renderPageNotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
  
    )
  }
}

export default App