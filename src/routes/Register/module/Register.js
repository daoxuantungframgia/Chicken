import { initialize } from 'redux-form'
import * as API from 'api/api'
import { navigateTo } from 'utils/routing'

export function submitRegister (values) {
  return (dispatch) => {
    API.post({
      url: '/api/public/users/create',
      data: values
    }).then((response) => {
      if (response) {
        dispatch(API.setNotification({
          notification: {
            success: {
              message: 'Chúc mừng! Bạn đã đăng ký tài khoản thành công'
            }
          }
        }))
        navigateTo('/login')
      }
    })
  }
}

export function loginSocialSuccess (user) {
  return (dispatch) => {
    let values = {
      socialToken: user.token.accessToken,
      socialUserId: user.profile.id,
      socialTokenIssuer: user.provider,
      fullName: user.profile.name,
      email: user.profile.email
    }
    dispatch(initialize('registerForm', values))
  }
}

export function loginSocialFailure (error) {
  return (dispatch) => {
    console.log(error)
  }
}
