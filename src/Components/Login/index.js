import { connect } from 'react-redux'
import Login from './Login'
import { actions } from '../../Actions/User'

const mapStateToProps = state => ({
  processing: state.User.processing
})

const mapDispatchToProps = dispatch => ({
  loginAction(email, password) {
    dispatch(actions.Authenticate(email, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
