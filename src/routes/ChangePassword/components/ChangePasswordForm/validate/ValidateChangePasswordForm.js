export function validateChangePasswordForm (values) {
  let errors = {}
  if (!values.oldPassword) {
    errors.oldPassword = 'Vui lòng nhập mật khẩu cũ'
  }

  if (!values.newPassword) {
    errors.newPassword = 'Vui lòng nhập mật khẩu mới'
  } else if (values.newPassword !== values.confirmNewPassword) {
    errors.confirmNewPassword = 'Vui lòng nhập mật khẩu mới giống nhau'
  }

  return errors
}
