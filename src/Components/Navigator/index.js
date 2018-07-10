import { connect } from 'react-redux'
import Navigator from './Navigator'

const mapStateToProps = state => ({
  signedIn: state.User.signedIn,
  sessionLoaded: state.User.sessionLoaded
})

export default connect(mapStateToProps)(Navigator)
