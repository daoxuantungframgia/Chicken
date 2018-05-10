import React from 'react'
import scrollToComponent from 'react-scroll-to-component'
import PropTypes from 'prop-types'
import Menu from './Menu'
import { data1, data2, data3, data4 } from '../data'
import ListProductsWrapper from './ListProductsWrapper'
import classes from './Products.scss'

export default class Products extends React.Component {
  state = {
    active: 0
  }

  componentDidMount () {
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
    const scrollTop = window.pageYOffset + 50
    const offset1 = this.ref1.offsetTop
    const offset2 = this.ref2.offsetTop
    const offset3 = this.ref3.offsetTop
    const offset4 = this.ref4.offsetTop
    const offset5 = this.ref5.offsetTop
    const offset6 = this.ref5.offsetTop
    let active = 0
    if (scrollTop >= offset1 && scrollTop < offset2) {
      active = 1
    } else if (scrollTop >= offset2 && scrollTop < offset3) {
      active = 2
    } else if (scrollTop >= offset3 && scrollTop < offset4) {
      active = 3
    } else if (scrollTop >= offset4 && scrollTop < offset5) {
      active = 4
    } else if (scrollTop >= offset5 && scrollX < offset6) {
      active = 5
    } else if (scrollTop >= offset6) {
      active = 6
    }
    this.setState({
      active
    })
  }

  scrollTo = (refstr) => () => {
    scrollToComponent(this[refstr])
  }

  render () {
    const { active } = this.state
    return (
      <div className={classes.container}>
        <Menu scrollTo={this.scrollTo} active={active} />
        <div ref={(ref1) => { this.ref1 = ref1 }}>
          <ListProductsWrapper title='Sản Phẩm bán chạy' products={data1} />
        </div>
        <div ref={(ref2) => { this.ref2 = ref2 }}>
          <ListProductsWrapper title='Thịt gà sạch' products={data1} />
        </div>
        <div ref={(ref3) => { this.ref3 = ref3 }}>
          <ListProductsWrapper title='Gà mía thả vườn' products={data2} />
        </div>
        <div ref={(ref4) => { this.ref4 = ref4 }}>
          <ListProductsWrapper title='Trứng gà sạch' products={data3} />
        </div>
        <div ref={(ref5) => { this.ref5 = ref5 }}>
          <ListProductsWrapper title='Gà con sống' products={data4} />
        </div>
        <div ref={(ref6) => { this.ref6 = ref6 }}>
          <ListProductsWrapper title='Rượu trứng gà so' products={data1} />
        </div>
      </div>
    )
  }
}

Products.propTypes = {
  location: PropTypes.object
}
