import { connect } from 'react-redux'
import ChangePassword from '../components/ChangePassword'
import { changePassword } from '../module/ChangePassword'

const mapDispatchToProps = {
  changePassword
}

export default connect(null, mapDispatchToProps)(ChangePassword)
