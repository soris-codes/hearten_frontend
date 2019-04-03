import { configure, shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount

// Make Jest-Fetch-Mock available in all files without importing
global.fetch = require('jest-fetch-mock')

