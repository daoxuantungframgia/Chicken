import React from 'react'
import homepageBackground1 from '../../../../assets/homepage-background-1.jpg'
import iconIntro from '../../../../assets/icon-gioithieu.png'
import classes from './Intro.scss'

const Intro = () => (
  <div className={classes.container}>
    <h2 className={classes.title}> Giới thiệu về chúng tôi </h2>
    <p className={classes.name}> Trang trại gà sạch </p>
    <div className={classes.iconIntroWrapper}>
      <img src={iconIntro} alt='icon' />
    </div>
    <div className='row'>
      <div className='col-xs-12 col-md-6'>
        <div className={classes.banner}>
          <img src={homepageBackground1} alt='background' />
        </div>
      </div>
      <div className='col-xs-12 col-md-6'>
        <p className={classes.titleText}>
          giới thiệu
          <br />
          về <span> chúng tôi </span>
        </p>
        <p className={classes.description}>
          Chúng tôi tâm niệm rằng, để tạo ra được một sản phẩm tốt không thể thiếu đó là lòng đam mê.
          Bởi vậy, chúng tôi luôn đặt phương châm tạo ra một sản phẩm sạch là số 1. Với diện tích trang trại
          rộng lớn với kinh nghiệm lâu năm, cùng sự tân tâm trong nghề, chúng tôi tin rằng các sản phẩm của
          chúng tôi sẽ được thị trường đón nhận".
        </p>
      </div>
    </div>
  </div>
)

export default Intro
