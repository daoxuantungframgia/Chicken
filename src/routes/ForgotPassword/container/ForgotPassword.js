import { connect } from 'react-redux'
import ForgotPassword from '../components/ForgotPassword'
import { forgotPassword } from '../module/ForgotPassword'

const mapDispatchToProps = {
  forgotPassword
}

export default connect(null, mapDispatchToProps)(ForgotPassword)
