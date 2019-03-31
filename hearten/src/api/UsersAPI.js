const LOGIN = 'https://cors-anywhere.herokuapp.com/https://hearten-api.herokuapp.com/api/auth/login'
const LOGOUT = 'https://cors-anywhere.herokuapp.com/https://hearten-api.herokuapp.com/api/auth/logout'
const REGISTER = 'https://cors-anywhere.herokuapp.com/https://hearten-api.herokuapp.com/api/auth/register'

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