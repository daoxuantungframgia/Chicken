import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Product.scss'
import InputNumber from '../../InputNumber'
import noImage from '../../../../../assets/no-image.jpg'
import { formatStringToNumber } from '../../../../../utils/utils'

export default class Product extends Component {
  changeQuantity = (quantity) => () => {
    if (quantity > 0) {
      this.props.changeProduct({ ...this.props.product, quantity })
    }
  }
  removeToBasket = () => {
    const { product, removeToBasket } = this.props

    removeToBasket(product.productId)
  }
  render () {
    const { product } = this.props
    return (
      <div className={classes.productWrapper}>
        <div className='row'>
          <div className='col-xs-4 col-md-3'>
            <div className={classes.imageWrapper}>
              <img src={product.image || noImage} alt='img' />
            </div>
          </div>
          <div className='col-xs-8 col-md-9'>
            <div className='row'>
              <div className='col-xs-12 col-md-4'>
                <p> {product.productName} </p>
              </div>
              <div className='col-xs-12 col-md-4'>
                <div >
                  <InputNumber value={product.quantity} changeValue={this.changeQuantity} />
                </div>
              </div>
              <div className='col-xs-12 col-md-3'>
                <p className={classes.newAmount}> { formatStringToNumber(product.salePrice) } </p>
                <p className={classes.oldAmount}> { formatStringToNumber(product.originalPrice) } </p>
                <p className={classes.discount}> - { product.promValue }% </p>
              </div>
              <div className='col-xs-12 col-md-1'>
                <span className='glyphicon glyphicon-trash'
                  onClick={this.removeToBasket}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Product.propTypes = {
  product: PropTypes.object,
  changeProduct: PropTypes.func,
  removeToBasket: PropTypes.func
}
