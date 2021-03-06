import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import classes from './Products.scss'

const Products = ({ products, changeProduct, removeToBasket }) => (
  <div className={classes.wrapper}>
    { products && products.map((product) => (
      <Product key={product.productId}
        product={product}
        changeProduct={changeProduct}
        removeToBasket={removeToBasket}
      />
    )) }
    {
      (!products || products.length === 0) &&
      <p className='text-center'> hiện tại bạn chưa có sản phẩm nào trong giỏ hàng </p>
    }
  </div>
)

Products.propTypes = {
  products: PropTypes.array,
  changeProduct: PropTypes.func,
  removeToBasket: PropTypes.func
}

export default Products
