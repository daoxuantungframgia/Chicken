import React from 'react'
import { Form, Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import TextField from 'components/TextField'
import { validateChangePasswordForm } from './validate/ValidateChangePasswordForm'
import classes from './ChangePasswordForm.scss'

const ChangePasswordForm = ({ handleSubmit, changePassword }) => (
  <Form onSubmit={handleSubmit(changePassword)}>
    <Field
      name='oldPassword'
      component={TextField}
      label='Mật khẩu cũ'
      placeholder='Mật khẩu cũ'
      type='password'
    />

    <Field
      name='newPassword'
      component={TextField}
      label='Mật khẩu mới'
      placeholder='Mật khẩu mới'
      type='password'
    />

    <Field
      name='confirmNewPassword'
      component={TextField}
      label='Nhập lại mật khẩu mới'
      placeholder='Nhập lại mật khẩu mới'
      type='password'
    />

    <button className={classes.btnChangePassword}> Thay đổi mật khẩu </button>
  </Form>
)

ChangePasswordForm.propTypes = {
  handleSubmit: PropTypes.func,
  changePassword: PropTypes.func
}

export default reduxForm({
  form: 'changePasswordForm',
  validate: validateChangePasswordForm
})(ChangePasswordForm)
