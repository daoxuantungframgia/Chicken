import { connect } from 'react-redux'
import { submitRegister, loginSocialFailure, loginSocialSuccess } from '../module/Register'
import Register from '../components/Register'

const mapDispatchToProps = {
  submitRegister,
  loginSocialSuccess,
  loginSocialFailure
}

export default connect(null, mapDispatchToProps)(Register)
