import React, { Component } from 'react';
import Post from '../components/Post/Post';
import PostsAPI from '../api/PostsAPI';
import Grid from '@material-ui/core/Grid';

class PostDetailPage extends Component {

  state = {
    post: null
  }

  componentDidMount() {
    PostsAPI.fetchPostByID(this.props.match.params.postID)
    .then((jsonData) => {
      this.setState({
        post: jsonData
      })
    })
    .catch(error => {
      alert(`Error: ${error}`)
    })
  }

  render() {
    console.log(this.state.post)
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">
        
      {this.state.post ? <Post post={this.state.post}/> : <h2>Loading...</h2> } 
    </Grid>
    )
  }
}

export default PostDetailPage;