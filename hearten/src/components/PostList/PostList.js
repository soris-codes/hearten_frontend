import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import PostTeaser from '../PostTeaser/PostTeaser'
import PostsAPI from '../../api/PostsAPI'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginTop: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
  }
})

class PostList extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
    
  }

  fetchAllPosts() {
    const token = this.props.user
    console.log('POSTLIST - Token >>', token)
    if(token !== null){
      PostsAPI.fetchPosts(token)
        .then((jsonData) => {
          this.setState({
            posts: jsonData
          })
        })
        .catch(err => {
          console.error(err)
          alert('Error logging in please try again')
        })
    }
    
  }

  componentDidMount() {
    this.fetchAllPosts()
  }

  render() {
    console.log('POSTS >>', this.state.posts)
    const { classes } = this.props
    return(
      <Grid 
        container
        className={classes.layout}
        spacing={24}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        { this.state.posts ? 
          this.state.posts.map((post, index) =>
            <PostTeaser key={index} post={post}/>): 
          <p>Loading...</p>
        }
      </Grid>
    )
  }  
}


export default withStyles(styles)(PostList)
