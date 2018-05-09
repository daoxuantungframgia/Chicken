import React from 'react'
import PropTypes from 'prop-types'
import classes from './BasketInfo.scss'

const BasketInfo = ({ basket }) => (
  <div className={classes.wrapper}>
    <div className={classes.amount}>
      <div className={classes.amountRow}>
        <span> giá tạm tính: </span>
        <span className={classes.right}> { basket.totalOldAmount } </span>
      </div>
      <div className={classes.amountRow}>
        <span> giảm giá: </span>
        <span className={classes.right}> { basket.totalDiscountAmount } </span>
      </div>
    </div>
    <div className={classes.action}>
      <div className={classes.amountRow}>
        <span> tổng thanh toán: </span>
        <span className={classes.right}> { basket.totalNewAmount } </span>
      </div>
      <button className={classes.btnPayment}> Thanh Toán </button>
    </div>
  </div>
)

BasketInfo.propTypes = {
  basket: PropTypes.object
}

export default BasketInfo
