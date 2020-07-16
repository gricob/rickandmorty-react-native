import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class CharacterCard extends React.Component {
  render() {
    const { onPress, character } = this.props;
    const image = character.image
      ? {uri: character.image}
      : require('../../../assets/images/placeholder.jpg');

    return (
      <TouchableOpacity onPress={() => onPress(character)} style={styles.container}>
        <Image source={image} style={styles.image}/>
        <View>
          <Text style={styles.name}>{character.name}</Text>
          <Text>{character.species}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

CharacterCard.defaultProps = {
  onPress: () => {},
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
  onPress: PropTypes.func
};


export default CharacterCard;