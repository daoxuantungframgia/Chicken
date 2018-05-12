import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ListProducts = ({ products }) => (
  <div>
    <div className='row'>
      {products.map((product) => (
        <div className='col-xs-6 col-md-4' data-index={product.id} key={product.id}>
          <Product product={product} key={product.id} />
        </div>
      ))}
    </div>
  </div>
)

ListProducts.propTypes = {
  products: PropTypes.array.isRequired
}

export default ListProducts
