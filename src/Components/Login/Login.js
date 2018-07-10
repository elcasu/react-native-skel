import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import CTextField from '../Shared/CTextField'
import CButton from '../Shared/CButton'
import style from './style'

export default class Login extends React.Component {
  static propTypes = {
    loginAction: PropTypes.func.isRequired
  }

  static navigationOptions = {
    title: 'Login'
  }

  constructor() {
    super()
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.submit = this.submit.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }

  updateEmail(email) {
    this.setState({ email })
  }

  updatePassword(password) {
    this.setState({ password })
  }

  submit() {
    this.props.loginAction(this.state.email, this.state.password)
  }

  render() {
    return (
      <View style={ style.container }>
        <CTextField
          keyboardType='email-address'
          autoCapitalize='none'
          value={ this.state.email }
          onChangeText={ this.updateEmail }
          label="Email"
        />
        <CTextField
          secureTextEntry
          value={ this.state.password }
          onChangeText={ this.updatePassword }
          label="Password"
        />
        <View style={ style.actions }>
          <CButton onTap={ this.submit } label="LOGIN" />
        </View>
      </View>
    )
  }
}
