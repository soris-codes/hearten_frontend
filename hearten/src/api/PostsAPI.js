const API = 'https://cors-anywhere.herokuapp.com/https://hearten-api.herokuapp.com/api/'

const local = 'http://localhost:8000/api/posts/'

const addPost = (postObject) => {
  return fetch(`${local}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(postObject)
  })
}

const editPost = (postID, postObject) => {
  return fetch(`${local}${postID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(postObject)
  })
}

const deletePost = (postID) => {
  return fetch(`${local}${postID}/`, { 
    method: 'DELETE' 
  })
}

const fetchPostByID = (postID) => {
  return fetch(`${local}${postID}/`).then((data) => data.json())
}

const fetchPosts = () => {
  return fetch(`${local}`)
    .then((data) => data.json())
}

export default {
  fetchPosts: fetchPosts,
  fetchPostByID: fetchPostByID,
  addPost: addPost,
  editPost: editPost,
  deletePost: deletePost,
}