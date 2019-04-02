import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Post from './Post'

it('renders without crashing', () => {
  const wrapper = mount(<Post />)
})

it('accepts title, body, and an image', () => {
  const wrapper = mount(<Post title="Test Headline" body="My test post body" image={null} />)
  expect(wrapper.contains(<h2>Test Headline</h2>)).toEqual(true)
  expect(wrapper.contains(<span>My test post body</span>)).toEqual(true)
  expect(wrapper.contains(<img />)).toEqual(true)
  expect(wrapper.find('h2').exists()).toEqual(false)
  expect(wrapper.find('img').exists()).toEqual(false)
})