import React, { Component } from 'react'
import { Form, Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import TextField from 'components/TextField'
import { validateChangeForgotPasswordForm } from './validate/ValidateChangeForgotPasswordForm'
import classes from './ChangeForgotPasswordForm.scss'

class ChangeForgotPasswordForm extends Component {
  constructor (props) {
    super(props)
    const query = props.location.query
    if (query) {
      props.initialize(query)
    }
  }

  render () {
    const { handleSubmit, changeForgotPassword } = this.props
    return (
      <Form onSubmit={handleSubmit(changeForgotPassword)}>
        <Field
          name='email'
          component={TextField}
          label='Email'
          type='text'
          placeholder='Vui lòng nhập email'
        />

        <Field
          name='password'
          component={TextField}
          label='Mật Khẩu'
          placeholder='nhập mật khẩu mới'
          type='password'
        />

        <Field
          name='confirmPassword'
          component={TextField}
          label='Nhắc lại mật khẩu'
          placeholder='Nhập lại mật khẩu'
          type='password'
        />

        <button className={classes.btnChangePassword}> Đổi mật khẩu </button>
      </Form>
    )
  }
}

ChangeForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func,
  changeForgotPassword: PropTypes.func,
  location: PropTypes.object,
  initialize: PropTypes.func
}

export default reduxForm({
  form: 'changeForgotPaswordForm',
  validate: validateChangeForgotPasswordForm
})(ChangeForgotPasswordForm)
