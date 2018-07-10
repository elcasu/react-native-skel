import { connect } from 'react-redux'
import Profile from './Profile'
import { actions } from '../../Actions/User'

const mapStateToProps = state => ({
  user: state.User
})

const mapDispatchToProps = dispatch => ({
  onTap() {
    dispatch(actions.RemoveSession())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
