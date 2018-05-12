import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import classes from './SliderProducts.scss'
import Product from '../ListProducts/Product'

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const SliderProducts = ({ products }) => (
  <div className={classes.sliderProducts}>
    <Slider {...sliderSettings}>
      {
        products && products.map((product) => (
          <div key={product.id} data-index={product.id} className={classes.item}>
            <Product product={product} />
          </div>
        ))
      }
    </Slider>
  </div>
)

SliderProducts.propTypes = {
  products: PropTypes.array
}

export default SliderProducts
