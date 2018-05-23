import { connect } from 'react-redux'
import { submitAddress } from '../module/SelectAddress'
import SelectAddress from '../components/SelectAddress'

const mapDispatchToProps = {
  submitAddress
}

export default connect(null, mapDispatchToProps)(SelectAddress)
