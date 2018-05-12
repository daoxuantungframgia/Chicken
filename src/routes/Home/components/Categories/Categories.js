import React from 'react'
import PropTypes from 'prop-types'
import Category from './Category'
import classes from './Categories.scss'
import iconIntro from '../../../../assets/icon-gioithieu.png'

const Categories = ({ title, categories }) => (
  <div className={classes.categoriesContainer}>
    <h2 className={classes.title}> {title} </h2>
    <div className={classes.iconIntroWrapper}>
      <img src={iconIntro} alt='icon' />
    </div>
    <div className={classes.categories}>
      <div className='row'>
        { categories.map((category) => (
          <div className='col-xs-6 col-md-4' key={category.id}>
            <Category key={category.id} category={category} />
          </div>
        )) }
      </div>
    </div>
  </div>
)

Categories.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
}

export default Categories
