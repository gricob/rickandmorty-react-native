import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Button extends React.Component {
  render() {
    const {label, onPress, disabled} = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
      >
        <Text>{label}</Text>
      </TouchableOpacity>
    )
  }
}

export default Button;