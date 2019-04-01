
import UsersAPI from './UsersAPI'
import fetchMock from 'jest-fetch-mock'
require('isomorphic-fetch')

const LOGIN = 'https://cors-anywhere.herokuapp.com/https://hearten-api.herokuapp.com/api/auth/login'
const LOGOUT = 'https://cors-anywhere.herokuapp.com/https://hearten-api.herokuapp.com/api/auth/logout'



describe('UserAPI testing to ensure login/logoff functionality', () => {

  afterEach(() => {
    fetchMock.resetMocks()
  })
  
  it('User can log in', (done) => {
    const request = fetchMock.post(`${LOGIN}`, {success: true})
    const userObject = {username: 'sam', password: '12345678'}
    return UsersAPI.login(userObject)
      .then((json) => {
        const requestBody = request._matchedCalls[0][1].body
        expect(requestBody).toEqual(JSON.stringify(userObject))
        expect(json.success).toEqual(true)
        done()
      })
      .catch((err) => {
        throw new Error('API Call FAILED!')
      })
  })

})