import React from 'react'
import PropTypes from 'prop-types'
import classes from './Login.scss'
import Menu from '../../Home/components/Menu'
import LoginForm from './LoginForm'
import MenuLoginOrRegister from '../../../components/MenuLoginOrRegister'
import LoginOrRegisterFacebookAndGoogle from '../../../components/LoginOrRegisterFacebookAndGoogle'

const Login = ({ submitLogin }) => (
  <div className={classes.wrapper}>
    <Menu active='1' />
    <div className={classes.loginContent}>
      <MenuLoginOrRegister active='login' />
      <LoginOrRegisterFacebookAndGoogle label='Đăng nhập bằng tài khoản: ' />
      <LoginForm submitLogin={submitLogin} />
    </div>
  </div>
)

Login.propTypes = {
  submitLogin: PropTypes.func
}

export default Login
