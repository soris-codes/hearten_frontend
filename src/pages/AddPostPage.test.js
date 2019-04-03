import React from 'react'
import { shallow } from 'enzyme'
import AddPostPage from './AddPostPage'
import PostForm from '../components/PostForm/PostForm'
import Timer from '../components/Timer/Timer'

describe('Add a Post Page', () => {
  let wrapper
  beforeEach(() => wrapper = shallow(<AddPostPage />))

  it('should render a PostForm Component', () => {
    expect(wrapper.containsMatchingElement(<PostForm />)).toEqual(true)
  })

  it('should render the Timer Component', () => {
    expect(wrapper.containsMatchingElement(<Timer />)).toEqual(true)
  })

})