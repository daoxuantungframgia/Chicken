import React from 'react'
import PropTypes from 'prop-types'
import classes from './Category.scss'
import { navigateTo } from '../../../../../utils/routing'
import noImage from '../../../../../assets/no-image.jpg'

const navigateToProductsList = (category) => () => {
  navigateTo(`products?category=${category.catetypeid}&categoryName=${category.cateTypeName}`)
}

const Category = ({ category }) => (
  <div className={classes.cateogryItem} onClick={navigateToProductsList(category)}>
    <div className={classes.imgaeWrapper}>
      <img src={category.image || noImage} alt='img' />
    </div>
    <div className={classes.categoryInfo}>
      { category.cateTypeName }
    </div>
  </div>
)

Category.propTypes = {
  category: PropTypes.object.isRequired
}

export default Category
