import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Navigator from './Components/Navigator'
import { actions } from './Actions/User'

// TODO: remove this lines when the fix is released
// by react-native
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Class RCTCxxModule',
  'Module RCTImageLoader requires'
])

class App extends React.Component {
  constructor() {
    super()
    this.store = store()
  }

  componentWillMount() {
    this.store.dispatch(actions.RestoreSession())
  }

  render() {
    return (
      <Provider store={ this.store }>
        <Navigator />
      </Provider>
    )
  }
}

export default App
