import React from 'react'
import PropTypes from 'prop-types'
import classes from './Category.scss'
import { navigateTo } from '../../../../../utils/routing'

const navigateToProductsList = (active) => () => {
  navigateTo(`products?active=${active}`)
}

const Category = ({ category }) => (
  <div className={classes.cateogryItem} onClick={navigateToProductsList(category.active)}>
    <div className={classes.imgaeWrapper}>
      <img src={category.image} alt='img' />
    </div>
    <div className={classes.categoryInfo}>
      { category.name }
    </div>
  </div>
)

Category.propTypes = {
  category: PropTypes.object.isRequired
}

export default Category
