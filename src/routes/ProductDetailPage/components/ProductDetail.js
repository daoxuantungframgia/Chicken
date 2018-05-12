import React from 'react'
import PropTypes from 'prop-types'
import classes from './ProductDetail.scss'
import ListProductsWrapper from '../../ProductsPage/components/ListProductsWrapper'
import InputNumber from '../../BasketPage/components/InputNumber'
import { productDetail as product, data1 } from '../data'
import { navigateTo } from '../../../utils/routing'
import Menu from '../../Home/components/Menu'

const navigateToBasket = () => {
  navigateTo('/basket')
}

const ProductDetail = () => (
  <div className={classes.wrapper}>
    <Menu active='1' />
    <div className={classes.info}>
      <div className='row'>
        <div className='col-xs-12 col-md-4'>
          <div className={classes.imageWrapper}>
            <img src={product.image} alt='img' />
          </div>
        </div>
        <div className='col-xs-12 col-md-8'>
          <p className={classes.name}> {product.name} </p>
          <div className={classes.amount}>
            <span className={classes.newAmount}> {product.newAmount} </span>
            <span className={classes.oldAmount}> {product.oldAmount} </span>
          </div>
          <p className={classes.titleDescription}> Mô tả sản phẩm </p>
          <p className={classes.description} > {product.description} </p>
          <div>
            <div className={classes.inputWrapper}>
              <span> Số lượng: </span>
              <div className={classes.numberProduct}>
                <InputNumber value={1} changeValue={() => {}} />
              </div>
            </div>
            <button className={classes.addToBasket} onClick={navigateToBasket}> Thêm vào giỏ hàng </button>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.detail}>
      <h2> Chi tiết sản phẩm </h2>
      <p className={classes.detailText}> {product.detail} </p>
    </div>
    <div className={classes.relativeProducts}>
      <ListProductsWrapper title='Các sản phẩm liên quan' products={data1} />
    </div>
  </div>
)

ProductDetail.propTypes = {
  product: PropTypes.object
}
export default ProductDetail
