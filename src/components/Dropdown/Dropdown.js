import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { clearData } from 'utils/storage'
import classes from './Dropdown.scss'
import { navigateTo } from 'utils/routing'

const logout = () => {
  clearData()
  navigateTo('/login')
}

const Dropdown = ({ user }) => (
  <div className={classNames(classes.wrapper, 'dropdown')}>
    <span id='dropdownMenu' data-toggle='dropdown' > Chào.
      <strong> {user.fullName} </strong>
      <span className='glyphicon glyphicon-menu-down' />
    </span>
    <ul className={classNames('dropdown-menu', classes.dropdownMenu)} aria-labelledby='dropdownMenu'>
      <li><a href='#' onClick={logout}>Thoát</a></li>
    </ul>
  </div>
)

Dropdown.propTypes = {
  user: PropTypes.object
}

export default Dropdown
