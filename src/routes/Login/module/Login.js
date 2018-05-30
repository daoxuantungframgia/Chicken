import * as API from 'api/api'

export function submitLogin (values) {
  return (dispatch) => {
    API.post({
      url: '/api/login/users',
      data: values
    }).then((response) => {
      console.log(response)
    })
  }
}

export function loginSocialSuccess (user) {
  return (dispatch) => {
    console.log(user)
  }
}

export function loginSocialFailure (error) {
  return (dispatch) => {
    console.log(error)
  }
}
