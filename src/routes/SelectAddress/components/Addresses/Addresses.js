import React from 'react'
import PropTypes from 'prop-types'
import classes from './Addresses.scss'
import Address from './Address'

const Addresses = ({ addresses, selectedAddress, selectAddress, updateAddress, deleteAddress }) => (
  <div className={classes.wrapper}>
    <div className='row'>
      { addresses && addresses.map((address) => (
        <div className='col-xs-12 col-md-4' key={address.userProfileId}>
          <Address address={address}
            selectAddress={selectAddress}
            selectedAddress={selectedAddress}
            updateAddress={updateAddress}
            deleteAddress={deleteAddress}
          />
        </div>
      )) }
    </div>
  </div>
)

Addresses.propTypes = {
  addresses: PropTypes.array,
  selectedAddress: PropTypes.object,
  selectAddress: PropTypes.func,
  updateAddress: PropTypes.func,
  deleteAddress: PropTypes.func
}

export default Addresses
