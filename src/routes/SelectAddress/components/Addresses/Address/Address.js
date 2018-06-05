import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import classes from './Address.scss'

export default class Address extends Component {
  state = {
    addressText: this.props.address.address
  }

  handleChange = (event) => {
    this.setState({
      addressText: event.target.value
    })
  }

  handleSelectAddress = () => {
    const { address, selectAddress } = this.props
    selectAddress(address)
  }

  handleUpdateAddress = () => {
    const { address, updateAddress } = this.props
    updateAddress({
      ...address,
      address: this.state.addressText
    })
  }

  handleDeleteAddress = () => {
    const { deleteAddress, address } = this.props
    deleteAddress(address)
  }

  render () {
    const { addressText } = this.state
    const { deleteAddress, selectedAddress, address } = this.props
    return (
      <div className={classes.wrapper}>
        <p> Địa chỉ chi tiết </p>
        <textarea value={addressText}
          onChange={this.handleChange}
          className={classNames('form-control')}
          rows={4}
        />
        <div className={classes.action}>
          <div className={classNames(classes.selectedAddress,
            selectedAddress && selectedAddress.userProfileId === address.userProfileId && classes.active)}
            onClick={this.handleSelectAddress}
          >
            chọn địa chỉ này
          </div>
          <div className={classes.actionAddress}>
            <button className={
              classNames(classes.edit, 'btn btn-default')
            }
              onClick={this.handleUpdateAddress}
            >
              Sửa
            </button>
            <span className={classNames('glyphicon glyphicon-trash', classes.delete)}
              onClick={deleteAddress}
            />
          </div>
        </div>
      </div>
    )
  }
}

Address.propTypes = {
  address: PropTypes.object,
  selectedAddress: PropTypes.object,
  selectAddress: PropTypes.func,
  updateAddress: PropTypes.func,
  deleteAddress: PropTypes.func
}
