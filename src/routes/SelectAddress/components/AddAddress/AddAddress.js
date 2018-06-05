import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { getUser } from 'utils/storage'
import classes from './AddAddress.scss'

export default class AddAddress extends Component {

  state = {
    address: ''
  }

  handleChange = (event) => {
    this.setState({
      address: event.target.value
    })
  }

  addAddress = () => {
    this.props.addAddress({
      address: this.state.address,
      usersId: getUser().userId
    })
  }

  render () {
    const { address } = this.state
    const { showAddAddress, handleCloseAddAddress } = this.props
    return (
      <Modal show={showAddAddress} onHide={handleCloseAddAddress}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className='text-center'> Thêm địa chỉ </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Địa chỉ chi tiết </p>
          <textarea
            onChange={this.handleChange}
            placeholder='Nhập địa chỉ chi tiết'
            className={'form-control'}
            rows={4}
            value={address}
          />
          <button className={classes.bntAddNew}
            onClick={this.addAddress}
          > Thêm địa chỉ </button>
        </Modal.Body>
      </Modal>
    )
  }
}

AddAddress.propTypes = {
  showAddAddress: PropTypes.bool,
  handleCloseAddAddress: PropTypes.func,
  addAddress: PropTypes.func
}
