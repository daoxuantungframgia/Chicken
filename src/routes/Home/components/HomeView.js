import React from 'react'
import scrollToComponent from 'react-scroll-to-component'
import Menu from './Menu'
import Intro from './Intro'
import Categories from './Categories'
import StepsBuy from './StepsBuy'
import ListProductsWrapper from '../../ProductsPage/components/ListProductsWrapper'
import classes from './HomeView.scss'
import { data1, categories } from '../data'

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
    const scrollTop = window.pageYOffset + 100
    const introWe = this.introWe.offsetTop
    const chicken = this.chicken.offsetTop
    const age = this.age.offsetTop
    const breed = this.breed.offsetTop
    const stepsBuy = this.stepsBuy.offsetTop
    let active = ''
    if (scrollTop >= introWe && scrollTop < chicken) {
      active = 'introWe'
    } else if (scrollTop >= chicken && scrollTop < age) {
      active = 'chicken'
    } else if (scrollTop >= age && scrollTop < breed) {
      active = 'age'
    } else if (scrollTop >= breed && scrollTop < stepsBuy) {
      active = 'breed'
    } else if (scrollTop >= stepsBuy) {
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
    scrollToComponent(this[refstr], {
      align: 'top',
      offset: -100,
    })
  }

  render () {
    const { active } = this.state
    return (
      <div className={classes.container}>
        <Menu scrollTo={this.scrollTo} active={active} />
        <div ref={(introWe) => { this.introWe = introWe }}>
          <Intro />
        </div>
        <div ref={(chicken) => { this.chicken = chicken }}>
          <Categories title='Thịt gà sạch' categories={categories} />
        </div>
        <div ref={(age) => { this.age = age }}>
          <Categories title='Trứng gà sạch' categories={categories} />
        </div>
        <div ref={(breed) => { this.breed = breed }}>
          <Categories title='Gà Giống' categories={categories} />
        </div>
        <div>
          <ListProductsWrapper title='Các sản phẩm bán chạy'
            products={data1}
            isSlider
          />
        </div>
        <div >
          <ListProductsWrapper title='Hot Deal'
            products={data1}
            isSlider
          />
        </div>
        <div ref={(stepsBuy) => { this.stepsBuy = stepsBuy }}>
          <StepsBuy />
        </div>
      </div>
    )
  }
}
