import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'
import PostForm from '../components/PostForm/PostForm'
import Timer from '../components/Timer/Timer'

const AddPostPage = props => {

  return (
    <Grid container 
      direction = "column"
      justify = "center"
      alignItems = "center"> 
      <br /><br />
      <Typography color="secondaryText" variant="p">
      Make daily writing practice a habit and commit to our 5-Minute Challenge!
      </Typography>
      <Timer />
      <PostForm
        post={null} 
        requestType="Publish"/>
      <br /><br />
      <Link to={'/posts'}>Back</Link>
    </Grid>
     
  )
}

export default AddPostPage