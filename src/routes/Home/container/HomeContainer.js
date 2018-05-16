import { connect } from 'react-redux'
import HomeView from '../components/HomeView'
import { initialHomePage } from '../module/Home'

const mapStateToProps = (state) => ({
  categories: state.home.categories,
  hotDeals: state.home.hotDeals
})

const mapDispatchToProps = {
  initialHomePage
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
