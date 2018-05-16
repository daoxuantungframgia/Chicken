import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import classes from './Products.scss'

const Products = ({ products }) => (
  <div className={classes.wrapper}>
    { products.map((product) => <Product key={product.productId} product={product} />) }
  </div>
)

Products.propTypes = {
  products: PropTypes.array
}

export default Products
