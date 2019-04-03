import React from 'react'
import { shallow } from 'enzyme'
import PostForm from './PostForm'

describe('PostForm', () => {
  let wrapper
  beforeEach(() => wrapper = shallow(<PostForm />))

  it('should render a <div>', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

})