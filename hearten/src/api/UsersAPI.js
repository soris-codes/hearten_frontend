const LOGIN = 'http://localhost:8000/api/auth/login'
const LOGOUT = 'http://localhost:8000/api/auth/logout'
const REGISTER = 'http://localhost:8000/api/auth/register'

const login = (credentialsObject) => {
  return fetch(`${LOGIN}`,{
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(credentialsObject)
  })
}

const logout = (token) => {
 
  return fetch(`${LOGOUT}`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    method: 'POST',
  })
}

const register = (credentialsObject) => {
  return fetch(`${REGISTER}`,{
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(credentialsObject)
  })
}

export default {
  login: login,
  logout: logout,
  register: register,
}