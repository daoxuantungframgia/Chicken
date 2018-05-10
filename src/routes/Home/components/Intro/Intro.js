import React from 'react'
import homepageBackground1 from '../../../../assets/homepage-background-1.jpg'
import classes from './Intro.scss'

const Intro = () => (
  <div className={classes.container}>
    <h2 className={classes.title}> Giới thiệu về chúng tôi </h2>
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
  </div>
)

export default Intro
