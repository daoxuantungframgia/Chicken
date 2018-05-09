import React from 'react'
import PropTypes from 'prop-types'
import ListProducts from '../ListProducts'
import classes from './ListProductsWrapper.scss'

const ListProductWrapper = ({ title, products }) => (
  <div className={classes.wrapper}>
    <h2> {title} </h2>
    <ListProducts products={products} />
  </div>
)

ListProductWrapper.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
}

export default ListProductWrapper
