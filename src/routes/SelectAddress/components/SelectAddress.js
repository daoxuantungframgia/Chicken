import React from 'react'
import PropTypes from 'prop-types'
import Step from 'components/Step'
import classNames from 'classnames'
import classes from './SelectAddress.scss'
import Menu from '../../Home/components/Menu'
import Addresses from './Addresses'
import AddAddress from './AddAddress'

export default class SelectAddress extends React.Component {

  state = {
    showAddAddress: false
  }

  componentDidMount () {
    this.props.getAddresses()
  }

  showOrCloseAddAddress = (showAddAddress) => () => {
    this.setState({
      showAddAddress
    })
  }

  addAddress = (address) => {
    this.props.updateAddress(address).then(() => {
      this.showOrCloseAddAddress(false)()
    })
  }

  render () {
    const { addresses, selectedAddress, selectAddress, updateAddress, deleteAddress } = this.props
    const { showAddAddress } = this.state
    return (
      <div className={classes.wrapper}>
        <Menu active='1' />
        <Step step={2} />
        <div className={classes.selectAddressContent}>
          <div className={classes.btnWrapper}>
            <button className={classes.btnPayment}> Thanh toán </button>
            <button className={classes.addNewAddress}
              onClick={this.showOrCloseAddAddress(true)}
            > Thêm địa chỉ mới </button>
          </div>
          <h2 className={classNames('text-center', classes.title)}> Lựa chọn địa chỉ </h2>
          <Addresses addresses={addresses}
            selectedAddress={selectedAddress}
            selectAddress={selectAddress}
            updateAddress={updateAddress}
            deleteAddress={deleteAddress}
          />
        </div>
        <AddAddress showAddAddress={showAddAddress}
          handleCloseAddAddress={this.showOrCloseAddAddress(false)}
          addAddress={this.addAddress}
        />
      </div>
    )
  }
}

SelectAddress.propTypes = {
  getAddresses: PropTypes.func,
  addresses: PropTypes.array,
  selectedAddress: PropTypes.object,
  updateAddress: PropTypes.func,
  selectAddress: PropTypes.func,
  deleteAddress: PropTypes.func
}
