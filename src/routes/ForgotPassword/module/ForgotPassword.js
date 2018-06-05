import * as API from 'api/api'

export const forgotPassword = (values) => (dispatch) => {
  API.post({
    url: '/api/public/users/forgotPwd',
    data: values
  }).then((response) => {
    if (response) {
      dispatch(API.setNotification({
        notification: {
          success: {
            message: 'Chúng tôi đã gửi Link đổi mật khẩu tới email của bạn, Vui lòng kiểm tra email để đổi mật khẩu'
          }
        }
      }))
    }
  })
}
