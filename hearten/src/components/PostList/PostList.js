import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import PostTeaser from '../PostTeaser/PostTeaser'
import PostsAPI from '../../api/PostsAPI'

class PostList extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  fetchAllPosts() {
    PostsAPI.fetchPosts()
      .then((jsonData) => {
        this.setState({
          posts: jsonData
        })
      })
  }

  componentDidMount() {
    this.fetchAllPosts()
  }

  render() {
    return(
      <Grid 
        container
        spacing={16}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        { this.state.posts ? this.state.posts.map((post, index) =>
          <PostTeaser key={index} post={post}/>): 
          <p>Loading...</p>
        }
      </Grid>
    )
  }  
}


export default PostList
