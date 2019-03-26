import React from 'react';
import PostForm from '../components/PostForm/PostForm';

const AddPostPage = props => {

    return (
      <div>
        <PostForm
        post={null} 
        requestType="Publish"/>
      </div>
    )
  }

export default AddPostPage;