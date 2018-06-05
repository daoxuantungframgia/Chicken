import React from 'react'
import PropTypes from 'prop-types'
import Step from 'components/Step'
import { navigateTo } from 'utils/routing'
import { isLoginFromBasket } from 'utils/storage'
import classes from './Login.scss'
import Menu from '../../Home/components/Menu'
import LoginForm from './LoginForm'
import MenuLoginOrRegister from '../../../components/MenuLoginOrRegister'
import LoginOrRegisterFacebookAndGoogle from '../../../components/LoginOrRegisterFacebookAndGoogle'

const gotoForgotPassword = () => {
  navigateTo('/forgot-password')
}

const Login = ({ submitLogin, loginSocialFailure, loginSocialSuccess }) => (
  <div className={classes.wrapper}>
    <Menu active='1' />
    {isLoginFromBasket() && <Step step={1} />}
    <div className={classes.loginContent}>
      <MenuLoginOrRegister active='login' />
      <LoginOrRegisterFacebookAndGoogle label='Đăng nhập bằng tài khoản: '
        onLoginFailure={loginSocialFailure}
        onLoginSuccess={loginSocialSuccess}
      />
      <LoginForm submitLogin={submitLogin} />
      <a onClick={gotoForgotPassword} className={classes.forgotPasswordLink}> Quên mật khẩu? </a>
    </div>
  </div>
)

Login.propTypes = {
  submitLogin: PropTypes.func,
  loginSocialSuccess: PropTypes.func,
  loginSocialFailure: PropTypes.func
}

export default Login
