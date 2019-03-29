import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import AppNav from './components/AppNav/AppNav'
import HomePage from './pages/HomePage'
import AddPostPage from './pages/AddPostPage'
import LoginPage from './pages/LoginPage'
import PostDetailPage from './pages/PostDetailPage'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: null
    }
  }

  handleLogin(user) {
    console.log('USER >> ', user)
    this.setState({
      user: user
    })
  }

  userLogout () {
    this.setState({user: null})
  }

  render() {

    const renderPageNotFound = () => {
      return(<h1>Sorry: Page Not Found!</h1>)
    }
    const renderLogin = (props) => {
      return(
        <LoginPage 
          history={props.history} 
          handleLogin={(user) => this.handleLogin(user)} />
      )
    }

    const renderLogout = (props) => {
      this.userLogout()
      return(
        <Redirect to={'/login'}/>
      )
    }
  
    return (

      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          {/* Pass a user prop to AppNav component once login is working to change visible options Login/Logout, Create Entry */}
          <AppNav />
          <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/new' component={AddPostPage} />
              <Route exact path='/posts' component={HomePage} />
              <Route exact path='/posts/:postID' component={PostDetailPage} />
              <Route exact path='/login' render={renderLogin} />
              <Route exact path='/logout' render={renderLogout} />
              <Route render={renderPageNotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
  
    )
  }
}

export default App