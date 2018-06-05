import { validateEmail } from 'utils/validate'

export function validateChangeForgotPasswordForm (values) {
  let errors = {}

  if (!values.email) {
    errors.email = 'Vui lòng nhập email'
  } else if (!validateEmail(values.email)) {
    errors.email = 'Vui lòng nhập email chính xác'
  }

  if (!values.password) {
    errors.password = 'Vui lòng nhập password'
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Vui lòng nhập 2 mật khẩu giống nhau'
  }

  return errors
}
