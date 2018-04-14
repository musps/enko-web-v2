import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { withApp } from '@/wrappers/AppWrapper'
import { Login } from './Component'

export default withRouter(connect(
  null, 
  null
)(withApp(Login)))
