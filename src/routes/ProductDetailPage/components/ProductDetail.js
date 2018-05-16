import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './ProductDetail.scss'
import ListProductsWrapper from '../../ProductsPage/components/ListProductsWrapper'
import InputNumber from '../../BasketPage/components/InputNumber'
import { navigateTo } from '../../../utils/routing'
import { addToBasket } from '../../../utils/storage'
import Menu from '../../Home/components/Menu'
import noImage from '../../../assets/no-image.jpg'
import Promotions from './Promotions'

export default class ProductDetail extends Component {
  state = {
    number: 1
  }

  componentDidMount () {
    this.props.initialProductDetailPage(this.props.params)
  }

  changeValue = (number) => () => {
    this.setState({
      number
    })
  }

  addToBasket = () => {
    const { product } = this.props
    addToBasket(product)
    navigateTo('/basket')
  }

  render () {
    const { product = {}, relativeProducts } = this.props
    const { number } = this.state
    return (
      <div className={classes.wrapper}>
        <Menu active='1' />
        <div className={classes.info}>
          <div className='row'>
            <div className='col-xs-12 col-md-4'>
              <div className={classes.imageWrapper}>
                <img src={product.image || noImage} alt='img' />
              </div>
            </div>
            <div className='col-xs-12 col-md-8'>
              <p className={classes.name}> {product.productName} </p>
              <div className={classes.amount}>
                <span className={classes.newAmount}> {product.salePrice} </span>
                <span className={classes.oldAmount}> {product.originalPrice} </span>
              </div>
              <p className={classes.titleDescription}> Mô tả sản phẩm </p>
              <p className={classes.description} > {product.description} </p>
              <Promotions promotions={product.promotionDetails} />
              <div>
                <div className={classes.inputWrapper}>
                  <span> Số lượng: </span>
                  <div className={classes.numberProduct}>
                    <InputNumber value={number} changeValue={this.changeValue} />
                  </div>
                </div>
                <button className={classes.addToBasket} onClick={this.addToBasket}> Thêm vào giỏ hàng </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.detail}>
          <h2> Chi tiết sản phẩm </h2>
          <p className={classes.detailText}> {product.detail} </p>
        </div>
        <div className={classes.relativeProducts}>
          <ListProductsWrapper title='Các sản phẩm liên quan' products={relativeProducts} />
        </div>
      </div>
    )
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  relativeProducts: PropTypes.array,
  params: PropTypes.object,
  initialProductDetailPage: PropTypes.func
}
