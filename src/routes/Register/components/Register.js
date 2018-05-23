import React from 'react'
import PropTypes from 'prop-types'
import classes from './Register.scss'
import Menu from '../../Home/components/Menu'
import MenuLoginOrRegister from '../../../components/MenuLoginOrRegister'
import LoginOrRegisterFacebookAndGoogle from '../../../components/LoginOrRegisterFacebookAndGoogle'
import RegisterForm from './RegisterForm'

const Register = ({ submitRegister }) => (
  <div className={classes.wrapper}>
    <Menu active='1' />
    <div className={classes.registerContent}>
      <MenuLoginOrRegister active='register' />
      <LoginOrRegisterFacebookAndGoogle label='Đăng ký tài khoản với' />
      <RegisterForm submitRegister={submitRegister} />
    </div>
  </div>
)

Register.propTypes = {
  submitRegister: PropTypes.func
}

export default Register
