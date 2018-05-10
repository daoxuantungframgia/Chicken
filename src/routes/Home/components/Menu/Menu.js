import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import HomeIcon from '../../../../assets/home-icon.png'
import classes from './Menu.scss'
import { navigateTo } from '../../../../utils/routing'

const navigateToBasket = () => {
  navigateTo('/basket')
}

const Menu = ({ scrollTo, active }) => (
  <div className={classNames(classes.menuWrapper, active && classes.bgWhite)}>
    <div className={classes.logo}>
      <img src={HomeIcon} alt='home-icon' />
    </div>
    <ul className={classes.menu}>
      <li className={classNames(classes.menuItem, active === 'intro' && classes.active)}
        onClick={scrollTo('intro')}
      >
        <a> Giới thiệu về chúng tôi </a>
      </li>
      <li className={classNames(classes.menuItem, active === 'categories' && classes.active)}
        onClick={scrollTo('categories')}
      >
        <a> Các danh mục sản phẩm </a>
      </li>
      <li className={classNames(classes.menuItem, active === 'products' && classes.active)}
        onClick={scrollTo('products')}
      >
        <a> Sản phầm bán chạy </a>
      </li>
      <li className={classNames(classes.menuItem, active === 'stepsBuy' && classes.active)}
        onClick={scrollTo('stepsBuy')}
      >
        <a> Hướng dẫn mua hàng </a>
      </li>
    </ul>
    <div className={classes.right}>
      <span className={classNames(classes.basketIcon, 'glyphicon glyphicon-shopping-cart')}
        onClick={navigateToBasket}
      />
      <button className={classes.btnLogin} > Đăng Nhập </button>
    </div>
  </div>
)

Menu.propTypes = {
  scrollTo: PropTypes.func,
  active: PropTypes.string
}

export default Menu
