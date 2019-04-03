import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'
import PostForm from '../components/PostForm/PostForm'
import Timer from '../components/Timer/Timer'

const AddPostPage = () => {

  return (
    <Grid container 
      direction = "column"
      justify = "center"
      alignItems = "center"
      style={{backgroundColor: '#E8EAF6'}}> 
      <br /><br />
      <Timer />
      <br />
      <Typography color="textSecondary" variant="body">
      Use this random image as your visual prompt to compose an entry. Some ideas to get you started: 
        <ul>
          <li>How does this image make you feel? Why? </li>
          <li>Describe the image with another sense - touch, smell, sound</li>
          <li>Tell the story of the subject in the image</li>
        </ul>
      Make daily writing practice a habit by committing to 10 minutes per day!
      </Typography>
      <PostForm
        post={null} 
        requestType="Publish"/>
      <br /><br />
      <Link to={'/posts'}>Back</Link>
    </Grid>
     
  )
}

export default AddPostPage