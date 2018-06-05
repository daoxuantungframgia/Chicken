import { connect } from 'react-redux'
import ChangeForgotPassword from '../components/ChangeForgotPassword'
import { changeForgotPassword } from '../module/ChangeForgotPassword'

const mapDispatchToProps = {
  changeForgotPassword
}

export default connect(null, mapDispatchToProps)(ChangeForgotPassword)
