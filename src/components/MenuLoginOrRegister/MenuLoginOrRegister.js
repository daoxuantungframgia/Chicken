import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import classes from './MenuLoginOrRegister.scss'
import { navigateTo } from '../../utils/routing'

const navigateToLogin = () => {
  navigateTo('/login')
}

const navigateToRegister = () => {
  navigateTo('/register')
}

const MenuLoginOrRegister = ({ active }) => (
  <ul className={classes.menu}>
    <li className={classNames(classes.menuItem, active === 'register' && classes.active)}
      onClick={navigateToRegister}
    >
      <p className={classes.title}> Đăng Ký </p>
      <p className={classes.note}> (chưa có tài khoản) </p>
    </li>
    <li className={classNames(classes.menuItem, active === 'login' && classes.active)}
      onClick={navigateToLogin}
    >
      <p className={classes.title}> Đăng nhập </p>
      <p className={classes.note}> (đã có tài khoản) </p>
    </li>
  </ul>
)

MenuLoginOrRegister.propTypes = {
  active: PropTypes.string
}

export default MenuLoginOrRegister
