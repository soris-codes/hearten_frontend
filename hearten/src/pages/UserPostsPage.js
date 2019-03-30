import React from 'react'
import Grid from '@material-ui/core/Grid'
import PostList from '../components/PostList/PostList'

const UserPostsPage = props => {

  return (
    <Grid container 
      direction = "column"
      justify = "center"
      alignItems = "center"> 
      <PostList />
    </Grid>
     
  )
}

export default UserPostsPage