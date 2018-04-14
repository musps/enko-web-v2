import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { withApp } from '@/wrappers/AppWrapper'
import NavBar from './Component'

export default withRouter(connect(
  null, 
  null
)(withApp(NavBar)))

