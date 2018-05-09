import React from 'react'
import classNames from 'classnames'
import classes from './Menu.scss'

const Menu = () => (
  <div className={classes.menuWrapper}>
    <ul className={classes.menu}>
      <li className={classNames(classes.menuItem, classes.active)}>
        <a> Giới thiệu về chúng tôi </a>
      </li>
      <li className={classes.menuItem}>
        <a> Các sản phẩm </a>
      </li>
      <li className={classes.menuItem}>
        <a> Hướng dẫn mua hàng </a>
      </li>
      <li className={classes.menuItem}>
        <a> Sản phầm bán chạy </a>
      </li>
    </ul>
  </div>
)

export default Menu
