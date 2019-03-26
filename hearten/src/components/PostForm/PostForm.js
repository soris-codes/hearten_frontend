import React, { Component } from 'react';
import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import PostsAPI from '../../api/PostsAPI';

class PostForm extends Component {
 
    state = {
      redirect: false,
      successfulSubmission: false,
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
        imagePrompt: response.url
      })
    })
  }

  componentDidMount() {
    if(this.props.requestType === 'Publish') {
      this.getRandomImage()
    }
    if(this.props.requestType === 'Update') {
      const post = this.props.post
      this.setState({
        title: post.title,
        body: post.body,
        imagePrompt: post.imagePrompt,
        textPrompt: post.textPrompt
      })
    }
    if(this.props.requestType === 'Delete') {
      this.handleDelete()
    }

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
      this.setState({ 
        redirect: true,
        successfulSubmission: true
      }) 
    })
    .catch(error => console.error(error))
  }

  createEditedPostObject() {
    const postObject = {}
    const post = this.props.post
    if(post.title !== this.state.title) {
      postObject.title = this.state.title
    }
    if(post.body !== this.state.body) {
      postObject.body = this.state.body
    }
    console.log("EDITED >>",postObject)
    return postObject
  }

  handleUpdate(event){
    event.preventDefault();
    console.log("UPDATE >>", event.target.value)
    const postObject = this.createEditedPostObject()
    PostsAPI.editPost(this.props.post.id, postObject)
    .then((response) => {
    console.log(response)
    this.setState({ redirect: true,
      successfulSubmission: true})})
    .catch(error => console.error(error))
  }

  handleDelete(){
    console.log("DELETE >>", this.props.post.id)
    PostsAPI.deletePost(this.props.post.id)
      .then((response) => {
      console.log(response)
      this.setState({ redirect: true,
      successfulSubmission: true }) })
      .catch(error => console.error(error))
  }

  renderForm() {
    const requestType = this.props.requestType
    switch(requestType) {
      case 'Delete':
        return(<Paper><p>Deleting entry...</p></Paper>)
      // return(
      //   <Grid container>
      //     <Paper>
      //       Are you sure you want to delete this entry?
      //       <form >
      //         <Button 
      //         color="secondary" 
      //         variant="contained"
      //         onClick={this.handleDelete}
      //         >
      //         YES!
      //         </Button>
      //         <Button color="primary" variant="contained" type="submit">
      //         NO
      //         </Button>
      //       </form>
      //     </Paper>
      //   </Grid>
      //   )
      case 'Update':
      case 'Publish':
          return(
          <Grid container>
            <Paper>
            { this.state.imagePrompt ? <img src={this.state.imagePrompt} alt="Visual Prompt"/> : 
            <p>Image Loading...</p>}
            <form 
              onSubmit={this.props.post ?       this.handleUpdate.bind(this) : 
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

    const renderConfirmation = () => {
      return (<Snackbar
        open={this.state.successfulSubmission}
        autoHideDuration={6000}
        message={`Your Post was Successfully ${this.props.requestType}ed.`}
    />)
    }

    const handleSuccess = (props) => {
      renderConfirmation()
      return(<Redirect to={'/'}/>) 
    }

    return (
      <div>{ this.state.successfulSubmission ? 
        handleSuccess() : this.renderForm()}</div>
    );
  }
}

export default PostForm;


