import { connect } from 'react-redux'
import ProductDetail from '../components/ProductDetail'
import { initialProductDetailPage } from '../module/ProductDetail'

const mapStateToProps = (state) => ({
  product: state.productDetail.product,
  relativeProducts: state.productDetail.relativeProducts
})

const mapDispatchToProps = {
  initialProductDetailPage
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
