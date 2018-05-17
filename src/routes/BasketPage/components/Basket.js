import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Products from './Products'
import BasketInfo from './BasketInfo'
import ListProductsWrapper from '../../ProductsPage/components/ListProductsWrapper'
import classes from './Basket.scss'
import Menu from '../../Home/components/Menu'
import iconIntro from '../../../assets/icon-gioithieu.png'
import { getBaskets, getBasketInfo, updateBasket } from '../../../utils/storage'

export default class Basket extends Component {
  componentDidMount () {
    this.props.getHotDeals()
  }
  changeProduct = (product) => {
    updateBasket(product)
    this.forceUpdate()
  }
  render () {
    const { hotDeals } = this.props
    const baskets = getBaskets()
    const basketInfo = getBasketInfo()
    return (
      <div className={classes.basketWrapper}>
        <Menu active='1' />
        <h2 className={classes.title}> Các sản phẩm bạn đã chọn </h2>
        <div className={classes.iconIntroWrapper}>
          <img src={iconIntro} alt='icon' />
        </div>
        <div className={classes.basketContent}>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-9'>
              <div className={classes.products}>
                <Products products={baskets} changeProduct={this.changeProduct} />
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-3'>
              <div className={classes.basketInfo}>
                <BasketInfo basket={basketInfo} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.relativeProducts}>
          <ListProductsWrapper products={hotDeals} title='Các sản phẩm bán chạy' />
        </div>
      </div>
    )
  }
}

Basket.propTypes = {
  hotDeals: PropTypes.array,
  getHotDeals: PropTypes.func
}
