import React, { Component } from 'react';
import Post from '../components/Post/Post';
import PostsAPI from '../api/PostsAPI';

class PostPage extends Component {

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
  }

  render() {
    console.log(this.state.post)
    return (
      <div>
      {this.state.post ? <Post post={this.state.post}/> : <h2>Loading...</h2> } 
    </div>
    )
  }
}

export default PostPage;