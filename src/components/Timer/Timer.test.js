import React from 'react'
import { shallow } from 'enzyme'
import Timer from './Timer'

describe('<Timer />', () => {


  it('loads without crashing', () => {
    const wrap = mount(<Timer />)
    expect(wrap).toMatchSnapshot()
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
