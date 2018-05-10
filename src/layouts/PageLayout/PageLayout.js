import React from 'react'
import PropTypes from 'prop-types'
import classes from './PageLayout.scss'
import Footer from '../../components/Footer'

export const PageLayout = ({ children }) => (
  <div className={classes.container}>
    <div className={classes.content}>
      {children}
    </div>
    <div className={classes.footer}>
      <Footer />
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
