import React, { Component } from 'react';
import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PostsAPI from '../../api/PostsAPI';

class PostForm extends Component {
 
    state = {
      redirect: false,
      title: "",
      body: "",
      imagePrompt: "",
      textPrompt: ""
    }

  getRandomImage() {
    fetch('https://source.unsplash.com/random/400x400')
    .then((response) => {
      console.log(response.url)
      this.setState({
        image: response.url
      })
    })
  }

  componentDidMount() {
    // if(this.props.requestType === 'Add') {
    //   this.getRandomImage()
    // }
  }

  handleChange(event){
    const item = event.target.name
    const value = event.target.value
    // console.log("Input >>", item, value )
    this.setState({
      [item]: value
    })
  }

  createPostObject() {
    const postObject = {}
    postObject.title = this.state.title
    postObject.body = this.state.body
    if(this.state.imagePrompt) {
      postObject.imagePrompt = this.state.imagePrompt
    }
    if(this.state.textPrompt) {
      postObject.textPrompt = this.state.textPrompt
    }
    return postObject
  }

  handleAdd(event){
    event.preventDefault()
    const postObject = this.createPostObject()
    console.log("ADD >>", postObject)
    PostsAPI.addPost(postObject)
    .then((response) => {
      console.log(response)
      this.setState({ redirect: true }) })
    .catch(error => console.error(error))
  }

  handleUpdate(event){
    event.preventDefault();
    console.log("UPDATE >>", event.target.value)
    // const postObject = this.createPostObject()
    // PostsAPI.editPost(this.props.post.category, this.props.postID, postObject)
    // .then((response) => {
    // console.log(response)
    // this.setState({ redirect: true })})
    // .catch(error => console.error(error))
  }

  handleDelete(event){
    event.preventDefault();
    console.log("DELETE >>")
    // PostsAPI.deletePost(this.props.postID)
    //   .then((response) => {
    //   console.log(response)
    //   this.setState({ redirect: true }) })
    //   .catch(error => console.error(error))
  }

  renderForm() {
    const requestType = this.props.requestType
    switch(requestType) {
      case 'Update':
      case 'Add':
          return(
          <Grid container>
            <Paper>
            { this.state.imagePrompt ? <img src={this.state.imagePrompt} alt="Visual Prompt"/> : 
            <p>No image found</p>}
            <form 
              onSubmit={this.props.postID ?       this.handleUpdate.bind(this) : 
              this.handleAdd.bind(this)}
              >
              <TextField
                id="standard-name"
                placeholder="Title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange.bind(this)}
                margin="normal"
              />
              <TextField
                id="standard-textarea"
                name="body"
                value={this.state.body}
                placeholder="And so it begins..."
                multiline
                onChange={this.handleChange.bind(this)}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <Button variant="outlined" type="submit">
                {this.props.requestType}
              </Button>
            </form>
          </Paper>
          </Grid>)
      default:
        alert("Invalid Form Request Type!")
        return (<h1>ERROR!</h1>)
    }  

  }

  render() {
    const { redirect } = this.state;
      if (redirect) {
      return <Redirect to = {`/`}/>
    }
    return (
      this.renderForm()
    );
  }
}

export default PostForm;


