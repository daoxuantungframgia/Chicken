import React from 'react'
import scrollToComponent from 'react-scroll-to-component'
import Menu from './Menu'
import Intro from './Intro'
import Categories from './Categories'
import StepsBuy from './StepsBuy'
import ListProductsWrapper from '../../ProductsPage/components/ListProductsWrapper'
import classes from './HomeView.scss'
import { data1 } from '../data'

export default class HomeView extends React.Component {
  state = {
    active: '',
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset + 50
    const intro = this.intro.offsetTop
    const categories = this.categories.offsetTop
    const products = this.products.offsetTop
    const stepsBuy = this.stepsBuy.offsetTop
    let active = ''
    if (scrollTop >= intro && scrollTop < categories) {
      active = 'intro'
    } else if (scrollTop >= categories && scrollTop < products) {
      active = 'categories'
    } else if (scrollTop >= products && screenTop < stepsBuy) {
      active = 'products'
    } else if (screenTop >= stepsBuy) {
      active = 'stepsBuy'
    }
    this.setState({
      active
    })
  }

  scrollTo = (refstr) => () => {
    this.setState({
      active: refstr
    })
    scrollToComponent(this[refstr])
  }

  render () {
    const { active } = this.state
    return (
      <div className={classes.container}>
        <Menu scrollTo={this.scrollTo} active={active} />
        <div ref={(intro) => { this.intro = intro }}>
          <Intro />
        </div>
        <div ref={(categories) => { this.categories = categories }}>
          <Categories />
        </div>
        <div ref={(products) => { this.products = products }}>
          <ListProductsWrapper title='Các sản phẩm bán chạy' products={data1} />
        </div>
        <div ref={(stepsBuy) => { this.stepsBuy = stepsBuy }}>
          <StepsBuy />
        </div>
      </div>
    )
  }
}
