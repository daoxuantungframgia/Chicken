import React from 'react'
import PropTypes from 'prop-types'
import classes from './LoginOrRegisterFacebookAndGoogle.scss'
import facebookButton from '../../assets/facebook-logo-button.svg'
import googleButton from '../../assets/google-logo-button.svg'

const LoginOrRegisterFacebookAndGoogle = ({ label }) => (
  <div className={classes.wrapper}>
    <span className={classes.label}> {label} </span>
    <img className={classes.facebookButton} src={facebookButton} alt='facebook' />
    <img src={googleButton} alt='google' />
  </div>
)

LoginOrRegisterFacebookAndGoogle.propTypes = {
  label: PropTypes.string
}

export default LoginOrRegisterFacebookAndGoogle
