import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import classes from './Menu.scss'

const Menu = ({ scrollTo, active }) => (
  <div className={classNames(classes.menuWrapper, active > 0 && classes.whiteBg)}>
    <ul className={classes.menu}>
      <li className={classNames(classes.menuItem, active === 1 && classes.active)}
        onClick={scrollTo('ref1')}
      >
        <a> Thịt gà sạch </a>
      </li>
      <li className={classNames(classes.menuItem, active === 2 && classes.active)}
        onClick={scrollTo('ref2')}
      >
        <a> Gà mía thả vườn </a>
      </li>
      <li className={classNames(classes.menuItem, active === 3 && classes.active)}
        onClick={scrollTo('ref3')}
      >
        <a> Trứng gà sạch </a>
      </li>
      <li className={classNames(classes.menuItem, active === 4 && classes.active)}
        onClick={scrollTo('ref4')}
      >
        <a> Gà con sống </a>
      </li>
      <li className={classNames(classes.menuItem, active === 5 && classes.active)}
        onClick={scrollTo('ref5')}
      >
        <a> Rượu trứng gà so </a>
      </li>
    </ul>
  </div>
)

Menu.propTypes = {
  scrollTo: PropTypes.func,
  active: PropTypes.number
}

export default Menu
