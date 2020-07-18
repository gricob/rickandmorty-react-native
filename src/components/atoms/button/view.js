import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

class Button extends React.Component {
  render() {
    const {label, onPress, disabled, type} = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={styles[type]}
      >
        <Text>{label}</Text>
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  label: 'Submit',
  onPress: () => {},
  type: 'primary'
}

export default Button;