import { connect } from 'react-redux'
import Login from '../components/Login'
import { submitLogin, loginSocialFailure, loginSocialSuccess } from '../module/Login'

const mapDispatchToProps = {
  submitLogin,
  loginSocialFailure,
  loginSocialSuccess
}

export default connect(null, mapDispatchToProps)(Login)
