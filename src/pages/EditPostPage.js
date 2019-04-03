import React from 'react'
import PostForm from '../components/PostForm/PostForm'

const EditPostPage = props => {

  return (
    <div>
      <PostForm
        postID={this.props.match.params.postID} 
        requestType="Update"/>
    </div>
  )
}

export default EditPostPage