import React from 'react'
import PropTypes from 'prop-types'
import CButton from '../Shared/CButton'
import { Text, View } from 'react-native'
import style from './style'

export default class Profile extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onTap: PropTypes.func.isRequired
  }

  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <View style={ style.container }>
        <Text style={ style.title }>Profile page</Text>
        <CButton label='Logout' onTap={ this.props.onTap } />
      </View>
    )
  }
}
