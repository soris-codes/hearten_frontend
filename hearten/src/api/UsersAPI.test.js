
import UsersAPI from './UsersAPI'
import fetchMock from 'fetch-mock'
require('isomorphic-fetch')

const LOGIN = 'http://localhost:8000/api/auth/login'
// const LOGOUT = 'http://localhost:8000/api/auth/logout'
// const REGISTER = 'http://localhost:8000/api/auth/register'



describe('UserAPI testing to ensure login/logoff functionality', () => {

  afterEach(() => {
    fetchMock.restore()
  })
  
  it('User can log in', (done) => {
    const request = fetchMock.post(`${LOGIN}`, {success: true})
    const userObject = {username: 'bubba', password: '12345678'}
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