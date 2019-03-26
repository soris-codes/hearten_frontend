import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AppNav from './components/AppNav/AppNav';
import HomePage from './pages/HomePage';
import AddPostPage from './pages/AddPostPage';
import PostDetailPage from './pages/PostDetailPage';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {

  render() {

    const renderPageNotFound = () => {
      return(<h1>Sorry: Page Not Found!</h1>)
    }
  
    return (

      <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
          <AppNav />
          <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/new' component={AddPostPage} />
              <Route exact path='/posts' component={HomePage} />
              <Route exact path='/posts/:postID' component={PostDetailPage} />
              <Route render={renderPageNotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
  
    );
  }
}

export default App;