import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import HomeIcon from '../../../../assets/home-icon.png'
import classes from './Menu.scss'
import { navigateTo } from '../../../../utils/routing'

const navigateToHomePage = () => {
  navigateTo('/')
}

const navigateToBasket = () => {
  navigateTo('/basket')
}

const scrollOrNavigate = (scrollTo, active) => () => {
  if (scrollTo) {
    scrollTo(active)(0)
  } else {
    navigateTo(`/?active=${active}`)
  }
}

const Menu = ({ scrollTo, active }) => (
  <div className={classNames(classes.menuWrapper, active && classes.bgWhite)}>
    <div className={classes.logo} onClick={navigateToHomePage}>
      <img src={HomeIcon} alt='home-icon' />
    </div>
    <ul className={classes.menu}>
      <li className={classNames(classes.menuItem, active === 'introWe' && classes.active)}
        onClick={scrollOrNavigate(scrollTo, 'introWe')}
      >
        <a> Giới thiệu về chúng tôi </a>
      </li>
      <li className={classNames(classes.menuItem, active === 'chicken' && classes.active)}
        onClick={scrollOrNavigate(scrollTo, 'chicken')}
      >
        <a> Thịt gà sạch </a>
      </li>
      <li className={classNames(classes.menuItem, active === 'age' && classes.active)}
        onClick={scrollOrNavigate(scrollTo, 'age')}
      >
        <a> Trứng gà sạch </a>
      </li>
      <li className={classNames(classes.menuItem, active === 'breed' && classes.active)}
        onClick={scrollOrNavigate(scrollTo, 'breed')}
      >
        <a> Gà giống </a>
      </li>

      <li className={classNames(classes.menuItem, active === 'stepsBuy' && classes.active)}
        onClick={scrollOrNavigate(scrollTo, 'stepsBuy')}
      >
        <a> Hướng dẫn mua hàng </a>
      </li>
    </ul>
    <div className={classes.right}>
      <div className={classes.basketWrapper}>
        <span className={classNames(classes.basketIcon, 'glyphicon glyphicon-shopping-cart')}
          onClick={navigateToBasket}
        />
        <span className={classes.numberProduct}> 6 </span>
      </div>
      <button className={classes.btnLogin} > Đăng Nhập </button>
    </div>
  </div>
)

Menu.propTypes = {
  scrollTo: PropTypes.func,
  active: PropTypes.string
}

export default Menu
