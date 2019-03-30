import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Hearten tests', function() {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)

  })

  it('should find AppNav', () => {
    const wrapper = shallow(<App />)
    expect(wrapper
      .find('AppNav').debug())
      .toEqual('<AppNav />')
  })
})


