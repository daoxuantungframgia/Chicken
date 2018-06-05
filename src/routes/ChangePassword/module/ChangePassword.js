import * as API from 'api/api'

export const changePassword = (values) => (dispatch) => {
  API.post({
    url: '/api/private/change-password',
    data: values
  }).then(response => {
    if (response) {
      dispatch(API.setNotification({
        notification: {
          success: {
            message: 'Bạn đã thay đổi mật khẩu thành công'
          }
        }
      }))
    }
  })
}
