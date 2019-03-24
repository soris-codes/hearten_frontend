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
    maxWidth: 345,
    marginBottom: 30,
    marginTop: 30,
   
  },
  media: {
    height: 140,
  },
}

function PostTeaser(props) {
  const { classes } = props
  const post = props.post
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography component="p">
            {post.prompt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

PostTeaser.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PostTeaser)

