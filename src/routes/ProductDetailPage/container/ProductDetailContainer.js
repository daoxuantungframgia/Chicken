import { connect } from 'react-redux'
import ProductDetail from '../components/ProductDetail'
import { initialProductDetailPage } from '../module/ProductDetail'

const mapStateToProps = (state) => ({
  product: state.productDetail.product,
  relativeProducts: state.products.products
})

const mapDispatchToProps = {
  initialProductDetailPage
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
