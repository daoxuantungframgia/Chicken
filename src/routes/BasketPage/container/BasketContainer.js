import { connect } from 'react-redux'
import Basket from '../components/Basket'
import { getHotDeals } from '../../Home/module/Home'

const mapStateToProps = (state) => ({
  hotDeals: state.home.hotDeals
})

const mapDispatchToProps = {
  getHotDeals
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
