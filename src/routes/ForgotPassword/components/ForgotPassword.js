import React from 'react'
import HeaderEmpty from 'components/HeaderEmpty'
import PropTypes from 'prop-types'
import ForgotPasswordForm from './ForgotPasswordForm'
import classes from './ForgotPassword.scss'

const ForgotPassword = ({ forgotPassword }) => (
  <div className={classes.wrapper}>
    <HeaderEmpty />
    <div className={classes.forgotPasswrodForm}>
      <h2 className='text-center'> Quên mật khẩu </h2>
      <ForgotPasswordForm forgotPassword={forgotPassword} />
    </div>
  </div>
)

ForgotPassword.propTypes = {
  forgotPassword: PropTypes.func
}

export default ForgotPassword
