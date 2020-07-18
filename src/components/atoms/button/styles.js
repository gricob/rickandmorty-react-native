import {StyleSheet} from 'react-native';

const baseStyles = {
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  paddingRight: 16,
  borderRadius: 4,
}

const styles = StyleSheet.create({
  default: {
    ...baseStyles,
  },
  primary: {
    ...baseStyles,
    backgroundColor: 'green',
    color: 'white'
  }
});

export default styles;