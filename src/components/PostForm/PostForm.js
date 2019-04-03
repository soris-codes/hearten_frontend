import React, { Component } from 'react'
import { Redirect } from 'react-router'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PostsAPI from '../../api/PostsAPI'

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
})

class PostForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      successfulSubmission: false,
      title: '',
      body: '',
      imagePrompt: '',
    }
  }

  getRandomImage() {
    fetch('https://source.unsplash.com/random/400x400')
      .then((response) => {
        this.setState({
          imagePrompt: response.url
        })
      })
  }

  componentDidMount() {
    if (this.props.requestType === 'Publish') {
      this.getRandomImage()
    }
    if (this.props.requestType === 'Update') {
      const post = this.props.post
      this.setState({
        title: post.title,
        body: post.body,
        imagePrompt: post.imagePrompt,
      })
    }
    if (this.props.requestType === 'Delete') {
      this.handleDelete()
    }

  }

  handleChange(event) {
    const item = event.target.name
    const value = event.target.value
    this.setState({
      [item]: value
    })
  }

  createPostObject() {
    const postObject = {}
    postObject.title = this.state.title
    postObject.body = this.state.body
    if (this.state.imagePrompt) {
      postObject.imagePrompt = this.state.imagePrompt
    }
    return postObject
  }

  handleResponse(response) {
    if(response.ok) {

      this.setState({
        successfulSubmission: true
      })
    }
    else {
      alert(`Unable to ${this.props.requestType} your post. ${response.statusText}.`)
    }

  }

  handleAdd(event) {
    event.preventDefault()
    const postObject = this.createPostObject()
    const token = localStorage.getItem('userToken')
    PostsAPI.addPost(postObject, token)
      .then((response) => {
        this.handleResponse(response)
      })
     
  }

  createEditedPostObject() {
    const postObject = {}
    const post = this.props.post
    if (post.title !== this.state.title) {
      postObject.title = this.state.title
    }
    if (post.body !== this.state.body) {
      postObject.body = this.state.body
    }
    return postObject
  }

  handleUpdate(event) {
    event.preventDefault()
    const postObject = this.createEditedPostObject()
    PostsAPI.editPost(this.props.post.id, postObject, localStorage.getItem('userToken'))
      .then((response) => {
        this.handleResponse(response)
      })
  }

  handleDelete() {
    PostsAPI.deletePost(this.props.post.id, localStorage.getItem('userToken') )
      .then((response) => {
        this.handleResponse(response)
      })
  }

  renderForm() {
    const { classes } = this.props
    const requestType = this.props.requestType
    switch (requestType) {
    case 'Delete':
      return ( <Paper><p> Deleting entry... </p></Paper> )
    case 'Update':
    case 'Publish':
      return ( 
        <Grid 
          container
          spacing={16}
          direction="row"
          justify="space-evenly"
          alignItems="center" >
          <Grid item>
            <Paper className={classes.paper}> {
              this.state.imagePrompt ? 
                <img src = { this.state.imagePrompt }
                  alt = "Visual Prompt" /> :
                <p> Image Loading... </p>} 
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <form 
                className={classes.form}
                onSubmit = { this.props.post ? this.handleUpdate.bind(this) : this.handleAdd.bind(this)
                }>
                <TextField
                  id = "standard-name"
                  placeholder = "Title"
                  name = "title"
                  value = {
                    this.state.title
                  }
                  onChange = {
                    this.handleChange.bind(this)
                  }
                  margin = "normal"
                  fullWidth
                />
                <TextField
                  id = "standard-textarea"
                  name = "body"
                  value = {
                    this.state.body
                  }
                  placeholder = "And so it begins..."
                  multiline
                  rows="11"
                  onChange = {
                    this.handleChange.bind(this)
                  }
                  margin = "normal"
                  variant = "outlined"
                  color = "primary"
                  fullWidth
                />
                <Button 
                  variant = "contained"
                  color = "primary"
                  type = "submit"
                  className={classes.submit}
                > {
                    this.props.requestType
                  } 
                </Button> 
              </form>
            </Paper>
          </Grid> 
        </Grid>)
    default: alert('Invalid Form Request Type!')
      return ( <h1> ERROR! </h1>)
    }
  }

  render() {
    return ( 
      <div> {
        this.state.successfulSubmission ?
          <Redirect to = {'/posts'}/> : this.renderForm()} 
      </div>
    )
  }
}

PostForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PostForm)