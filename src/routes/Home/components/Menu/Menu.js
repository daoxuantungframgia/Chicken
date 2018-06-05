import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Dropdown from 'components/Dropdown'
import { isLoggedIn, getUser, setLoginFromBasket } from 'utils/storage'
import HomeIcon from '../../../../assets/home-icon.png'
import classes from './Menu.scss'
import { navigateTo } from '../../../../utils/routing'
import { getNumberBaskets } from '../../../../utils/storage'
import $ from 'jquery'

const navigateToHomePage = () => {
  navigateTo('/')
}

const navigateToBasket = () => {
  navigateTo('/basket')
}

const navigateToLogin = () => {
  setLoginFromBasket(false)
  navigateTo('/login')
}

const scrollOrNavigate = ({ scrollTo, active, closeMenu }) => () => {
  if (scrollTo) {
    scrollTo(active)(0)
  } else {
    navigateTo(`/?active=${active}`)
  }
  if (closeMenu) {
    showMenuMobile({ show: false })()
  }
}

const showMenuMobile = ({ show }) => () => {
  if (show) {
    $('#menuMobile').animate({ top : '0px' }, 1000)
  } else {
    $('#menuMobile').animate({ top : '-520px' }, 1000)
  }
}

const Menu = ({ scrollTo, active }) => {
  const numberBaskets = getNumberBaskets()
  const user = getUser()
  return (
    <div className={classNames(classes.menuWrapper, active && classes.bgWhite)}>
      <div className={classes.logo} onClick={navigateToHomePage}>
        <img src={HomeIcon} alt='home-icon' />
      </div>
      <button type='button' className={classes.menuIcon} onClick={showMenuMobile({ show: true })} />
      <ul className={classes.menu}>
        <li className={classNames(classes.menuItem, active === 'introWe' && classes.active)}
          onClick={scrollOrNavigate({ scrollTo, active: 'introWe' })}
        >
          <a> Giới thiệu về chúng tôi </a>
        </li>
        <li className={classNames(classes.menuItem, active === 'chicken' && classes.active)}
          onClick={scrollOrNavigate({ scrollTo, active: 'chicken' })}
        >
          <a> Thịt gà sạch </a>
        </li>
        <li className={classNames(classes.menuItem, active === 'age' && classes.active)}
          onClick={scrollOrNavigate({ scrollTo, active: 'age' })}
        >
          <a> Trứng gà sạch </a>
        </li>
        <li className={classNames(classes.menuItem, active === 'breed' && classes.active)}
          onClick={scrollOrNavigate({ scrollTo, active: 'breed' })}
        >
          <a> Gà giống </a>
        </li>

        <li className={classNames(classes.menuItem, active === 'stepsBuy' && classes.active)}
          onClick={scrollOrNavigate({ scrollTo, active: 'stepsBuy' })}
        >
          <a> Hướng dẫn mua hàng </a>
        </li>
      </ul>
      <ul className={classes.menuMobile} id='menuMobile'>
        <li className={classNames(classes.menuItemMobile, classes.headerMenu)}
          onClick={showMenuMobile({ show: false })}
        >
          <a> Menu </a>
          <a className={classes.close}> x </a>
        </li>
        <li className={classNames(classes.menuItemMobile, active === 'introWe' && classes.active)}
          onClick={scrollOrNavigate({ scrollTo, active: 'introWe', closeMenu: true })}
        >
          <a> Giới thiệu về chúng tôi </a>
        </li>
        <li className={classNames(classes.menuItemMobile, active === 'chicken' && classes.active)}
          onClick={scrollOrNavigate({ scrollTo, active: 'chicken', closeMenu: true })}
        >
          <a> Thịt gà sạch </a>
        </li>
        <li className={classNames(classes.menuItemMobile, active === 'age' && classes.active)}
          onClick={scrollOrNavigate({ scrollTo, active: 'age', closeMenu: true })}
        >
          <a> Trứng gà sạch </a>
        </li>
        <li className={classNames(classes.menuItemMobile, active === 'breed' && classes.active)}
          onClick={scrollOrNavigate({ scrollTo, active: 'breed', closeMenu: true })}
        >
          <a> Gà giống </a>
        </li>

        <li className={classNames(classes.menuItemMobile, active === 'stepsBuy' && classes.active)}
          onClick={scrollOrNavigate({ scrollTo, active: 'stepsBuy', closeMenu: true })}
        >
          <a> Hướng dẫn mua hàng </a>
        </li>
      </ul>
      <div className={classNames(classes.right, isLoggedIn() && classes.padTop10)}>
        <div className={classes.basketWrapper}>
          <span className={classNames(classes.basketIcon, 'glyphicon glyphicon-shopping-cart')}
            onClick={navigateToBasket}
          />
          {numberBaskets ? <span className={classes.numberProduct}> {numberBaskets} </span> : ''}
        </div>
        {isLoggedIn()
          ? <Dropdown user={user} />
          : <button className={classes.btnLogin} onClick={navigateToLogin}> Đăng Nhập </button>
        }
      </div>
    </div>
  )
}

Menu.propTypes = {
  scrollTo: PropTypes.func,
  active: PropTypes.string
}

export default Menu
