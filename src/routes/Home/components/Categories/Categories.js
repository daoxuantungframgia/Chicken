import React from 'react'
import Category from './Category'
import { categories } from '../../data'
import classes from './Categories.scss'

const Categories = () => (
  <div className={classes.categoriesContainer}>
    <h2> Các Danh Mục Sản Phẩm </h2>
    <div className={classes.categories}>
      <div className='row'>
        { categories.map((category) => (
          <div className='col-xs-6 col-md-3'>
            <Category key={category.id} category={category} />
          </div>
        )) }
      </div>
    </div>
  </div>
)

export default Categories
