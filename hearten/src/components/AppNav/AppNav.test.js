import React from 'react'
import ReactDOM from 'react-dom'
import AppNav from './AppNav'
import { configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

configure({ adapter: new Adapter() })

describe('AppNav tests', function() {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AppNav />, div)
    ReactDOM.unmountComponentAtNode(div)

  })

  it('should render a Button component', () => {
    const wrapper = shallow(<AppNav />)
    expect(wrapper.find(Button)).to.have.length(1)
  })


})
