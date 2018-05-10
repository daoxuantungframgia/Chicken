import React from 'react'
import Products from './Products'
import BasketInfo from './BasketInfo'
import ListProductsWrapper from '../../ProductsPage/components/ListProductsWrapper'
import { data1, basketInfo } from '../data'
import classes from './Basket.scss'
import Menu from '../../ProductsPage/components/Menu'

const Basket = () => (
  <div className={classes.basketWrapper}>
    <Menu />
    <div className={classes.basketContent}>
      <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-9'>
          <div className={classes.products}>
            <Products products={data1} />
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
      <ListProductsWrapper products={data1} title='Các sản phẩm liên quan' />
    </div>
  </div>
)

export default Basket
