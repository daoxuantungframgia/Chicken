import React from 'react'
import PropTypes from 'prop-types'
import SocialButton from 'components/SocialButton'
import classes from './LoginOrRegisterFacebookAndGoogle.scss'
import facebookButton from '../../assets/facebook-logo-button.svg'
import googleButton from '../../assets/google-logo-button.svg'

const LoginOrRegisterFacebookAndGoogle = ({ label, onLoginSuccess, onLoginFailure }) => (
  <div className={classes.wrapper}>
    <span className={classes.label}> {label} </span>
    <SocialButton
      provider='facebook'
      appId='1884361681797600'
      onLoginSuccess={onLoginSuccess}
      onLoginFailure={onLoginFailure}
    >
      <img className={classes.facebookButton} src={facebookButton} alt='facebook' />
    </SocialButton>
    <SocialButton
      provider='google'
      appId='650390711742-v8emv33rq08ojro9aqc38k0pufb3o4ok.apps.googleusercontent.com'
      onLoginSuccess={onLoginSuccess}
      onLoginFailure={onLoginFailure}
    >
      <img src={googleButton} alt='google' />
    </SocialButton>
  </div>
)

LoginOrRegisterFacebookAndGoogle.propTypes = {
  label: PropTypes.string,
  onLoginSuccess: PropTypes.func,
  onLoginFailure: PropTypes.func
}

export default LoginOrRegisterFacebookAndGoogle
