import React from 'react'
import PropTypes from 'prop-types'
import Menu from '../../Home/components/Menu'
import classes from './ChangePassword.scss'
import ChangePasswordForm from './ChangePasswordForm'

const ChangePassword = ({ changePassword }) => (
  <div className={classes.wrapper}>
    <Menu active='1' />
    <div className={classes.changePasswordForm}>
      <h2 className='text-center'> Thay đổi mật khẩu </h2>
      <ChangePasswordForm changePassword={changePassword} />
    </div>
  </div>
)

ChangePassword.propTypes = {
  changePassword: PropTypes.func
}

export default ChangePassword
