import React, { Component } from 'react';
import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// import PostsAPI from '../../api/PostsAPI'

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      title: "",
      body: "",
      image: "https://images.unsplash.com/photo-1552055915-53d13beae39e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
      prompt: ""
    }
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
    // console.log(this.state)
    const item = event.target.name
    const value = event.target.value
    this.setState({
      [item]: value
    })
  }

  handleAdd(event){
    event.preventDefault()
    console.log("ADD >>")
    // const postObject = this.createPostObject()
    // PostsAPI.addPost(postObject)
    // .then((response) => {
    //   console.log(response)
    //   this.setState({ redirect: true }) })
    // .catch(error => console.error(error))
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
            { this.state.image ? <img item src={this.state.image} alt="Visual Prompt"/> : 
            <p>No image found</p>}
            <form item
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
                placeholder="And so it begins..."
                multiline
                // className={classes.textField}
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
      return <Redirect to = {`/posts`}/>
    }
    return (
      this.renderForm()
    );
  }
}

export default PostForm;