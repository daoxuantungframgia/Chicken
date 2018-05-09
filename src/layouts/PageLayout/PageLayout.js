import React from 'react'
import PropTypes from 'prop-types'
import classes from './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className={classes.container}>
    <div>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
