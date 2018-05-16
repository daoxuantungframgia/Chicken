import React from 'react'
import PropTypes from 'prop-types'
import classes from './Product.scss'
import { navigateTo } from '../../../../../utils/routing'
import { formatStringToNumber } from '../../../../../utils/utils'
import noImage from '../../../../../assets/no-image.jpg'

const navigateToProductDetail = (product) => () => {
  navigateTo(`/products/${product.productId}/${product.promId}/${product.cateTypeId}`)
}

const Product = ({ product }) => (
  <div className={classes.wrapper} onClick={navigateToProductDetail(product)}>
    <div className={classes.imageWrapper}>
      <img src={product.image || noImage} alt='img' />
      <div className={classes.discount}> - {product.promValue}% </div>
    </div>

    <div className={classes.productInfo}>
      <p className={classes.name}> {product.productName} </p>
      <div>
        <span className={classes.newAmount}> {formatStringToNumber(product.salePrice)} </span>
        <span className={classes.oldAmount}> {formatStringToNumber(product.originalPrice)} </span>
      </div>
    </div>
    <div className={classes.background} />
  </div>
)

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
