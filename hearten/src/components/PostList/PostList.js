import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import PostTeaser from '../PostTeaser/PostTeaser'
import PostsAPI from '../../api/PostsAPI'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
  },
  greeting: {
    alignItems: 'center',
    padding: `${theme.spacing.unit * 4}px`,
  }
})

class PostList extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      // user: ''
    }
  }

  fetchAllPosts() {
    const token = localStorage.getItem('userToken')
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
    // this.setState({
    //   user: this.props.user
    // })
  }

  // componentDidUpdate(prevProps) {
  //   if (this.state.user !== prevProps.user) {
  //     this.fetchAllPosts()
  //     this.setState({
  //       user: this.props.user
  //     })
  //   }
  // }

  render() {
    console.log('POSTLIST: STATE POSTS >>', this.state.posts)
    const { classes } = this.props

    const greeting = () => {
      let user = localStorage.getItem('userName')
      return (<Typography variant="h6" color="secondary" align="center">Welcome, {user.toLocaleUpperCase()}!</Typography>)
    }

    const renderList = () => {
      return (
        <Grid 
          container
          className={classes.layout}
          spacing={24}
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {this.state.posts.map((post, index) =>
            <PostTeaser key={index} post={post}/>)}
        </Grid>
      )

    }
    return(
      <Grid container direction="column">
        { this.state.posts.length > 0 ?   <React.Fragment><Grid item 
          className={classes.greeting}>{greeting()}
        </Grid> {renderList()}</React.Fragment> : <Typography variant="h6" color="secondary" align="center"><br />Hey, you don't have any recent posts... Create an entry!</Typography>}</Grid>
    )
  }  
}


export default withStyles(styles)(PostList)
