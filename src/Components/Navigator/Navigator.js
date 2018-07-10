import React from 'react'
import PropTypes from 'prop-types'
import NavigationService from './NavigationService'
import { createRootNavigator } from '../../router'

class Nav extends React.Component {
  static propTypes = {
    signedIn: PropTypes.bool,
    sessionLoaded: PropTypes.bool
  }

  static defaultProps = {
    signedIn: false,
    sessionLoaded: false
  }

  render() {
    const Layout = createRootNavigator(this.props.signedIn)
    if (this.props.sessionLoaded) {
      return (
        <Layout
          { ...this.props }
          ref={ navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          } }
        />
      )
    }
    return null
  }
}

export default Nav
