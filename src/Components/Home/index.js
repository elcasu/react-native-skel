import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import style from './style'

export default class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={ style.container }>
        <Text style={ style.title }>Welcome page</Text>
      </View>
    )
  }
}
