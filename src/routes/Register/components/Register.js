import React from 'react'
import PropTypes from 'prop-types'
import Step from 'components/Step'
import classes from './Register.scss'
import Menu from '../../Home/components/Menu'
import MenuLoginOrRegister from '../../../components/MenuLoginOrRegister'
import LoginOrRegisterFacebookAndGoogle from '../../../components/LoginOrRegisterFacebookAndGoogle'
import RegisterForm from './RegisterForm'

const Register = ({ submitRegister, loginSocialSuccess, loginSocialFailure }) => (
  <div className={classes.wrapper}>
    <Menu active='1' />
    <Step step={1} />
    <div className={classes.registerContent}>
      <MenuLoginOrRegister active='register' />
      <LoginOrRegisterFacebookAndGoogle label='Đăng ký tài khoản với'
        onLoginSuccess={loginSocialSuccess}
        onLoginFailure={loginSocialFailure}
      />
      <RegisterForm submitRegister={submitRegister} />
    </div>
  </div>
)

Register.propTypes = {
  submitRegister: PropTypes.func,
  loginSocialSuccess: PropTypes.func,
  loginSocialFailure: PropTypes.func
}

export default Register
