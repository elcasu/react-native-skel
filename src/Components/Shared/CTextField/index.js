import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'react-native-material-textfield'

class CTextField extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string
  }

  render() {
    return (
      <TextField
        label={ this.props.label }
        value={ this.props.value }
        { ...this.props }
      />
    )
  }
}

export default CTextField
