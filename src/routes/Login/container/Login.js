import { connect } from 'react-redux'
import Login from '../components/Login'
import { submitLogin } from '../module/Login'

const mapDispatchToProps = {
  submitLogin
}

export default connect(null, mapDispatchToProps)(Login)
