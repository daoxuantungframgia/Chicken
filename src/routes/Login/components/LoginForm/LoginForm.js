import React from 'react'
import { Form, reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'
import classes from './LoginForm.scss'
import TextField from '../../../../components/TextField'

const LoginForm = ({ handleSubmit, submitLogin }) => (
  <Form onSubmit={handleSubmit(submitLogin)} className={classes.loginForm}>
    <Field name='username'
      component={TextField}
      type='text'
      label='Tên Đăng Nhập'
    />

    <Field name='password'
      component={TextField}
      type='password'
      label='Mật Khẩu'
    />

    <button className={classes.btnLogin}> Đăng Nhập </button>
  </Form>
)

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitLogin: PropTypes.func
}

export default reduxForm({
  form: 'LoginForm'
})(LoginForm)
