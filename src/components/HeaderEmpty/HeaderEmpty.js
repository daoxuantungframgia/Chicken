import React from 'react'
import HomeIcon from 'assets/home-icon.png'
import { navigateTo } from 'utils/routing'
import classes from './HeaderEmpty.scss'

const navigateToHomePage = () => {
  navigateTo('/')
}

const HeaderEmpty = () => (
  <div className={classes.wrapper}>
    <img src={HomeIcon}
      className={classes.img}
      onClick={navigateToHomePage}
    />
  </div>
)

export default HeaderEmpty
