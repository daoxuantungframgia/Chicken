import React from 'react'
import PropTypes from 'prop-types'
import classes from './PageLayout.scss'
import Footer from '../../components/Footer'
import Notification from '../../components/Notification'
import loadingImage from '../../assets/loading.gif'

export const PageLayout = ({ children, loading, notification }) => (
  <div className={classes.container}>
    { loading &&
      <div className={classes.loading}>
        <img src={loadingImage} alt='loading' />
      </div>
    }
    {
      notification &&
      <div className={classes.notification}>
        <Notification notification={notification} />
      </div>
    }
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
  loading: PropTypes.bool,
  notification: PropTypes.object
}

export default PageLayout
