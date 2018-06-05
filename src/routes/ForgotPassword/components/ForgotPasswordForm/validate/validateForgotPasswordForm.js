import { validateEmail } from 'utils/validate'

export function validateForgotPasswordForm (values) {
  let errors = {}

  if (!values.email) {
    errors.email = 'Vui lòng nhập email'
  } else if (!validateEmail(values.email)) {
    errors.email = 'Vui lòng nhập email hợp lệ'
  }

  return errors
}
