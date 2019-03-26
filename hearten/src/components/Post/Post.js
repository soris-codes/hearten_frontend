import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PostForm from '../PostForm/PostForm';

const styles = {
  card: {
    maxWidth: 800,
    marginBottom: 30,
    marginTop: 30,
   
  },
  media: {
    height: 400,
  },
}

class Post extends Component {

  state = {
    editMode: false,
  }

  toggleEditMode = (event) =>{
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render () {
    const { classes } = this.props
    const post = this.props.post
    const date_created = new Date(post.created_on)
    console.log(date_created)

    const renderPost = () => {
      return (
        <Card className={classes.card}>
          <CardActionArea onClick={this.toggleEditMode}>
            <CardMedia
              className={classes.media}
              image={post.imagePrompt ? post.imagePrompt : null}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography component="p" gutterBottom>
                {date_created.toLocaleString()}  
              </Typography>
              <Typography component="h4" gutterBottom>
                {post.textPrompt ? post.textPrompt : null}  
              </Typography>
              <Typography paragraph>
                {post.body}  
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
    }

    return(
      <div>{ this.state.editMode ? <PostForm post={post}requestType="Update" /> : renderPost()}</div>
    )
    
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Post)