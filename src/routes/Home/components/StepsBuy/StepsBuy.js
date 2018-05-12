import React from 'react'
import classNames from 'classnames'
import classes from './StepsBuy.scss'
import OrderIcon from '../../../../assets/order.png'
import CallIcon from '../../../../assets/call.png'
import DeliverIcon from '../../../../assets/deliver.png'
import ReceiveIcon from '../../../../assets/receive-and-payment.png'
import iconIntro from '../../../../assets/icon-gioithieu.png'

const StepsBuy = () => (
  <div className={classes.stepsBuyWrapper}>
    <h2 className={classes.title}> Mua hàng nhanh chóng </h2>
    <p className={classes.name}> Chỉ với một chút thời gian bạn đã có thể chọn cho mình
    những sản phẩm tốt nhất từ chúng tôi </p>
    <div className={classes.iconIntroWrapper}>
      <img src={iconIntro} alt='icon' />
    </div>
    <div className={classes.steps}>
      <div className='row'>
        <div className='col-md-3'>
          <div className={classes.step}>
            <div className={classes.icon}>
              <img src={OrderIcon} alt='icon' />
            </div>
            <p className={classes.stepText}> Bước 1 </p>
            <p className={classes.description}>
              Đặt hàng
            </p>
            <p className={classes.note}> Với trang trại rộng lớn chúng tôi cung cấp cho bạn
            sản phẩm đa dạng, được nuôi 100% tự nhiên </p>
          </div>
        </div>
        <div className='col-md-3'>
          <div className={classes.step}>
            <div className={classes.icon}>
              <img src={CallIcon} alt='icon' />
            </div>
            <p className={classNames(classes.stepText, classes.step2Text)}> Bước 2 </p>
            <p className={classes.description}>
              Xác nhận đơn hàng qua điện thoại
            </p>
            <p className={classes.note}> Với đội ngũ nhân viên nhiệt tình thân thiên, bạn sẽ nhận được cuộc
            gọi trong thời gian sớm nhất </p>
          </div>
        </div>
        <div className='col-md-3'>
          <div className={classes.step}>
            <div className={classes.icon}>
              <img src={DeliverIcon} alt='icon' />
            </div>
            <p className={classNames(classes.stepText, classes.step3Text)}> Bước 3 </p>
            <p className={classes.description}>
              Giao hàng
            </p>
            <p className={classes.note}> Với đội ngũ giao hàng nhiệt huyết bạn sẽ nhận được hàng trong
            thời gian sớm nhất </p>
          </div>
        </div>
        <div className='col-md-3'>
          <div className={classes.step}>
            <div className={classes.icon}>
              <img src={ReceiveIcon} alt='icon' />
            </div>
            <p className={classNames(classes.stepText, classes.step4Text)}> Bước 4 </p>
            <p className={classes.description}>
              Nhận hàng & Thanh toán
            </p>
            <p className={classes.note}> khi nhận hàng bạn mới phải thanh toán </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default StepsBuy
