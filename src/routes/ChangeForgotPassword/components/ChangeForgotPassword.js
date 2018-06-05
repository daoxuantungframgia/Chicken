import React from 'react'
import HeaderEmpty from 'components/HeaderEmpty'
import PropTypes from 'prop-types'
import classes from './ChangeForgotPassword.scss'
import ChangeForgotPasswordForm from './ChangeForgotPasswordForm'

const ChangeForgotPassword = ({ changeForgotPassword, location }) => (
  <div className={classes.wrapper}>
    <HeaderEmpty />
    <div className={classes.changeForgotPasswordForm}>
      <h2 className='text-center'> Thay đổi mật khẩu </h2>
      <ChangeForgotPasswordForm
        changeForgotPassword={changeForgotPassword}
        location={location}
      />
    </div>
  </div>
)

ChangeForgotPassword.propTypes = {
  changeForgotPassword: PropTypes.func,
  location: PropTypes.object
}

export default ChangeForgotPassword
