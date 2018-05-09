import React from 'react'
import homepageBackground1 from '../../../../assets/homepage-background-1.jpg'
import classes from './Intro.scss'

const Intro = () => (
  <div className={classes.container}>
    <h2> Giới thiệu về chúng tôi </h2>
    <div className='row'>
      <div className='col-xs-12 col-md-6'>
        <div className={classes.banner}>
          <img src={homepageBackground1} alt='background' />
        </div>
      </div>
      <div className='col-xs-12 col-md-6'>
        <p className={classes.intro}> Đa dạng về sản phẩm </p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xs-12 col-md-6'>
        <p className={classes.intro}> Chất Lượng hoàn toàn sạch được nuôi 100% tự nhiên không
        có chất tăng trọng </p>
      </div>
      <div className='col-xs-12 col-md-6'>
        <div className={classes.banner}>
          <img src={homepageBackground1} alt='background' />
        </div>
      </div>
    </div>
    <div className='row'>
      <div className='col-xs-12 col-md-6'>
        <div className={classes.banner}>
          <img src={homepageBackground1} alt='background' />
        </div>
      </div>
      <div className='col-xs-12 col-md-6'>
        <p className={classes.intro}> hệ thống trang trại lớn. với quy mô hơn 10 hec-ta sẽ cho giá thành
        cạnh tranh nhất trên thị trường </p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xs-12 col-md-6'>
        <p className={classes.intro}> Trang trại gà thả vườn Ông Tâm nhận cung cấp sỉ, lẻ các loại thịt
         gà, trứng gà cho các cửa hàng, tiệc cưới,...Ngoài ra chúng tôi còn cung cấp gà con giống,
         trứng gà giống cho bà con trên khắp cả nước (giá gà giống, gia sư hà nội, HCM biến động).
         Mọi chi tiết xin liên hệ: Ông Tâm 0987.006.558 hoặc Bà Phượng 0167.467.1391 để biết thông
         tin chi tiết nhé! </p>
      </div>
      <div className='col-xs-12 col-md-6'>
        <div className={classes.banner}>
          <img src={homepageBackground1} alt='background' />
        </div>
      </div>
    </div>
  </div>
)

export default Intro
