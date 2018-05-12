import React from 'react'
import Menu from '../../Home/components/Menu'
import { data1 } from '../data'
import ListProductsWrapper from './ListProductsWrapper'
import classes from './Products.scss'

export default class Products extends React.Component {

  componentDidMount () {
  }

  render () {
    return (
      <div className={classes.container}>
        <Menu active='1' />
        <div>
          <ListProductsWrapper title='Thịt gà sạch' products={data1} />
        </div>
      </div>
    )
  }
}
