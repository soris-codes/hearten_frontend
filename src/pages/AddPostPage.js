import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import PostForm from '../components/PostForm/PostForm'

const AddPostPage = props => {

  return (
    <Grid container 
      direction = "column"
      justify = "center"
      alignItems = "center"> 
      <PostForm
        post={null} 
        requestType="Publish"/>
      <Link to={'/posts'}>Back</Link>
    </Grid>
     
  )
}

export default AddPostPage