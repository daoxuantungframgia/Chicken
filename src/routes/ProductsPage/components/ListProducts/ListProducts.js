import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ListProducts = ({ products }) => (
  <div>
    <div className='row'>
      {products && products.map((product) => (
        <div className='col-xs-12 col-sm-6 col-md-4' data-index={product.id} key={product.productId}>
          <Product product={product} key={product.productId} />
        </div>
      ))}
      {
        (!products || products.length === 0) &&
        <p className='text-center'> hiện chưa có sản phẩm nào </p>
      }
    </div>
  </div>
)

ListProducts.propTypes = {
  products: PropTypes.array
}

export default ListProducts
