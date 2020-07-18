import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

class Input extends React.Component {
  render() {
    const {value, onChangeText, placeholder, label, error, style} = this.props;

    return (
      <View style={{...styles.wrapper, ...style}}>
        <Text>{label}</Text>
        <TextInput 
          placeholder={placeholder}
          onChangeText={onChangeText}
          underlineColorAndroid={'transparent'}
          value={value}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    )
  }
}

Input.defaultProps = {
  value: '',
  onChangeText: () => {},
  style: {}
}

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  style: PropTypes.any,
}

export default Input;