import React from 'react'
import Menu from './Menu'
import Intro from './Intro'
import Categories from './Categories'
import ListProductsWrapper from '../../ProductsPage/components/ListProductsWrapper'
import classes from './HomeView.scss'
import { data1 } from '../data'

export const HomeView = () => (
  <div className={classes.container}>
    <Menu />
    <Intro />
    <Categories />
    <ListProductsWrapper title='Các sản phẩm bán chạy' products={data1} />
  </div>
)

export default HomeView
