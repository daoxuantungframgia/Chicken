import React from 'react'
import socialLogin from 'react-social-login'
import PropTypes from 'prop-types'
import classes from './SocialButton.scss'

const SocialButton = ({ children, triggerLogin, ...props }) => (
  <button onClick={triggerLogin}
    {...props}
    className={classes.btnSocialLogin}
  >
    { children }
  </button>
)

SocialButton.propTypes = {
  children: PropTypes.object,
  triggerLogin: PropTypes.func,
}

export default socialLogin(SocialButton)
