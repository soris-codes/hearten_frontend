const API = 'https://cors-anywhere.herokuapp.com/https://hearten-api.herokuapp.com/api/posts/'

const addPost = (postObject, token) => {
  return fetch(`${API}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    method: 'POST',
    body: JSON.stringify(postObject)
  })
}

const editPost = (postID, postObject, token) => {
  return fetch(`${API}${postID}/`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    method: 'PATCH',
    body: JSON.stringify(postObject)
  })
}

const deletePost = (postID, token) => {
  return fetch(`${API}${postID}/`, { 
    headers: {
      'Authorization': `Token ${token}`
    },
    method: 'DELETE' 
  })
}

const fetchPostByID = (postID, token) => {
  return fetch(`${API}${postID}/`, {
    headers: {
      'Authorization': `Token ${token}`
    }
  })
    .then((data) => data.json())
}

const fetchPosts = (token) => {
  return fetch(`${API}`, {
    headers: {
      'Authorization': `Token ${token}`
    },
  })
    .then((data) => data.json())
}

export default {
  fetchPosts: fetchPosts,
  fetchPostByID: fetchPostByID,
  addPost: addPost,
  editPost: editPost,
  deletePost: deletePost,
}