import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

function Post(props) {
  const { classes } = props
  const post = props.post
  const date_created = new Date(post.created_on)
  console.log(date_created)
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.imagePrompt ? post.imagePrompt : null}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography component="p">
            {date_created.toLocaleString()}  
          </Typography>
          <Typography component="h4">
            Prompt: {post.textPrompt ? post.textPrompt : null}  
          </Typography>
          <Typography component="p">
            {post.body}  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Post)