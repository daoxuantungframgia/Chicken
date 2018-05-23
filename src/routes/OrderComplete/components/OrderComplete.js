import React from 'react'
import classes from './OrderComplete.scss'
import Menu from '../../Home/components/Menu'
import successIcon from '../../../assets/success.png'

const OrderComplete = () => (
  <div className={classes.wrapper}>
    <Menu active='1' />
    <div className={classes.orderCompleteContent}>
      <div className={classes.imgWrapper}>
        <img src={successIcon} />
      </div>
      <p className={classes.text}>Chúc mừng bạn đã đặt hàng thành công, cảm ơn bạn vì đã tin tưởng và sử dụng sản phâm của chúng
        tôi. Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhât để xác nhận đơn hàng.
      </p>
    </div>
  </div>
)

export default OrderComplete
