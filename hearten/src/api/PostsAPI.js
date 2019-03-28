const API = 'https://cors-anywhere.herokuapp.com/https://hearten-api.herokuapp.com/api/'

const addPost = (postObject) => {
  return fetch(`${API}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(postObject)
  })
}

const editPost = (postID, postObject) => {
  return fetch(`${API}${postID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(postObject)
  })
}

const deletePost = (postID) => {
  return fetch(`${API}${postID}/`, { 
    method: 'DELETE' 
  })
}

const fetchPostByID = (postID) => {
  return fetch(`${API}${postID}/`).then((data) => data.json())
}

const fetchPosts = () => {
  return fetch(`${API}`)
    .then((data) => data.json())
}

export default {
  fetchPosts: fetchPosts,
  fetchPostByID: fetchPostByID,
  addPost: addPost,
  editPost: editPost,
  deletePost: deletePost,
}