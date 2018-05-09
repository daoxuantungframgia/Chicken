import React from 'react'
import homepageBackground1 from '../../../../assets/homepage-background-1.jpg'
import classes from './Intro.scss'

const Intro = () => (
  <div className={classes.container}>
    <div className={classes.banner}>
      <img src={homepageBackground1} alt='background' />
    </div>
    <p className={classes.intro}> Trang trại gà thả vườn Ông Tâm nhận cung cấp sỉ, lẻ các loại thịt gà,
      trứng gà cho các cửa hàng, tiệc cưới,...Ngoài ra chúng tôi còn cung cấp gà con giống, trứng gà
      giống cho bà con trên khắp cả nước (giá gà giống, gia sư hà nội, HCM biến động). Mọi chi tiết xin
      liên hệ: Ông Tâm 0987.006.558 hoặc  Bà Phượng 0167.467.1391 để biết thông tin chi tiết nhé! </p>
  </div>
)

export default Intro
