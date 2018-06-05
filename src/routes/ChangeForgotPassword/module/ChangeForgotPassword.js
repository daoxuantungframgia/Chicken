import * as API from 'api/api'
import { navigateTo } from 'utils/routing'

export const changeForgotPassword = (values) => (dispatch) => {
  API.post({
    url: '/api/public/users/changePwd',
    data: values
  }).then((response) => {
    if (response) {
      dispatch(API.setNotification({
        notification: {
          success: {
            message: 'Bạn đã thay đổi mật khẩu thành công'
          }
        }
      }))
      navigateTo('/login')
    }
  })
}
