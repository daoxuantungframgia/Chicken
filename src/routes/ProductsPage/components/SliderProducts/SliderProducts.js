import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import classes from './SliderProducts.scss'
import Product from '../ListProducts/Product'

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        swipeToSlide: true,
        swipe: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        swipeToSlide: true,
        swipe: true,
      },
    },
  ],
}

const SliderProducts = ({ products }) => (
  <div className={classes.sliderProducts}>
    <Slider {...sliderSettings}>
      {
        products && products.map((product) => (
          <div key={product.productId} data-index={product.productId} className={classes.item}>
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
