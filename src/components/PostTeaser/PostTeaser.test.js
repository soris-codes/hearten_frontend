import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import sinon from 'sinon'
import PostTeaser from './PostTeaser'


it('PostTeaser component renders without crashing', () => {
  const component = mount(<PostTeaser key='1' post='something' />)
})