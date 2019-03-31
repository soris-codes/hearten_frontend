import React, { Component } from 'react'
import Post from '../components/Post/Post'
import PostsAPI from '../api/PostsAPI'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

class PostDetailPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: null
    }
  }

  //Retrieve the specific post that has been requested to be viewed and include the user's token for authorization
  componentDidMount() {
    PostsAPI.fetchPostByID(this.props.match.params.postID, localStorage.getItem('userToken'))
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
      <Grid container 
        direction = "column"
        justify = "center"
        alignItems = "center"> 
        { this.state.post ?
          <Post post = { this.state.post }/> : 
          <h2>Loading...</h2 >
        }
        <Link to={'/posts'}>Back</Link>
      </Grid>
      
    )
  }
}

export default PostDetailPage