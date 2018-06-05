import * as API from 'api/api'
import { setUser, isLoginFromBasket } from 'utils/storage'
import { navigateTo } from 'utils/routing'

const saveLoginAndRedirect = (user) => {
  if (user) {
    setUser(user)
    if (isLoginFromBasket()) {
      navigateTo('/select-address')
    } else {
      navigateTo('/')
    }
  }
}

export function submitLogin (values) {
  return (dispatch) => {
    API.post({
      url: '/api/login/users',
      data: values
    }).then((response) => {
      saveLoginAndRedirect(response)
    })
  }
}

export function loginSocialSuccess (user) {
  return (dispatch) => {
    API.post({
      url: '/api/login/social',
      data: {
        socialToken: user.token.accessToken,
        socialUserId: user.profile.id,
        socialTokenIssuer: user.provider,
      }
    }).then((response) => {
      saveLoginAndRedirect(response)
    })
  }
}

export function loginSocialFailure (error) {
  return (dispatch) => {
    console.log(error)
  }
}
