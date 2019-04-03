//Testing for Timer Component
import React from 'react'
import { shallow } from 'enzyme'
import Timer from './Timer'

describe('10-Min Interval Timer', () => {
  it('should render a <Grid>', () => {
    const wrapper = shallow(<Timer />)
    expect(wrapper.find('Grid').length).toEqual(1)
  })
  it('should render a <TimerDisplay>', () => {
    const wrapper = shallow(<Timer />)
    expect(wrapper.find('TimerDisplay').length).toEqual(1)
  })
  it('should render a <TimerButton>', () => {
    const wrapper = shallow(<Timer />)
    expect(wrapper.find('TimerButton').length).toEqual(1)
  })
})
