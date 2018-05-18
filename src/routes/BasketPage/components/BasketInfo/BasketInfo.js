import React from 'react'
import PropTypes from 'prop-types'
import classes from './BasketInfo.scss'
import { formatStringToNumber } from '../../../../utils/utils'

const BasketInfo = ({ basket }) => (
  <div className={classes.wrapper}>
    <div className={classes.amount}>
      <div className={classes.amountRow}>
        <span className={classes.title}> giá tạm tính: </span>
        <span className={classes.right}> { formatStringToNumber(basket.totalOriginPrice) } </span>
      </div>
      <div className={classes.amountRow}>
        <span className={classes.title}> giảm giá: </span>
        <span className={classes.right}> { formatStringToNumber(basket.totalDiscount) } </span>
      </div>
    </div>
    <div className={classes.action}>
      <div className={classes.amountRow}>
        <span className={classes.title}> tổng thanh toán: </span>
        <span className={classes.right}> { formatStringToNumber(basket.totalSalePrice) } </span>
      </div>
      <button className={classes.btnPayment}> Thanh Toán </button>
    </div>
  </div>
)

BasketInfo.propTypes = {
  basket: PropTypes.object
}

export default BasketInfo
