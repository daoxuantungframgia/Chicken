import React from 'react'
import PropTypes from 'prop-types'
import classes from './SelectAddress.scss'
import Menu from '../../Home/components/Menu'
import SelectAddressForm from './SelectAddressForm'

const SelectAddress = ({ submitAddress }) => (
  <div className={classes.wrapper}>
    <Menu active='1' />
    <div className={classes.selectAddressContent}>
      <p className={classes.title}> Nhập địa chỉ nhận hàng </p>
      <SelectAddressForm submitAddress={submitAddress} />
    </div>
  </div>
)

SelectAddress.propTypes = {
  submitAddress: PropTypes.func
}

export default SelectAddress
