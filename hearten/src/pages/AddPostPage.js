import React from 'react';
import PostForm from '../components/PostForm/PostForm';

const AddPostPage = props => {

    return (
      <div>
        <PostForm requestType="Add"/>
      </div>
    )
  }

export default AddPostPage;