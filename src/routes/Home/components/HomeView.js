import React from 'react'
import scrollToComponent from 'react-scroll-to-component'
import PropTypes from 'prop-types'
import Menu from './Menu'
import Intro from './Intro'
import Categories from './Categories'
import StepsBuy from './StepsBuy'
import ListProductsWrapper from '../../ProductsPage/components/ListProductsWrapper'
import classes from './HomeView.scss'

export default class HomeView extends React.Component {
  state = {
    active: '',
  }
  componentDidMount () {
    this.props.initialHomePage()
    window.addEventListener('scroll', this.handleScroll)
    const active = this.props.location.query.active
    if (active) {
      this.scrollTo(active)()
    } else {
      this.handleScroll()
    }
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
    const { categories, hotDeals } = this.props
    return (
      <div className={classes.container}>
        <Menu scrollTo={this.scrollTo} active={active} />
        <div ref={(introWe) => { this.introWe = introWe }}>
          <Intro />
        </div>
        <div ref={(chicken) => { this.chicken = chicken }}>
          <Categories title='Thịt gà sạch' categories={categories && categories.ga_thit} />
        </div>
        <div ref={(age) => { this.age = age }}>
          <Categories title='Trứng gà sạch' categories={categories && categories.trung_ga} />
        </div>
        <div ref={(breed) => { this.breed = breed }}>
          <Categories title='Gà Giống' categories={categories && categories.ga_giong} />
        </div>
        <div>
          <ListProductsWrapper title='Các sản phẩm bán chạy'
            products={hotDeals}
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

HomeView.propTypes = {
  location: PropTypes.object,
  initialHomePage: PropTypes.func,
  categories: PropTypes.object,
  hotDeals: PropTypes.array,
}
