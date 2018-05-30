import { validateEmail, validatePhoneNumber } from 'utils/validate'

export function validateRegisterForm (values) {
  const errors = {}

  if (!values.email) {
    errors.email = 'Vui lòng nhập email'
  } else if (!validateEmail(values.email)) {
    errors.email = 'Vui lòng nhập email hợp lệ'
  }

  if (!values.fullName) {
    errors.fullName = 'Vui lòng nhập tên'
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Vui lòng nhập số điện thoại'
  } else if (!validatePhoneNumber(values.phoneNumber)) {
    errors.phoneNumber = 'Vui lòng nhập số điện thoại hợp lệ'
  }

  if (!values.password) {
    errors.password = 'Vui lòng nhập mật khẩu'
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Vui lòng nhập 2 mật khâu giống nhau'
  }

  return errors
}
