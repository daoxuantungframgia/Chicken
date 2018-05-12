import React from 'react'
import PropTypes from 'prop-types'
import ListProducts from '../ListProducts'
import classes from './ListProductsWrapper.scss'
import iconIntro from '../../../../assets/icon-gioithieu.png'
import SliderProducts from '../SliderProducts'

const ListProductWrapper = ({ title, products, isSlider = false }) => (
  <div className={classes.wrapper}>
    <h2 className={classes.title}> {title} </h2>
    <div className={classes.iconIntroWrapper}>
      <img src={iconIntro} alt='icon' />
    </div>
    {
      isSlider ? <SliderProducts products={products} /> : <ListProducts products={products} />
    }
  </div>
)

ListProductWrapper.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
  isSlider: PropTypes.bool,
}

export default ListProductWrapper
