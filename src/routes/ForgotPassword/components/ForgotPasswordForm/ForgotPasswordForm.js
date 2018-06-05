import React from 'react'
import { Form, Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import TextField from 'components/TextField'
import { validateForgotPasswordForm } from './validate/validateForgotPasswordForm'
import classes from './ForgotPasswordForm.scss'

const ForgotPasswordForm = ({ handleSubmit, forgotPassword }) => (
  <Form onSubmit={handleSubmit(forgotPassword)}>
    <Field
      name='email'
      component={TextField}
      label='Email'
      placeholder='Vui lòng nhập email'
      type='text'
    />
    <button className={classes.btnForgotPassword}> Quên mật khẩu </button>
  </Form>
)

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func,
  forgotPassword: PropTypes.func
}

export default reduxForm({
  form: 'forgotPasswordForm',
  validate: validateForgotPasswordForm
})(ForgotPasswordForm)
