import React from 'react'
import PropTypes from 'prop-types'
import Menu from '../../Home/components/Menu'
import ListProductsWrapper from './ListProductsWrapper'
import classes from './Products.scss'

export default class Products extends React.Component {
  componentDidMount () {
    const categoryId = this.props.location.query.category
    this.props.getProducts(categoryId)
  }

  render () {
    const { products, location } = this.props
    return (
      <div className={classes.container}>
        <Menu active='1' />
        <div>
          <ListProductsWrapper title={location.query.categoryName} products={products} />
        </div>
      </div>
    )
  }
}

Products.propTypes = {
  location: PropTypes.object,
  getProducts: PropTypes.func,
  products: PropTypes.array,
}
