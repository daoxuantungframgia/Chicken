import React from 'react'
import PropTypes from 'prop-types'
import classes from './PageLayout.scss'
import Footer from '../../components/Footer'
import Notification from '../../components/Notification'
import loadingImage from '../../assets/loading.gif'
import iconCall from '../../assets/icon-call.png'
import iconPhone from '../../assets/icon-phone.png'

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
    <div className={classes.callWrapper}>
      <img src={iconCall} alt='icon-call' />
      <ul className={classes.listPhone}>
        <li className={classes.listPhoneItem}>
          <img src={iconPhone} alt='icon-phone' className={classes.phoneIcon} />
          <div className={classes.phone}>
            <p> Tổng đài hỗ trợ </p>
            <p className={classes.phoneNumber}> 01632xxxxxx </p>
          </div>
        </li>
        <li className={classes.listPhoneItem}>
          <img src={iconPhone} alt='icon-phone' className={classes.phoneIcon} />
          <div className={classes.phone}>
            <p> Số điện thoại đại lý </p>
            <p className={classes.phoneNumber}> 01632xxxxxx </p>
          </div>
        </li>
      </ul>
    </div>
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
