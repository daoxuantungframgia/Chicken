import React from 'react'
import PropTypes from 'prop-types'
import classes from './Product.scss'
import { navigateTo } from '../../../../../utils/routing'

const navigateToProductDetail = () => {
  navigateTo('/products/1')
}

const Product = ({ product }) => (
  <div className={classes.wrapper} onClick={navigateToProductDetail}>
    <div className={classes.imageWrapper}>
      <img src={product.image} alt='img' />
      <div className={classes.discount}> - {product.reducePercentage}% </div>
    </div>

    <div className={classes.productInfo}>
      <p className={classes.name}> {product.name} </p>
      <div>
        <span className={classes.newAmount}> {product.newAmount} </span>
        <span className={classes.oldAmount}> {product.oldAmount} </span>
      </div>
    </div>
    <div className={classes.background} />
  </div>
)

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
