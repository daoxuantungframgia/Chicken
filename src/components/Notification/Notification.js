import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import classes from './Notification.scss'

const Notification = ({ notification }) => (
  <div className={classes.notification}>
    {notification.error && <p className={classNames('alert alert-danger')}> {notification.error.message} </p> }
    {notification.success && <p className={classNames('alert alert-success')}> {notification.success.message} </p> }
  </div>
)

Notification.propTypes = {
  notification: PropTypes.object
}

export default Notification
