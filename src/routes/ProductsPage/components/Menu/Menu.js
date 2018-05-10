import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import classes from './Menu.scss'
import HomeIcon from '../../../../assets/home-icon.png'
import { navigateTo } from '../../../../utils/routing'

const navigateToBasket = () => {
  navigateTo('/basket')
}

const navigateToHomePage = () => {
  navigateTo('/')
}

const handleClickMenuItem = (scrollTo, activeRef) => () => {
  if (scrollTo) {
    scrollTo(activeRef)()
  } else {
    navigateTo(`/products?active=${activeRef}`)
  }
}

const Menu = ({ scrollTo, active }) => (
  <div className={classNames(classes.menuWrapper, (active > 0 || !scrollTo) && classes.whiteBg)}>
    <div className={classes.logo} onClick={navigateToHomePage}>
      <img src={HomeIcon} alt='home-icon' />
    </div>
    <ul className={classes.menu}>
      <li className={classNames(classes.menuItem, active === 1 && classes.active)}
        onClick={handleClickMenuItem(scrollTo, 'ref1')}
      >
        <a> Sản phẩm bán chạy </a>
      </li>
      <li className={classNames(classes.menuItem, active === 2 && classes.active)}
        onClick={handleClickMenuItem(scrollTo, 'ref2')}
      >
        <a> Thịt gà sạch </a>
      </li>
      <li className={classNames(classes.menuItem, active === 3 && classes.active)}
        onClick={handleClickMenuItem(scrollTo, 'ref3')}
      >
        <a> Gà mía thả vườn </a>
      </li>
      <li className={classNames(classes.menuItem, active === 4 && classes.active)}
        onClick={handleClickMenuItem(scrollTo, 'ref4')}
      >
        <a> Trứng gà sạch </a>
      </li>
      <li className={classNames(classes.menuItem, active === 5 && classes.active)}
        onClick={handleClickMenuItem(scrollTo, 'ref5')}
      >
        <a> Gà con sống </a>
      </li>
      <li className={classNames(classes.menuItem, active === 6 && classes.active)}
        onClick={handleClickMenuItem(scrollTo, 'ref6')}
      >
        <a> Rượu trứng gà so </a>
      </li>
      <div className={classes.right}>
        <span className={classNames(classes.basketIcon, 'glyphicon glyphicon-shopping-cart')}
          onClick={navigateToBasket}
        />
        <button className={classes.btnLogin} > Đăng Nhập </button>
      </div>
    </ul>
  </div>
)

Menu.propTypes = {
  scrollTo: PropTypes.func,
  active: PropTypes.number
}

export default Menu
