import { connect } from 'react-redux'
import { getAddresses, selectAddress, updateAddress, deleteAddress } from '../module/SelectAddress'
import SelectAddress from '../components/SelectAddress'

const mapStateToProps = (state) => ({
  addresses: state.selectAddress.addresses,
  selectedAddress: state.selectAddress.selectedAddress
})

const mapDispatchToProps = {
  getAddresses,
  selectAddress,
  updateAddress,
  deleteAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectAddress)
