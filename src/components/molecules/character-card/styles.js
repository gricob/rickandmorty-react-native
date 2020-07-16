import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 220,
  },
  infoContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 4,
    textTransform: 'uppercase',
    flex: 1,
  },
  age: {color: 'white', fontSize: 16},
});
export default styles;
