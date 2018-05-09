import React from 'react'
import PropTypes from 'prop-types'
import classes from './Product.scss'
import InputNumber from '../../InputNumber'

const Product = ({ product }) => (
  <div className={classes.productWrapper}>
    <div className='row'>
      <div className='col-xs-4 col-md-3'>
        <div className={classes.imageWrapper}>
          <img src={product.image} alt='img' />
        </div>
      </div>
      <div className='col-xs-8 col-md-9'>
        <div className='row'>
          <div className='col-xs-12 col-md-4'>
            <p> {product.name} </p>
          </div>
          <div className='col-xs-12 col-md-4'>
            <div >
              <InputNumber value={1} changeValue={() => {}} />
            </div>
          </div>
          <div className='col-xs-12 col-md-4'>
            <p className={classes.newAmount}> { product.newAmount } </p>
            <p className={classes.oldAmount}> { product.oldAmount } </p>
            <p className={classes.discount}> - { product.reducePercentage }% </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Product.propTypes = {
  product: PropTypes.object
}

export default Product
