import { connect } from 'react-redux'
import Products from '../components/Products'
import { getProducts } from '../module/Products'

const mapStateToProps = (state) => ({
  products: state.products.products
})

const mapDispatchToProps = {
  getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
