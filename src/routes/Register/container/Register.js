import { connect } from 'react-redux'
import { submitRegister } from '../module/Register'
import Register from '../components/Register'

const mapDispatchToProps = {
  submitRegister
}

export default connect(null, mapDispatchToProps)(Register)
