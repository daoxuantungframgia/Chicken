import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field, reduxForm } from 'redux-form'
import classes from './RegisterForm.scss'
import TextField from '../../../../components/TextField'
import { validateRegisterForm } from './validate/RegisterFormValidate'

const RegisterForm = ({ handleSubmit, submitRegister }) => (
  <Form onSubmit={handleSubmit(submitRegister)} className={classes.registerForm}>
    <div className='row'>
      <div className='col-xs-12 col-md-6'>
        <Field name='email'
          component={TextField}
          type='text'
          label='email'
        />
        <Field name='password'
          component={TextField}
          type='password'
          label='Mật Khẩu'
        />
        <Field name='confirmPassword'
          component={TextField}
          type='password'
          label='Nhập lại mật khẩu'
        />
      </div>
      <div className='col-xs-12 col-md-6'>
        <Field name='fullName'
          component={TextField}
          type='text'
          label='Họ và tên'
        />
        <Field name='phoneNumber'
          component={TextField}
          type='number'
          label='Số điện thoại'
        />
      </div>
    </div>
    <button className={classes.btnRegister}> Đăng Ký </button>
  </Form>
)

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitRegister: PropTypes.func
}

export default reduxForm({
  form: 'registerForm',
  validate: validateRegisterForm,
})(RegisterForm)
