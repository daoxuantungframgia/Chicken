import { connect } from 'react-redux'
import PageLayout from './PageLayout'

const mapStateToProps = (state) => ({
  loading: state.api.loading,
  notification: state.api.notification
})

export default connect(mapStateToProps)(PageLayout)
