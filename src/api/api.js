import axios from 'axios'
import { store } from '../main'
import { getUser } from 'utils/storage'
import { navigateTo } from 'utils/routing'

const LOADING = 'LOADING'
const NOTIFICATION = 'NOTIFICATION'

const instance = axios.create({
  baseURL: 'http://localhost:8888/ServeBackend',
  timeout: 15000,
})

const setLoading = (loading) => (dispatch) => {
  dispatch({
    type: LOADING,
    loading
  })
}

export const setNotification = ({ notification, time = 3000 }) => (dispatch) => {
  dispatch({
    type: NOTIFICATION,
    notification
  })

  setTimeout(() => {
    dispatch({
      type: NOTIFICATION,
      notification: null,
    })
  }, time)
}

const handleError = (error) => (dispatch) => {
  const errorMessage = error && error.response && error.response.data && error.response.data.devMessage
  const notification = {
    error: { message: 'có lỗi trên hệ thống, vui lòng thử lại' }
  }
  if (error.code === 'ECONNABORTED') {
    notification.error.message = 'yêu cầu của bạn bị hết hạn do hết thời gian'
  } else if (errorMessage) {
    notification.error.message = errorMessage
  } else if (error.status === 401) {
    notification.error.message = 'Bạn cần đăng nhập lại để sử dụng dịch vụ'
    navigateTo('/login')
  }

  dispatch(setNotification({ notification }))
}

const sendRequest = ({ url, method, params, data }) => {
  store.dispatch(setLoading(true))
  const user = getUser()
  const token = user && user.token
  return instance({
    url,
    method,
    params,
    data,
    headers: {
      'Content-Type': 'application/json',
      'authorization' : token
    }
  }).then((response) => {
    store.dispatch(setLoading(false))
    return response.data
  }).catch((error) => {
    store.dispatch(setLoading(false))
    store.dispatch(handleError(error))
  })
}

export const get = ({ url, params }) => (
  sendRequest({ url, params, method: 'GET' })
)

export const post = ({ url, params, data }) => (
  sendRequest({ url, params, data, method: 'POST' })
)

export const put = ({ url, params, data }) => (
  sendRequest({ url, params, data, method: 'PUT' })
)

export const deleteData = ({ url, params, data }) => (
  sendRequest({ url, params, data, method: 'DELETE' })
)

const INITIAL_STATE = {
  loading: false,
  notification: null,
}

const ACTION_HANDLER = {
  [LOADING]: (state, action) => ({ ...state, loading: action.loading }),
  [NOTIFICATION]: (state, action) => ({ ...state, notification: action.notification })
}

export default function apiReducers (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLER[action.type]
  return handler ? handler(state, action) : state
}
