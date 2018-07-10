import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { MKButton } from 'react-native-material-kit'
import style from './style'

class CButton extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onTap: PropTypes.func.isRequired
  }

  render() {
    return (
      <MKButton
        style={ style.primaryButton }
        onPress={ this.props.onTap }
      >
        <Text pointerEvents="none" style={ style.btnText }>
          { this.props.label }
        </Text>
      </MKButton>
    )
  }
}

export default CButton
